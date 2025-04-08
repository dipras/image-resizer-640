# Image Resizer 640
Image Resizer 640 is a Node.js program designed to resize images located in subdirectories of the `images` folder to a fixed size of 640x640 pixels. The resized images are saved in the corresponding subdirectories of the `resized` folder. This project is particularly useful for preparing images for machine learning model training, where uniform image dimensions are required.

## Prerequisites

1. Install [Node.js](https://nodejs.org/) (version 14 or higher is recommended).
2. Ensure you have the `sharp` library installed. This program uses `sharp` for image processing.

## Installation

1. Clone or download this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the required dependencies:

   ```bash
   npm install

## Usage
1. Place the images you want to resize into subdirectories of the images folder. For example:
   ```
   images/
      nature/
         forest.jpg
         mountain.png
      animals/
         cat.webp
         dog.jpeg
   ```

2. Run the program using the following command:
   ```bash
   node [index.js](http://_vscodecontentref_/0)


3. The resized images will be saved in the resized folder, maintaining the same directory structure as the images folder. For example:
   ```
   resized/
      nature/
         forest.jpg
         mountain.png
      animals/
         cat.webp
         dog.jpeg
   ```

## Notes
- The program uses the fit: 'fill' option to ensure all images are resized to exactly 640x640 pixels.
- If the resized folder or its subdirectories do not exist, the program will create them automatically.
- Only files with .jpg, .jpeg, .png, or .webp extensions will be processed.

## Example Output
When the program runs successfully, you will see output like this in the terminal:
```
Berhasil resize: forest.jpg
Berhasil resize: mountain.png
Berhasil resize: cat.webp
Berhasil resize: dog.jpeg
```