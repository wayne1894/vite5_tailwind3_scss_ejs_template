module.exports = {
  content: [
    "./**/*.{html,js}", // 所有資料夾下的 HTML 和 JavaScript 文件
    "!./node_modules/**/*", // 排除 node_modules 下的所有文件
    "!./dist/**/*", // 排除 dist 下的所有文件
  ],
  theme: {},
  plugins: [],
};
