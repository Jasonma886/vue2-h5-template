const baseSize = 32
// 设置 rem 函数
function setRem () {
  let doc = document.documentElement
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = doc.clientWidth / 750
  // 设置页面根节点字体大小
  doc.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
// 初始化
setRem()

let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'

window.addEventListener(resizeEvt, setRem, false)
document.addEventListener('DOMContentLoaded', setRem, false)
