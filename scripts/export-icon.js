import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgBuffer = fs.readFileSync(path.resolve('public/pyreceipt-bot-icon.svg'));

async function exportIcons() {
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.resolve('public/pyreceipt-bot-icon.png'));

  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.resolve('assets/pyreceipt-bot-icon.png'));

  console.log('Successfully generated public/pyreceipt-bot-icon.png & assets/pyreceipt-bot-icon.png (512x512)');
}

exportIcons().catch(console.error);
