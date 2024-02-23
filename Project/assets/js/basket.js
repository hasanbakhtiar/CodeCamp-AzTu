const productData = [
    {
        id: 2,
        title: "product two",
        price: 500
    },
    {
        id: 1,
        title: "product one",
        price: 300
    }

]

const basket = [];

const addToCart = (addProd) => {
    basket.push(addProd);
    const localBasket = JSON.stringify(basket);
    localStorage.setItem('basket', localBasket);
}

// DOM start

const ulProduct = document.querySelector('#prodcutList');
const ulBasket = document.querySelector('#basketList');
const showProduct = () => {

    let liP = "";
    productData.map(i => {
        liP += `<li>${i.title}<button id="btn-p">add</button></li>`;

    })
    ulProduct.innerHTML = liP;

}

showProduct();

const pressProductBtn = (a) => {
    console.log(a);
}
productData.map((i, c) => {
    document.querySelectorAll("#btn-p")[c].onclick = () => {

        addToCart(i);
    };
})

console.log(basket);


const showBasket = () => {
    const callLocal = JSON.parse(localStorage.getItem('basket'));
    console.log(callLocal);
    let liB = "";
    callLocal.map(i => {
        liB += `<li>${i.title}</li>`
    })
    ulBasket.innerHTML = liB;
}
showBasket();

