function download() {
    if (document.querySelectorAll("*")) {
        document.querySelectorAll("*")["loading"].style.visibility="hidden";
        document.querySelectorAll("*")["loaded"].style.visibility="visible";
    }
}