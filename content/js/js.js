function parallax() {
    var parallax1 = document.getElementById('parallax1');
    parallax1.style.top = -window.pageYOffset + 'px';
}

window.addEventListener("scroll", parallax, false);

console.log('connected');