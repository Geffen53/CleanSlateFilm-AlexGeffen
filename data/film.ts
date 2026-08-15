import type { Festival, GalleryImage, Person } from './types';

export const film = {
  title: 'Clean Slate',
  synopsis:
    'When a new government-sanctioned program is implemented to reduce prison numbers by erasing violent offenders’ memories, the retribution falls to the survivors of their victims.',
  descriptor: 'A dystopian sci-fi that tackles social issues and the ripple effects of trauma.',
  contactEmail: 'CleanSlateProduction@gmail.com',
  imdbUrl: 'https://www.imdb.com/title/tt36970118/',
  trailerUrl: 'https://www.youtube-nocookie.com/embed/vlGzqpS5-n8',
  pressKit: 'https://media.cleanslatefilm.com/press/clean-slate-press-kit.pdf',
  facts: [
    ['Genre', 'Sci-fi, Thriller, Drama'],
    ['Running time', '15 minutes'],
    ['Production company', 'Huckabay Productions'],
    ['Production location', 'Los Angeles, California'],
    ['Aspect ratio', '16:9'],
    ['Audio format', '5.1 Surround Sound'],
    ['Length', 'Short'],
    ['Original language', 'English'],
    ['Production year', '2025'],
    ['Exhibition format', 'Digital Projection (DCP)'],
    ['Subtitles', 'English, German, Spanish, Italian, Filipino'],
  ] as const,
};

export const filmmakers: Person[] = [
  {
    name: 'Alex Geffen',
    role: 'Writer / Co-Director',
    image: '/media/filmmakers/alex-geffen.webp',
    bio: 'Alex Geffen is a Texas-raised, Los Angeles based actor, writer, director, and editor. While acting is his first love, he has spent over a decade editing for film and television. He believes storytelling especially through film, has a unique power to shift perspectives and spark real-world change in a way traditional media often cannot. Focused on exploring the human condition, Alex aims to create work that challenges, inspires, and encourages other filmmakers to do the same.',
  },
  {
    name: 'Cass Huckabay',
    role: 'Producer / Co-Director',
    image: '/media/cast/cass-huckabay.webp',
    bio: 'Cass Huckabay is an actor, director, and producer based in Los Angeles whose work spans both sides of the camera. After acting in nine feature films, she brings a deep understanding of performance and storytelling to her directorial debut, as well as a keen eye for creative detail. Cass is currently producing a feature in collaboration with Om Films (Paper Tiger), as well as 3 other feature films and an unannounced TV series.',
  },
];

export const statements = [
  {
    name: 'Alex Geffen',
    role: 'Writer / Co-Director',
    text: [
      'With a background in film and television production, I’ve spent years shaping stories from behind the scenes. That experience taught me the power of emotional truth. My goal has always been to craft stories that speak to the complexities of the human experience.',
      'I wrote "Clean Slate," as an allegory for the current social climate, particularly in America. At its core, it challenges viewers to reflect on their own moral compass in the face of sweeping systemic changes, especially those that feel distant or irrelevant at first glance. It’s a dark reflection of our world, questioning whether those in power are actually helping a broken system, or are ultimately doing more harm than good.',
      'Beyond its commentary, the film also asks a deeper, more personal question: What does it mean to be human? Can we truly be reborn or are we destined to repeat the mistakes of our past whether we remember those mistakes or not.',
    ],
  },
  {
    name: 'Cass Huckabay',
    role: 'Producer / Co-Director',
    text: [
      'As a female filmmaker, I’ve had to navigate a space where women are too frequently expected to play small and safe—both behind and in front of the camera. But I didn’t enter this industry to play small. I came here to tell stories that rattle something loose, that peel back the layers of what we accept as “normal,” and ask why we’re so comfortable with systems that are broken—in film and in life.',
      'This short film confronts something I see every day in our culture: the tendency to cover and bandage our systematic wounds rather than heal them. We don’t ask what the root of any problem could be, but instead slap a quick fix onto a centuries-old issue. I believe in the power of cinema to open conversations and provoke reflection. Even if it is hard to watch.',
    ],
  },
];

