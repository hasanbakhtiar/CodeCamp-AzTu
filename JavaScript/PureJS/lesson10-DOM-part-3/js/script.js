const inputOne = document.querySelector('.vOne');
const inputTwo = document.querySelector('.vTwo');
const btn = document.querySelector("button");
const text = document.querySelector('h1');

btn.onclick=()=>{
    const total = inputOne.value * inputTwo.value;
    inputOne.value = "";
    inputTwo.value = "";
    text.innerHTML = total + "m<sup>2</sup>";
}













// localStorage.setItem()
// localStorage.getItem()
// localStorage.removeItem()
// localStorage.clear()

// const nav = document.querySelector('nav');
// const btnMode = document.querySelector('#btn-mode');
// if (localStorage.getItem("mode") === null) {
//     localStorage.setItem('mode', 'light');
// } else {
//     btnMode.onclick = () => {
//         if (btnMode.innerHTML == "Dark") {
//             nav.className = "navbar navbar-expand-lg bg-dark navbar-dark";
//             localStorage.setItem('mode', 'dark');

//             btnMode.innerHTML = "Light";
//         } else {
//             nav.className = "navbar navbar-expand-lg bg-body-tertiary";
//             btnMode.innerHTML = "Dark";
//             localStorage.setItem('mode', 'light');
//         }
//     }
// }
// if (localStorage.getItem('mode') === 'light') {
//     nav.className = "navbar navbar-expand-lg bg-body-tertiary";
//     btnMode.innerHTML = "Dark";
// } else {
//     nav.className = "navbar navbar-expand-lg bg-dark navbar-dark";
//     btnMode.innerHTML = "Light";
// }











// const btn  = document.querySelector('button');
// const btnText = document.querySelector('.lang-btn-text');

// btn.onclick=()=>{
//     if (btnText.innerHTML == "EN") {
//         btnText.innerHTML ="AZ"
//     }else{
//         btnText.innerHTML = "EN"
//     }
// }