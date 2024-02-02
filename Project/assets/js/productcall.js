
const row = document.querySelector('.row');

fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>{
    let col = "";
    let filterdata = data.filter(fd=>fd.category === decodeURI(location.href.slice(43,99)));
    filterdata.map(i=>{
        col+=`
        <div class="col-12 col-sm-12 col-md-3" >
        <div class="card" style="width: 18rem;">
          <img style="object-fit:contain" height="250" src="${i.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${i.title.slice(0,12)}...</h5>
            <p class="card-text">${i.price}$</p>
            <a href="#" class="btn btn-success">Add to card</a>
          </div>
        </div>
      </div>
        `
    })
    row.innerHTML = col;
})
console.log(window.location);