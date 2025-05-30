// function imgSlider(anything) {
//     document.querySelector('.pepsi').src = anything;
// }
// imgSlider();

function imgSlider(src) {
    document.querySelector('.pepsi').src = src;
}

function changeBgcolor(color) {
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}