export const festivals: Festival[] = [
  { name: 'Midwest Weirdfest', location: 'Eau Claire, Wisconsin', date: 'March 5–8, 2026', recognition: 'Best Short Thriller', laurelDark: '/media/festivals/midwest-dark.png', laurelLight: '/media/festivals/midwest-light.png' },
  { name: 'BraveMaker Film Fest', location: 'Redwood City, California', date: 'July 8–13, 2026', recognition: 'Official Selection', laurelDark: '/media/festivals/bravemaker-dark.png', laurelLight: '/media/festivals/bravemaker-light.png' },
  { name: 'GenreBlast Film Festival', date: 'September 3–6, 2026', recognition: 'Official Selection', laurelDark: '/media/festivals/genreblast-dark.png', laurelLight: '/media/festivals/genreblast-light.png' },
  { name: 'Brooklyn SciFi Film Festival', location: 'Brooklyn, New York', date: 'October 6–12, 2025', recognition: 'Official Selection', laurelDark: '/media/festivals/brooklyn-light.png', laurelLight: '/media/festivals/brooklyn-dark.png' },
  { name: 'Tees Valley International Film Festival', location: 'Stockton-on-Tees, U.K.', date: 'November 6–8, 2025', recognition: 'Award Nominee', laurelDark: '/media/festivals/tees-dark.png', laurelLight: '/media/festivals/tees-light.png' },
];

export const stills: GalleryImage[] = [
  { src: '/media/stills/katie-truth.jpg', alt: 'Katie discovers the truth in the kitchen', caption: 'Katie sees the truth', width: 1800, height: 1012 },
  { src: '/media/stills/heather.jpg', alt: 'Heather in the kitchen', caption: 'Heather in pain', width: 1800, height: 1012 },
  { src: '/media/stills/interview.jpg', alt: 'Dr. Miller and Interviewer Leslie', caption: 'The interview', width: 1800, height: 1012 },
  { src: '/media/stills/mail.jpg', alt: 'Eric waving near the mailbox', caption: 'Mail time', width: 1800, height: 1012 },
  { src: '/media/stills/eric-trevor.jpg', alt: 'Eric and Trevor confronting each other', caption: 'Eric versus Trevor', width: 1800, height: 1012 },
  { src: '/media/stills/trevor.jpg', alt: 'Trevor confronting Eric', caption: 'You remember me', width: 1800, height: 1012 },
  { src: '/media/stills/eric-crib.jpg', alt: 'Close-up of Eric by the crib', caption: 'Eric at the crib', width: 1800, height: 1012 },
  { src: '/media/stills/trevor-crib.jpg', alt: 'Close-up of Trevor by the crib', caption: 'Trevor at the crib', width: 1800, height: 1012 },
  { src: '/media/stills/crib-wide.jpg', alt: 'Trevor finding Mackenzie in the crib', caption: 'Trevor finds Mackenzie', width: 1800, height: 1012 },
];

export const btsImages: GalleryImage[] = [
  { src: '/media/bts/cast-final-day.jpg', alt: 'Clean Slate cast on the final day', caption: 'Cast — final day', width: 1600, height: 1305 },
  { src: '/media/bts/cast-crew.jpg', alt: 'Clean Slate cast and crew together', caption: 'End of location one', width: 1600, height: 1066 },
  { src: '/media/bts/alex-cass.jpg', alt: 'Alex Geffen and Cass Huckabay on set', caption: 'Alex Geffen and Cass Huckabay', width: 1600, height: 1066 },
  { src: '/media/bts/playback.jpg', alt: 'Cass Huckabay and Michael Cunningham reviewing playback', caption: 'Reviewing playback', width: 1600, height: 1066 },
  { src: '/media/bts/living-room-direction.jpg', alt: 'Alex Geffen discussing the living room scene', caption: 'Living room scene', width: 1600, height: 1066 },
  { src: '/media/bts/final-shot.jpg', alt: 'Directors viewing the final shot', caption: 'The final shot', width: 1600, height: 1066 },
  { src: '/media/bts/outdoor-crew.jpg', alt: 'Crew preparing an outdoor shot', caption: 'Preparing the outdoor shots', width: 1600, height: 1066 },
  { src: '/media/bts/mail-directors.jpg', alt: 'Alex Geffen and Cass Huckabay at the mailbox set', caption: 'Between takes', width: 1600, height: 1066 },
  { src: '/media/bts/cass-directing.jpg', alt: 'Cass Huckabay directing Michael Cunningham during the crib scene', caption: 'Cass directing', width: 1800, height: 1200 },
  { src: '/media/bts/alex-cass-directing-cu.jpg', alt: 'Alex Geffen and Cass Huckabay lining up a close-up shot on set', caption: 'Alex and Cass directing', width: 1800, height: 1200 },
  { src: '/media/bts/gun-pointing.jpg', alt: 'Clean Slate crew filming the living room confrontation at gunpoint', caption: 'Living room scene', width: 1800, height: 1200 },
];
