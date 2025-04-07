const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'images');
const outputDir = path.join(__dirname, 'resized');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}


const handleDir = dir => {
    const dirPath = path.join(inputDir, dir);
    const outDirPath = path.join(outputDir, dir);
    if (!fs.lstatSync(dirPath).isDirectory()) return;

    if (!fs.existsSync(outDirPath)) {
        fs.mkdirSync(outDirPath);
    }

    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const inputPath = path.join(dirPath, file);
        const outputPath = path.join(outDirPath, file);

        if (/\.(jpe?g|png|webp)$/i.test(file)) {
            sharp(inputPath)
                .resize(640, 640, {
                    fit: 'fill',
                })
                .toFile(outputPath)
                .then(() => {
                    console.log(`Berhasil resize: ${file}`);
                })
                .catch((err) => {
                    console.error(`Gagal resize ${file}:`, err);
                });
        }
    })
}
fs.readdir(inputDir, (err, subdir) => {
    if (err) {
        return console.error('Error membaca direktori:', err);
    }

    subdir.forEach(handleDir);
});

