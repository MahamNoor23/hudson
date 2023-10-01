let office=[
    {
        img : "images/office/office-chair/Executive-chair/Arc Econo Chair Executive.png",
        title : "ARC ECONO EXECUTIVE CHAIR ",
        price1: 'PKR:46,800',
        price2: '35,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 366,
        location:"Arc Econo Chair Executive.html"

    },
    {
        img : "images/office/office-chair/Executive-chair/Conte Executive Chair.png",
        title : "CONTE EXECUTIVE CHAIR ",
        price1: 'PKR:55,000',
        price2: '42,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 455,
        location:"Conte Executive Chair.html"

    },
    {
        img : "images/office/office-chair/Executive-chair/Folsom Executive Chair.png" ,
        title : "FOLSOM EXECUTIVE CHAIR ",
        price1: 'PKR:52,600',
        price2: '43,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 663,
        location:"Folsom Executive Chair.html"

    },
    {
        img : "images/office/office-chair/Executive-chair/Marcus Executive Chair.png" ,
        title : "MARCUS EXECUTIVE CHAIR ",
        price1: 'PKR:59,000',
        price2: '48,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 177,
        location:"Marcus Executive Chair.html"

    },
    {
        img : "images/office/office-chair/Executive-chair/Smart Chair Millennium Black.png" ,
        title : "SMART CHAIR MILLENNIUM BLACK ",
        price1: 'PKR:55,000',
        price2: '46,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 288,
        location:"Smart Chair Millennium Black.html"

    },
    {
        img : "images/office/office-chair/Executive-chair/Smart Chair Millennium Brown.png",
        title : "SMART CHAIR MILLENNIUM BROWN",
        price1: 'PKR:55,000',
        price2: '46,599',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 453,
        location:"Smart Chair Millennium Brown.html"

    },
    {
        img : "images/office/office-chair/Executive-chair/Smart Chair Millennium Tan.png",
        title : "SMART CHAIR MILLENNIUM TAN ",
        price1: 'PKR:55,000',
        price2: 'PKR:46,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 399,
        location:"Smart Chair Millennium Tan.html"

    },
  
]




// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = office.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let executivechair = document.getElementById('executive-chair')
    let data =''
    filter.forEach(e => {
      data += `
      
      <div class="col-lg-4 col-md-6 d-flex justify-content-center  text-center mt-5 ">
      <a href="${e.location}" class='anchor'>
      <div class="card "  style="width: 18rem;">
          <img src="${e.img}"
            class="card-img-top " alt="..." height="250px" >
          <div class="card-body">
            <h5 class="card-title"><b>${e.title}</b></h5>
            <div class="icons">
              <i class="${e.s1}"></i>
              <i class="${e.s1}"></i>
              <i class="${e.s1}"></i>
              <i class="${e.s1}"></i>
              <i class="${e.s3}"></i>
              <span class='text-warning'>(${e.reviews})</span>
            </div>
            <p> <del>${e.price1}</del> <b>PKR:${e.price2}</b></p>
            <hr class="product-hr">
            <a href="${e.location}" class='anchor'>ADD TO CART</a>
          </div>
        </div>
      </a>
      </div>
      `
    
    executivechair.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let executivechair = document.getElementById('executive-chair')
    let data =''
   office.forEach(e => {
    data += `
    
    <div class="col-lg-4 col-md-6 d-flex justify-content-center  text-center mt-5 ">
    <a href="${e.location}" class='anchor'>
    <div class="card "  style="width: 18rem;">
        <img src="${e.img}"
          class="card-img-top " alt="..." height="250px" >
        <div class="card-body">
          <h5 class="card-title"><b>${e.title}</b></h5>
          <div class="icons">
            <i class="${e.s1}"></i>
            <i class="${e.s1}"></i>
            <i class="${e.s1}"></i>
            <i class="${e.s1}"></i>
            <i class="${e.s3}"></i>
            <span class='text-warning'>(${e.reviews})</span>
          </div>
          <p> <del>${e.price1}</del> <b>PKR:${e.price2}</b></p>
          <hr class="product-hr">
          <a href="${e.location}" class='anchor'>ADD TO CART</a>
        </div>
      </div>
    </a>
    </div>
    `
    
    executivechair.innerHTML = data
    });
    },500)
    
    })
    
    
    
    
    // Original 
    let executivechair = document.getElementById('executive-chair')
    let data =''
    office.forEach(e => {
      data += `
      
      <div class="col-lg-4 col-md-6 d-flex justify-content-center  text-center mt-5 ">
      <a href="${e.location}" class='anchor'>
      <div class="card "  style="width: 18rem;">
          <img src="${e.img}"
            class="card-img-top " alt="..." height="250px" >
          <div class="card-body">
            <h5 class="card-title"><b>${e.title}</b></h5>
            <div class="icons">
              <i class="${e.s1}"></i>
              <i class="${e.s1}"></i>
              <i class="${e.s1}"></i>
              <i class="${e.s1}"></i>
              <i class="${e.s3}"></i>
              <span class='text-warning'>(${e.reviews})</span>
            </div>
            <p> <del>${e.price1}</del> <b>PKR:${e.price2}</b></p>
            <hr class="product-hr">
            <a href="${e.location}" class='anchor'>ADD TO CART</a>
          </div>
        </div>
      </a>
      </div>
      `
    
     executivechair.innerHTML = data
    });
    