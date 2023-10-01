let office=[
    {
        img : "images/office/office-chair/manager-chair/Aeon Manager Office Chair.png",
        title : "AEON MANAGER CHAIR ",
        price1: 'PKR:46,000',
        price2: '35,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 188,
        location:"Aeon Manager Office Chair.html"

    },
    {
        img : "images/office/office-chair/manager-chair/Chord Manager Chair.png",
        title : "CHORD MANAGER CHAIR ",
        price1: 'PKR:48,000',
        price2: '36.000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 556,
        location:"Chord Manager Chair.html"

    },
    {
        img : "images/office/office-chair/manager-chair/Dawn Manager Chair.png" ,
        title : "DAWN MANAGER CHAIR ",
        price1: 'PKR:49,000',
        price2: '35,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 522,
        location:"Dawn Manager Chair.html"

    },
    {
        img : "images/office/office-chair/manager-chair/Manager Chair Finn.png",
        title : "FINN MANAGER CHAIR ",
        price1: 'PKR:42,000',
        price2: '31,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 233,
        location:"Manager Chair Finn.html"

    },
    {
        img : "images/office/office-chair/manager-chair/Manager Chair With Headrest.png",
        title : " MANAGER CHAIR  WITH HEADREST",
        price1: 'PKR:49,999',
        price2: '41,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 433,
        location:"Manager Chair With Headrest.html"

    },
    {
        img : "images/office/office-chair/manager-chair/Manager High Back Chair.png" ,
        title : " MANAGER HIGH BACK CHAIR ",
        price1: 'PKR:52,000',
        price2: '44,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 155,
        location:"Manager High Back Chair.html"

    },
    {
        img : "images/office/office-chair/manager-chair/Manager Medium Back Chair.png",
        title : " MANAGER MEDIUM BACK CHAIR ",
        price1: 'PKR:46,800',
        price2: '35,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 188,
        location:"Manager Medium Back Chair.html"

    },
    

]









// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = office.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let managerchair = document.getElementById('manager-chair')
    let data =''
    filter.forEach(e => {
      data += `
      
      <div class="col-lg-4 col-md-6 d-flex justify-content-center  text-center mt-5 ">
      <a href="${e.location}" class='anchor'>
      <div class="card "  style="width: 18rem;">
      <div class="img">
      <img src="${e.img}"class="card-img-top " alt="..." height="250px" >
      </div>
          <div class="card-body">
            <h5 class="card-title"><b>${e.title}</b></h5>
            <div class="icons">
              <i class="${e.s1}"></i>
              <i class="${e.s1}"></i>
              <i class="${e.s1}"></i>
              <i class="${e.s2}"></i>
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
    
     managerchair.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let managerchair= document.getElementById('manager-chair')
    let data =''
   office.forEach(e => {
    data += `
    
    <div class="col-lg-4 col-md-6 d-flex justify-content-center  text-center mt-5 ">
    <a href="${e.location}" class='anchor'>
    <div class="card "  style="width: 18rem;">
    <div class="img">
    <img src="${e.img}"class="card-img-top " alt="..." height="250px" >
    </div>
        <div class="card-body">
          <h5 class="card-title"><b>${e.title}</b></h5>
          <div class="icons">
            <i class="${e.s1}"></i>
            <i class="${e.s1}"></i>
            <i class="${e.s1}"></i>
            <i class="${e.s2}"></i>
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
    
   managerchair.innerHTML = data
    });
    },500)
    
    })
    
    
    
    
    // Original 
    let managerchair = document.getElementById('manager-chair')
    let data =''
    office.forEach(e => {
      data += `
      
      <div class="col-lg-4 col-md-6 d-flex justify-content-center  text-center mt-5 ">
      <a href="${e.location}" class='anchor'>
      <div class="card "  style="width: 18rem;">
      <div class="img">
      <img src="${e.img}"class="card-img-top " alt="..." height="250px" >
      </div>
          <div class="card-body">
            <h5 class="card-title"><b>${e.title}</b></h5>
            <div class="icons">
              <i class="${e.s1}"></i>
              <i class="${e.s1}"></i>
              <i class="${e.s1}"></i>
              <i class="${e.s2}"></i>
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
    
      managerchair.innerHTML = data
    });
    