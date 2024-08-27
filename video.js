var muthurVid = document.querySelector('.muthur');
if (muthurVid) {
    muthurVid.addEventListener("ended", (event) => {
        document.location.href = "intro-text.html";
    });
}