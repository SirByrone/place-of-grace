const fs = require('fs');
const path = require('path');

// Create photo folder structure
const photoFolders = [
  'public/assets/photos/children',
  'public/assets/photos/events',
  'public/assets/photos/facilities',
  'public/assets/photos/team',
  'public/assets/photos/activities',
  'public/assets/videos',
  'public/assets/thumbnails',
  'public/assets/documents'
];

console.log('Creating photo folder structure...');

photoFolders.forEach(folder => {
  const fullPath = path.join(__dirname, folder);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✅ Created: ${folder}`);
  } else {
    console.log(`📁 Already exists: ${folder}`);
  }
});

console.log('\n📁 Photo folder structure created successfully!');
console.log('\n📋 Next steps:');
console.log('1. Add your photos to the appropriate folders');
console.log('2. Follow the naming convention: category-description-2024.jpg');
console.log('3. Optimize images for web (max 2MB, 1200x800px minimum)');
console.log('4. Update the images array in src/pages/GalleryPage.js');
console.log('5. Test the gallery functionality');
