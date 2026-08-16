import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const failures = [];

function walk(directory) {
  if (!fs.existsSync(directory)) return [];
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

const appFiles = walk(path.join(root, 'app'));
const serverBoundaryFiles = appFiles.filter((filePath) => {
  const relativePath = path.relative(root, filePath).split(path.sep).join('/');
  return relativePath.startsWith('app/api/')
    || relativePath.startsWith('app/actions/')
    || /(^|\/)(route|middleware|proxy)\.(m?js|ts|tsx)$/.test(relativePath);
});

if (serverBoundaryFiles.length > 0) {
  failures.push(`Unexpected server boundary files found:\n${serverBoundaryFiles.map((filePath) => `- ${path.relative(root, filePath)}`).join('\n')}`);
}

const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
for (const dependency of ['nodemailer', '@types/nodemailer']) {
  if (dependency in dependencies) failures.push(`Unused mail-relay dependency remains: ${dependency}`);
}

for (const envFile of ['.env', '.env.local', '.env.development.local', '.env.test.local', '.env.production.local']) {
  if (fs.existsSync(path.join(root, envFile))) failures.push(`Local secret file must not exist in the build workspace: ${envFile}`);
}

if (failures.length > 0) {
  console.error(['Security boundary check failed:', ...failures].join('\n'));
  process.exitCode = 1;
} else {
  console.log('Security boundary check passed: static-only app, no mail relay, no local secret files.');
}
