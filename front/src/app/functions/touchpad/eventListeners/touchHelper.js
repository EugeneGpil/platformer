const isFirstTouch = e => e.changedTouches[0].identifier === 0

export default {
    runIfFirstTouch: (e, callback) => isFirstTouch(e) && callback(e),
}
