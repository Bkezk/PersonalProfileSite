




const fontFamilyList = ['Tahoma', 'sans-serif', 'Impact', 'Haettenschweiler', 'Arial Narrow Bold', 
'Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'Times New Roman', 'Times', 'serif'];


let rand = fontFamilyList[Math.floor(Math.random() * fontFamilyList.length)]

console.log(rand);
//const random = () => {document.getElementsById('H').style.fontFamily = rand;}

//document.getElementById('RB').addEventListener('click', random);