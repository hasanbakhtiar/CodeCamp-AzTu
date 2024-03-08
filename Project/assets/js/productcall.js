
const row = document.querySelector('.prod-row');
const basket = [];

const addToCart = (addProd) => {
    basket.push(addProd);
    const localBasket = JSON.stringify(basket);
    localStorage.setItem('basket', localBasket);
  }

  let basketcount = 0;


fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    let col = "";
    if (location.href.slice(43, 99)) {
      let filterdata = data.filter(fd => fd.category === decodeURI(location.href.slice(43, 99)));
      filterdata.map(i => {
        col += `
          <div data-aos="flip-up" class="col-12 col-sm-12 col-md-3" >
          <div class="card" >
            <img style="object-fit:contain" height="250" src="${i.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${i.title.slice(0, 12)}...</h5>
              <p class="card-text">${i.price}$</p>
              <button id="btn-p" type="button" id="btn-p" class="btn btn-success">Add to card</button>
              
              <a href="productdetails.html?id=${i.id}"  class="btn btn-secondary">View details</a>
            </div>
          </div>
        </div>
          `
      })

    } else {
          data.map(i => {
            col += `
          <div data-aos="flip-up" class="col-12 col-sm-12 col-md-3 mycard" >
          <div class="card" >
          <img style="object-fit:contain" height="250" src="${i.image}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${i.title.slice(0, 12)}...</h5>
              <p class="card-text">${i.price}$</p>
              <button type="button" id="btn-p" class="btn btn-success">Add to card</button>
              <a href="productdetails.html?id=${i.id}"  class="btn btn-secondary">View details</a>
  
              </div>
              </div>
              </div>
              `  })
    }
    
    row.innerHTML = col;

    data.map((i, c) => {
      document.querySelectorAll("#btn-p")[c].onclick = () => {
        addToCart(i);
        swal({
          title: "Product added to basket!",
          text: "Good job!",
          icon: "success",
          button: "Ok",
        });
        
        basketcount+=1;
        document.querySelector('#basket-counter').innerHTML =basketcount;
        localStorage.setItem('basketcount',basketcount);
      };
      })  
      
    });
document.querySelector('#basket-counter').innerHTML =localStorage.getItem('basketcount');

    



  


  






