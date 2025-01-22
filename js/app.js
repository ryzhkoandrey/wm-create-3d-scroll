// 3D Scroll

let zSpacing = -1000,
    lastPos = zSpacing / 5,
    $frames = document.getElementsByClassName('frame'),
    frame = Array.from($frames),
    zVal = [];

window.onscroll = function () {

    let top = document.documentElement.scrollTop,
        delta = lastPos - top;

    lastPos = top;

    frames.forEach(function () { });
}