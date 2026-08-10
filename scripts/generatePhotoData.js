import { readdir, writeFile, mkdir } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const DATA_DIR = path.join(PUBLIC_DIR, 'data');
const HERO_FOLDER = 'HOME_HERO';
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif']);

const DEFAULT_YEAR = process.env.PHOTO_YEAR ?? '2024';

const DISPLAY_NAME_MAP = {
  'Artistic': 'Artistic',
  'Awards': 'Awards',
  'Bridal Showers': 'Bridal Showers',
  'Bridal-Showers': 'Bridal Showers',
  'Casual Events': 'Events',
  'Casual-Events': 'Events',
  'Comedy': 'Comedy',
  'Corporate Events': 'Corporate',
  'Corporate-Events': 'Corporate',
  'Dance': 'Dance',
  'Dinners': 'Dinners',
  'MUSICIAN': 'Music',
  'NonProfits': 'Non-Profits',
  'Podcasting': 'Podcasting',
  'Portrait': 'Portraits',
  'Product': 'Products',
  'Speakers': 'Speakers',
  'Tabling': 'Tabling'
};

function extractYear(filename) {
  const match = filename.match(/\b(19|20)\d{2}\b/);
  return match ? match[0] : DEFAULT_YEAR;
}

function isImageFile(name) {
  const ext = path.extname(name).toLowerCase();
  return IMAGE_EXTENSIONS.has(ext);
}

function formatDisplayName(folder) {
  if (DISPLAY_NAME_MAP[folder]) return DISPLAY_NAME_MAP[folder];
  return folder.replace(/[_-]+/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

async function collectGalleryFolders() {
  const entries = await readdir(PUBLIC_DIR, { withFileTypes: true });
  return entries
    .filter(entry => 
      entry.isDirectory() && 
      entry.name !== HERO_FOLDER && 
      entry.name !== 'data' &&
      entry.name !== 'MasSelfies_clients'
    )
    .map(entry => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
}

async function collectFiles(folderName) {
  const folderPath = path.join(PUBLIC_DIR, folderName);
  const dirents = await readdir(folderPath, { withFileTypes: true });
  return dirents
    .filter(entry => entry.isFile() && isImageFile(entry.name))
    .map(entry => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
}

async function collectHeroImages() {
  const heroPath = path.join(PUBLIC_DIR, HERO_FOLDER);
  try {
    const entries = await readdir(heroPath, { withFileTypes: true });
    const heroImages = [];
    
    for (const entry of entries) {
      if (entry.isFile() && isImageFile(entry.name)) {
        const absolutePath = path.join(heroPath, entry.name);
        try {
          const metadata = await sharp(absolutePath).metadata();
          const buffer = await sharp(absolutePath)
            .resize(10)
            .webp({ quality: 20 })
            .toBuffer();
          const blurDataURL = `data:image/webp;base64,${buffer.toString('base64')}`;
          
          heroImages.push({
            imageUrl: `/${HERO_FOLDER}/${entry.name}`,
            width: metadata.width,
            height: metadata.height,
            blurDataURL
          });
        } catch (err) {
          heroImages.push({
            imageUrl: `/${HERO_FOLDER}/${entry.name}`
          });
        }
      }
    }
    return heroImages.sort((a, b) => a.imageUrl.localeCompare(b.imageUrl));
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.warn(`⚠️ ${HERO_FOLDER} folder not found. Skipping hero image generation.`);
      return [];
    }
    throw error;
  }
}

async function createPhotoEntry(folder, filename) {
  const displayClient = formatDisplayName(folder);
  const title = `${displayClient} Photo`;
  const relativePublicPath = path.posix.join('public', folder, filename);
  const absolutePath = path.join(PUBLIC_DIR, folder, filename);
  
  let width = 1200;
  let height = 1600;
  let blurDataURL = undefined;

  try {
    const image = sharp(absolutePath);
    const metadata = await image.metadata();
    width = metadata.width || 1200;
    height = metadata.height || 1600;
    
    const buffer = await image
      .resize(10)
      .webp({ quality: 20 })
      .toBuffer();
    blurDataURL = `data:image/webp;base64,${buffer.toString('base64')}`;
  } catch (error) {
    console.warn(`⚠️ Could not get metadata for ${filename}:`, error.message);
  }

  const aspectRatio = width > height ? 'aspect-video' : (height > width * 1.2 ? 'aspect-[3/4]' : 'aspect-square');

  return {
    id: Buffer.from(relativePublicPath).toString('base64'),
    title,
    category: 'Photo',
    imageUrl: `/${folder}/${filename}`,
    client: displayClient,
    year: extractYear(filename),
    aspectRatio,
    width,
    height,
    blurDataURL
  };
}

async function ensureDataDir() {
  await mkdir(DATA_DIR, { recursive: true });
}

async function generate() {
  await ensureDataDir();
  const galleryFolders = await collectGalleryFolders();
  const photos = [];

  for (const folder of galleryFolders) {
    const files = await collectFiles(folder);
    console.log(`Processing folder: ${folder} (${files.length} photos)...`);
    // Process in smaller batches to avoid memory issues if needed, but 1000 should be okay in chunks
    const entries = await Promise.all(files.map(filename => createPhotoEntry(folder, filename)));
    photos.push(...entries);
  }

  const heroImages = await collectHeroImages();

  await writeFile(path.join(DATA_DIR, 'photos.json'), JSON.stringify(photos, null, 2), 'utf8');
  await writeFile(path.join(DATA_DIR, 'heroImages.json'), JSON.stringify(heroImages, null, 2), 'utf8');

  console.log(`✅ Generated ${photos.length} photo entries and ${heroImages.length} hero images.`);
}

generate().catch((error) => {
  console.error('❌ Failed to generate photo data:', error);
  process.exitCode = 1;
});