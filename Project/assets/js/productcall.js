
const row = document.querySelector('.prod-row');
const basket = [];

const addToCart = (addProd) => {
    basket.push(addProd);
    const localBasket = JSON.stringify(basket);
    localStorage.setItem('basket', localBasket);
}


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
      document.querySelector("#pagi").className = "d-none";

    } else {

      if (data == []) {
        col = "<h1>Loading...</h1>"
      } else {

        let a = localStorage.getItem('a');
        let b = localStorage.getItem('b');
        
          data.slice(a, b).map(i => {
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

        document.querySelectorAll('.page-item')[0].onclick = () => {
          localStorage.setItem("a","0");
          localStorage.setItem("b","8");
          window.location.reload();
        };
        document.querySelectorAll('.page-item')[1].onclick = () => {
          localStorage.setItem("a","8");
          localStorage.setItem("b","16");
          window.location.reload();
          document.querySelectorAll('.page-item')[1].classList.add("active");
        };
        document.querySelectorAll('.page-item')[2].onclick = () => {
          localStorage.setItem("a","16");
          localStorage.setItem("b","20");
          window.location.reload();
          document.querySelectorAll('.page-item')[2].classList.add("active");
        };
      }
      document.querySelector("#pagi").className = "d-flex";

    }
    
    row.innerHTML = col;

    data.map((i, c) => {
      document.querySelectorAll("#btn-p")[c].onclick = () => {
  
          addToCart(i);
      
      };
  })  

  });


  






