
const row = document.querySelector('.row');

fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>{

  console.log(data);
    let col = "";
    let filterdata = data.filter(fd=>fd.category === decodeURI(location.href.slice(43,99)));
    filterdata.map(i=>{
      console.log(i);
        col+=`
        <div class="col-12 col-sm-12 col-md-3" >
        <div class="card" >
          <img style="object-fit:contain" height="250" src="${i.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${i.title.slice(0,12)}...</h5>
            <p class="card-text">${i.price}$</p>
            <button type="button" id="basket-btn" class="btn btn-success">Add to card</button>
          </div>
        </div>
      </div>
        `
     
        
      })

    row.innerHTML = col;
})


console.log(window.location);