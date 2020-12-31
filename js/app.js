const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxex);

checkBoxex();

function checkBoxex() {
    let windowInnerHeight = window.innerHeight * (4 / 5);
    console.log(windowInnerHeight);

    boxes.forEach(function (box) {
        if (box.getBoundingClientRect().top < windowInnerHeight) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}