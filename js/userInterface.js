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

function compileCharacter() {
    // document.getElementById("classLevels").style.display = "none";
    // document.getElementById("newSpell").style.display = "none";
    // let str = document.getElementById("Str").value;
    // let dex = document.getElementById("Dex").value;
    // let con = document.getElementById("Con").value;
    // let int = document.getElementById("Int").value;
    // let wis = document.getElementById("Wis").value;
    // let cha = document.getElementById("Cha").value;

    let main = document.getElementById("main");
    for (let i = 16; i > 0; i--) {
        let add = document.createElement("div");
        add.style.position = "absolute";
        add.style.height = "30px";
        add.style.width = i*30+"px";
        add.style.backgroundColor = "rgba("+8*i+","+8*i+","+8*i+", 10)"
        main.appendChild(add);
    }
    for (let i = 16; i > 0; i--) {
        let add = document.createElement("div");
        add.style.position = "absolute";
        add.style.width = "30px";
        add.style.height = i*30+"px";
        add.style.backgroundColor = "rgba("+8*i+","+8*i+","+8*i+", 10)"
        main.appendChild(add);
    }
}

window.onload(compileCharacter());