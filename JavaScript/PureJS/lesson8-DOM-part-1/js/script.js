
// document.getElementsByTagName('h1')[0].innerHTML = "new value";
// document.getElementsByClassName('test')[0].innerHTML = "new value one";
// document.getElementById('demo').innerHTML  = 'new value two'

// const listItem = document.getElementsByTagName('li');
// for (let i = 0; i < listItem.length; i++) {
//     listItem[i].innerHTML = "new data";
// }
// console.log(listItem.length);



// document.querySelector('li').innerHTML = "new data"
// document.querySelector('li').innerHTML = "new data"
// document.querySelector('li').innerHTML = "new data"

// document.querySelector('li').innerText  = "<b>new value</b>"



// function changeText() {
//     // console.log('button clicked');

//     const listItem = document.querySelectorAll('li');
//     for (let i = 0; i < listItem.length; i++) {
//         listItem[i].innerHTML = "new data";
//     }
// }
// document.querySelector('button').onclick = changeText;
// document.querySelector('button').onmouseenter = changeText;
// document.querySelector('button').onmouseleave = changeText;
// document.querySelector('button').onmouseover = changeText;
// document.querySelector('button').onmousedown = changeText;
// document.querySelector('button').onmouseup = ()=>{
//     const listItem = document.querySelectorAll('li');
//     for (let i = 0; i < listItem.length; i++) {
//         listItem[i].innerHTML = "data changed";
//     }
// };



// const text= document.querySelector('h1');

// const btn = document.querySelector('button');


// btn.onclick=()=>{
//     if (text.innerHTML === "England") {
//         text.innerHTML = "London";
//         btn.innerHTML  = "show country";
//     }else{
//         text.innerHTML = "England";
//         btn.innerHTML  = "show capital";
//     }
// }


const langData= {
    az:["Ana Sehfie","Haqqimizda","Xidmetlerimiz","Meqale","Elaqe"],
    en:["Home","About","Service","Blog","Contact"]
}

const langBtn = document.querySelector('#lang-btn');
const langItem = document.querySelectorAll('.nav-link');

function multiLang (){
    if (langBtn.innerHTML == 'AZ') {
        for(let i in langData.az){
            langItem[i].innerHTML = langData.az[i];
        }
        langBtn.innerHTML = 'EN';
    }else{
        for(let i in langData.en){
            langItem[i].innerHTML = langData.en[i];
        }
        langBtn.innerHTML = 'AZ';
    }
}

langBtn.addEventListener("click",multiLang, false)

// langBtn.onclick = multiLang;