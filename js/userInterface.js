let isInputHide = false;
let hpMax = 100;
let hp = hpMax;
let temphp = 0;

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

function manageHealth(button) {
    switch (button) {
        case "Damage":
            let damage = getNumberViaUser("How much damage do you take?");
            let tempTemp = temphp;
            temphp = (damage>=temphp)?0:damage-temphp;
            damage = Math.max(damage - tempTemp,0);
            hp = hp - damage;
            hp = (hp>0)?(hp>hpMax)?hpMax:hp:0;
            break;
        case "Heal":
            let healing = getNumberViaUser("How healing do you get?")
            hp = hp + healing;
            hp = (hp>0)?(hp>hpMax)?hpMax:hp:0;
            break;
        case "TempHP":
            temphp = getNumberViaUser("What is the new temp HP?");
            break;
        default:
            break;
    }
    let color1 = document.getElementById("hpColor1");
    let text = document.getElementById("hpText");
    let color2 = document.getElementById("hpColor2");
    let left;
    let color = "hsl("+String(120*hp/hpMax)+",100%,50%)";
    console.log(temphp);
    if (temphp>0) {
        text.innerHTML = "<span style='color:"+color+";'>"+hp+"/"+hpMax+"</span> + "+temphp;
    } else {
        text.innerHTML = "<span style='color:"+color+";'>"+hp+"/"+hpMax+"</span>";
    }
    left = (hp/hpMax)*180-90;
    if (hp/hpMax > 0.5) {
        left = left - 90;
        color2.style.backgroundColor = color;
    } else {
        color2.style.backgroundColor = "rgb(0, 0, 77)";
    }
    document.getElementById("tempHP").style.width = ((temphp>hpMax)?hpMax*180:(180*temphp/hpMax))+"px";
    color1.style.backgroundColor = color;
    color2.style.left = String(left)+"px";
}

// Function to get a valid number from the user
function getNumberViaUser(message) {
    let userInput;
    do {
        userInput = prompt(message); // Prompt the user for input
        // Check if the input is a valid number
        if (userInput == null) {
            alert("You canceled the input.");
            return null; // Exit if the user clicks "Cancel"
        }
    } while (isNaN(userInput) || userInput.trim() === ""); // Repeat if input is not a valid number
    return Number(userInput);
}