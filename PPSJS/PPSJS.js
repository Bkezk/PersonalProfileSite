

let myName = document.getElementById('bk');

let nameChange = () => {
    myName.innerHTML = "booty";
}

myName.addEventListener('click', nameChange);

/*const fontFamilyList = ['Tahoma', 'sans-serif', 'Impact', 'Haettenschweiler', 'Arial Narrow Bold', 
'Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'Times New Roman', 'Times', 'serif'];


let rand = fontFamilyList[Math.floor(Math.random() * fontFamilyList.length)]
let htmlFont = document.getElementById('H');
//console.log(rand);
const random = () => {htmlFont.style.fontFamily = rand;}

let randomButton = document.getElementById('RB');

randomButton.onclick = random;*/