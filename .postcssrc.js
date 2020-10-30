// https://github.com/michael-ciniawsky/postcss-load-config

// module.exports = {
//   "plugins": {
//     "postcss-import": {},
//     "postcss-url": {},
//     // to edit target browsers: use "browserslist" field in package.json
//     "autoprefixer": {}
//   }
// }
module.exports = {
  plugins: {
    "autoprefixer": {},
    "postcss-pxtorem": {
      "rootValue": 37.5, // 设计稿宽度的1/10
      "unitPrecision": 5, //小数位
      "minPixelValue": 1, //转换的最小单位
      "selectorBlackList": [], //忽略的样式, 正则
      "propList": ["*"] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部，正则
    }
  }
}
