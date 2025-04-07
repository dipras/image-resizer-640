const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Direktori sumber dan output
const inputDir = path.join(__dirname, 'images');
const outputDir = path.join(__dirname, 'resized');

// Buat folder output jika belum ada
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Ambil semua file di dalam folder input
fs.readdir(inputDir, (err, files) => {
    if (err) {
        return console.error('Error membaca direktori:', err);
    }

    files.forEach((file) => {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file);

        // Periksa apakah file adalah gambar
        if (/\.(jpe?g|png|webp)$/i.test(file)) {
            sharp(inputPath)
                .resize(640, 640)
                .toFile(outputPath)
                .then(() => {
                    console.log(`Berhasil resize: ${file}`);
                })
                .catch((err) => {
                    console.error(`Gagal resize ${file}:`, err);
                });
        }
    });
});

