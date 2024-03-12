



let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [];
let cart = [];


const addCartToHTML = () => {
  listCartHTML.innerHTML = '';
  let totalQuantity = 0;
  if (cart.length > 0) {
    cart.forEach(item => {
      totalQuantity = totalQuantity + item.quantity;
      let newItem = document.createElement('div');
      newItem.classList.add('item');
      newItem.dataset.id = item.product_id;

      let positionProduct = products.findIndex((value) => value.id == item.product_id);
      let info = products[positionProduct];
      listCartHTML.appendChild(newItem);
      newItem.innerHTML = `
            <tr>
               <td><img width="70" src="${info.image}"/></td>
               <td>${info.title}</td>
               <td>${info.price}$</td>
               <td><span class="totalPrice">$${info.price * item.quantity}</span></td>
               <td>
               <span class="quantity">
               <span class="minus btn btn-danger">-</span>
               <span>${item.quantity}</span>
               <span class="plus btn btn-success">+</span>
               </span>
               </td>
             </tr>
          
              
            `;
    })
  }
  iconCartSpan.innerText = totalQuantity;
}

listCartHTML.addEventListener('click', (event) => {
  let positionClick = event.target;
  if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
    let product_id = positionClick.parentElement.parentElement.dataset.id;
    let type = 'minus';
    if (positionClick.classList.contains('plus')) {
      type = 'plus';
    }
    changeQuantityCart(product_id, type);
  }
})
const changeQuantityCart = (product_id, type) => {
  let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
  if (positionItemInCart >= 0) {
    switch (type) {
      case 'plus':
        cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
        break;

      default:
        let changeQuantity = cart[positionItemInCart].quantity - 1;
        if (changeQuantity > 0) {
          cart[positionItemInCart].quantity = changeQuantity;
        } else {
          cart.splice(positionItemInCart, 1);
        }
        break;
    }
  }
  addCartToHTML();
  addCartToMemory();
}

const initApp = () => {
  // get data product
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      products = data;

      // get data cart from memory
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        addCartToHTML();
      }
    })
}
initApp();























// const tbody = document.querySelector("tbody");

// const comingBasketData = JSON.parse(localStorage.getItem("basket"));

// let tr = "";

// comingBasketData.map((i,c)=>{
//     tr+=`  <tr>
//     <th scope="row">${c+1}</th>
//     <td><img width="70" src="${i.image}"/></td>
//     <td>${i.title}</td>
//     <td>${i.price}$</td>
//   </tr>`
//   tbody.innerHTML = tr;
// })




// document.querySelector('#basket-counter').innerHTML =localStorage.getItem('basketcount');





// const productData = [
//     {
//         id: 2,
//         title: "product two",
//         price: 500
//     },
//     {
//         id: 1,
//         title: "product one",
//         price: 300
//     }

// ]

// const basket = [];

// const addToCart = (addProd) => {
//     basket.push(addProd);
//     const localBasket = JSON.stringify(basket);
//     localStorage.setItem('basket', localBasket);
// }

// // DOM start

// const ulProduct = document.querySelector('#prodcutList');
// const ulBasket = document.querySelector('#basketList');
// const showProduct = () => {

//     let liP = "";
//     productData.map(i => {
//         liP += `<li>${i.title}<button id="btn-p">add</button></li>`;

//     })
//     ulProduct.innerHTML = liP;

// }

// showProduct();

// const pressProductBtn = (a) => {
//     console.log(a);
// }
// productData.map((i, c) => {
//     document.querySelectorAll("#btn-p")[c].onclick = () => {

//         addToCart(i);
//     };
// })

// console.log(basket);


// const showBasket = () => {
//     const callLocal = JSON.parse(localStorage.getItem('basket'));
//     console.log(callLocal);
//     let liB = "";
//     callLocal.map(i => {
//         liB += `<li>${i.title}</li>`
//     })
//     ulBasket.innerHTML = liB;
// }
// showBasket();








