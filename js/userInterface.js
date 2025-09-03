let isInputHide = false;
let hpMax = 100;
let hp = hpMax;

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

function compileCharacter() {
    // My phone screen is 360px in width, and 700px in height
    document.getElementById("classLevels").style.display = "none";
    document.getElementById("newSpell").style.display = "none";
    let str = document.getElementById("Str").value;
    let dex = document.getElementById("Dex").value;
    let con = document.getElementById("Con").value;
    let int = document.getElementById("Int").value;
    let wis = document.getElementById("Wis").value;
    let cha = document.getElementById("Cha").value;

    // let main = document.getElementById("main");
    // for (let i = 64; i > 0; i--) {
    //     let add = document.createElement("div");
    //     add.style.position = "absolute";
    //     add.style.height = "30px";
    //     add.style.width = i*20+"px";
    //     add.style.top = "0px";
    //     add.style.left = "0px";
    //     add.style.display = "flex";
    //     add.style.justifyContent = "flex-end";
    //     add.style.backgroundColor = "rgba("+4*i+","+4*i+","+4*i+", 10)";
    //     add.innerText = i;
    //     add.style.color = "red";
    //     main.appendChild(add);
    // }
    // for (let i = 64; i > 0; i--) {
    //     let add = document.createElement("div");
    //     add.style.position = "absolute";
    //     add.style.width = "30px";
    //     add.style.top = "0px";
    //     add.style.left = "0px";
    //     add.style.height = i*20+"px";
    //     add.style.display = "flex";
    //     add.style.alignItems = "flex-end";
    //     add.style.backgroundColor = "rgba("+4*i+","+4*i+","+4*i+", 10)";
    //     add.innerText = i;
    //     add.style.color = "red";
    //     main.appendChild(add);
    // }
}

function setHealth(damage) {
    let parent = document.getElementById("hpBar");

    hp = Math.min(Math.max(hp - damage, 0), hpMax);
}