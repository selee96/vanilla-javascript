const body = document.querySelector("body");

console.dir(body);

function handleBodyColor() {
    if(window.innerWidth >= 1800) {
        body.classList.add('yellow');
        body.classList.remove('purple');
    } else if (window.innerWidth >= 1200) {
        body.classList.remove('yellow');
        body.classList.add('purple');
    } else {
        body.classList.remove('yellow');
        body.classList.remove('purple');
    }
}

window.addEventListener("resize", handleBodyColor);


