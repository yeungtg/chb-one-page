((win, doc) => {
  const docEl = doc.documentElement
  const resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize'
  const recalc = () => {
    console.log(111);
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    clientWidth = clientWidth > 414 ? 414 : clientWidth
    docEl.style.fontSize = (clientWidth / 375 * 37.5) + 'px'
  }

  if (!doc.addEventListener) return
  recalc()
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(window, document)
