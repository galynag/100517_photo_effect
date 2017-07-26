document.querySelector('.test').onmousemove = function (event) {
    var img2 = document.querySelector('.img2');
    img2.style.width=event.offsetX+'px';
}
