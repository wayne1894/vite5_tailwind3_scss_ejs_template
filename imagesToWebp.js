const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imageFolder = './dist/assets'; // 设置你的图片文件夹路径
const folderPath = './dist'; // 设置你的 HTML 文件夹路径
const folderPathCss = './dist/assets'; // 设置你的css文件夹路径

// 读取文件夹中的文件列表
fs.readdir(imageFolder, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  // 过滤出图片文件（你可以根据需要设置更多的图片格式）
  const imageFiles = files.filter(file => ['.jpg', '.jpeg', '.png'].some(ext => file.endsWith(ext)));

  // 遍历每个图片文件
  imageFiles.forEach(file => {
    const filePath = path.join(imageFolder, file);
    // 使用 Sharp 库将图片转换为 WebP 格式
    sharp(filePath)
      .toFile(`${filePath.slice(0, -4)}.webp`, (err, info) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`${file} converted to WebP`);

        let originalFileName = file.split('.').slice(0, -1).join('.');

        const htmlFiles = fs.readdirSync(folderPath).filter(file => {
          const filePath = path.join(folderPath, file);
          const stats = fs.statSync(filePath);
          return stats.isFile() && fs.readFileSync(filePath, 'utf8').includes(originalFileName);
        });

        //遍历每个包含图片引用的 HTML 文件
          htmlFiles.forEach(file => {
            const filePath = path.join(folderPath, file);
            // 读取文件内容
            let fileContent = fs.readFileSync(filePath, 'utf8');
            // 替换对应图片文件名（只替换包含图片引用的 HTML 文件）
            const regex = new RegExp(`${originalFileName}\\.(jpg|jpeg|png)`, 'g');
            fileContent = fileContent.replace(regex, `${originalFileName}.webp`);
            fs.writeFileSync(filePath, fileContent, 'utf8');
            console.log(`${file} img to webp`);
          });


          const cssFiles = fs.readdirSync(folderPathCss).filter(file => {
            const filePath = path.join(folderPathCss, file);
            const stats = fs.statSync(filePath);
            return stats.isFile() && fs.readFileSync(filePath, 'utf8').includes(originalFileName);
          });
  
          //遍历每个包含图片引用的 CSS 文件
            cssFiles.forEach(file => {
              const filePath = path.join(folderPathCss, file);
              // 读取文件内容
              let fileContent = fs.readFileSync(filePath, 'utf8');
              // 替换对应图片文件名（只替换包含图片引用的 HTML 文件）
              const regex = new RegExp(`${originalFileName}\\.(jpg|jpeg|png)`, 'g');
              fileContent = fileContent.replace(regex, `${originalFileName}.webp`);
              fs.writeFileSync(filePath, fileContent, 'utf8');
              console.log(`${file} url to webp`);
            });



      });
  });
});