let isInputHide = false;

function hideInput() {
    if (isInputHide) {
        let div = document.getElementById("classLevels");
        let button = document.getElementById("toggleInputButton");
        div.style.left = "";
        button.style.position = "fixed";
        button.style.left = "";
        isInputHide = false;
    } else {
        let div = document.getElementById("classLevels");
        let button = document.getElementById("toggleInputButton");
        div.style.left = "-500px";
        button.style.position = "absolute";
        button.style.left = "80px";
        isInputHide = true;
    }
}