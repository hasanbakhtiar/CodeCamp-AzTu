const ul = document.querySelector('ul');

fetch("http://127.0.0.1:5500/data/products.json")
.then(res=>res.json())
.then(data=>{
        let li = "";
        data.map(item=>{
            li+=`
            <div class="col-12 col-sm-6 col-md-4">
            <div class="card shadow" >
                <img height="300" style="object-fit:contain" src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.title.slice(0,20)}...</h5>
                  <p>${item.price}$</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
        </div>`
        })

        document.querySelector('ul').innerHTML = li;
})
.catch(err=>console.log(err))