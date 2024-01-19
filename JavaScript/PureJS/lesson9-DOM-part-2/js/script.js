// const text = document.querySelector('h1');
// const btn = document.querySelector('button');
// let sWitch = true;

// btn.onclick = ()=>{
//    if (sWitch) {
//     text.style.backgroundColor = 'green';
//     text.style.transition = '.5s';
//     sWitch = false;
//    }else{
//     text.style.backgroundColor = '#fff';
//     text.style.transition = '.5s';
//     sWitch = true;

//    }
// }
// ==============================================

// const text = document.querySelector('h1');
// const btn = document.querySelector('button');



// btn.onclick =()=>{
//     if(text.className == "colorFull"){
//         text.className = "monoColor";
//     }else{
//         text.className = "colorFull";
//     }
// }



// ==============================================

// const photo = document.querySelectorAll('img');
const text = document.querySelector('h1');
const btn = document.querySelectorAll('button')[1];


const mode = document.querySelector('#mode');
btn.onclick = ()=>{
    if (mode.className == 'light') {
        mode.className = 'dark'
        document.querySelector('nav').className = "navbar navbar-expand-lg bg-dark navbar-dark"
        btn.innerHTML = "Light"
        
    }else{
        mode.className = 'light'
        btn.innerHTML = "Dark"
        document.querySelector('nav').className = "navbar navbar-expand-lg bg-light navbar-light"

    }
        // text.classList.toggle('colorFull');
}








// let sWich = true;

// btn.onclick = ()=>{
//     if (sWich) {
//     photo.attributes[1].value = "https://wallup.net/wp-content/uploads/2016/05/24/304149-nature.jpg"
//         sWich = false;
//     }else{
//     photo.attributes[1].value = "https://wallpapercave.com/wp/wp5042743.jpg"
//         sWich = true;

//     }
    
// }

// let switchTool = true;
// btn.onclick = ()=>{
//        if (switchTool) {
//         photo[1].style.opacity = "0";
//         photo[0].style.opacity = "1";
//         switchTool = false;
//        }else{
//         photo[1].style.opacity = "1";
//         photo[0].style.opacity = "0";
//         switchTool = true
//        }
// }






