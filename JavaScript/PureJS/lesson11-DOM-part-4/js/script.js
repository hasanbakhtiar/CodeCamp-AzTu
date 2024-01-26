// const myNewElem = document.createElement('h1');
// const myNewText = document.createTextNode("Hello JavaScript");
// myNewElem.appendChild(myNewText);
// document.body.appendChild(myNewElem);





const input  =document.querySelector("input");
const form = document.querySelector('form');
form.onsubmit=(e)=>{
    e.preventDefault();
   if (!input.value) {
    alert("please, fill input")
   }else{
    const li  = document.createElement('li');
    li.innerHTML = input.value;
    li.setAttribute("class","list-group-item");
    document.querySelector('ul').appendChild(li);
    input.value = "";
    li.onclick=()=>{
        li.style.textDecoration = "line-through"
    }

    li.ondblclick=()=>{
        li.remove();
    }
   }
}