fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>{
    const urlid = location.href.slice(51, 99);
    const details = document.querySelector("#details");
    const filterData = data.filter(p => p.id ==urlid);
    details.innerHTML = `
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div class="col-10 col-sm-8 col-lg-6">
      <img style="height:400px; object-fit:contain" src="${filterData[0].image}" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
    </div>
    <div class="col-lg-6">
      <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">${filterData[0].title}</h1>
      <p class="lead">${filterData[0].description}</p>
        <a href="../pages/products.html"  class="btn btn-secondary btn-lg px-4 me-md-2">back</a>
        <button type="button" class="btn btn-warning btn-lg px-4">${filterData[0].price}$</button>
      </div>
    </div>
  </div>`
});