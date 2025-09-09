let isInputHide = false;
let hpMax = 10;
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

function damageHealth(damage) {
    let color1 = document.getElementById("hpColor1");
    let text = document.getElementById("hpText");
    let color2 = document.getElementById("hpColor2");
    hp = hp - damage;
    let left;
    let color = "hsl("+String(120*hp/hpMax)+",100%,50%)";
    text.innerText = hp+"/"+hpMax;
    if (hp/hpMax > 0.5) {
        left = (hp/hpMax)*180-180;
        color2.style.backgroundColor = color;
    } else {
        left = (hp/hpMax)*180-90;
        color2.style.backgroundColor = "blue";
    }
    color1.style.backgroundColor = color;
    console.log(left);
    color2.style.left = String(left)+"px";
}