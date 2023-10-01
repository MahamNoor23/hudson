let office=[
    {
        img : "images/office/office-tables/Executive-table/Arc Econo Desk.png",
        title : "ARC ECONO DESK",
        price1: 'PKR:66,000',
        price2: '59,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 299,
        location:"Arc Econo Desk.html"

    },
    {
        img : "images/office/office-tables/Executive-table/Callisto Executive Office Desk.png",
        title : "CALLISTO EXECUTIVE OFFICE DESK",
        price1: 'PKR:59,000',
        price2: '52,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 122,
        location:"Callisto Executive Office Desk.html"

    },
    {
        img : "images/office/office-tables/Executive-table/Conte Desk.png",
        title : "CONTE DESK",
        price1: 'PKR:56,000',
        price2: '45,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 366,
        location:"Conte Desk.html"

    },
    {
        img : "images/office/office-tables/Executive-table/Marcus Desk.png",
        title : "MARCUS DESK",
        price1: 'PKR:66,000',
        price2: '60,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 245,
        location:"Marcus Desk.html"

    },
    {
        img : "images/office/office-tables/Executive-table/Traditional Econo Desk.png",
        title : "TRADITIONAL ECONO DESK",
        price1: 'PKR:56,000',
        price2: '50,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 444,
        location:"Traditional Econo Desk.html"

    },
]






// Search 
document.getElementById('search').addEventListener('click',()=>{
  const filter = office.filter((item) => item.price2.replace(/,/g, '') >= range.value);
  setTimeout(()=>{
  let executivetable = document.getElementById('executive-table')
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
            <i class="${e.s2}"></i>
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
  
    executivetable.innerHTML = data
  });
  },2900)
  
  
  })
  
  
  // Reset 
  document.getElementById('reset').addEventListener('click',()=>{
  setTimeout(()=>{
  
  let executivetable = document.getElementById('executive-table')
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
          <i class="${e.s2}"></i>
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
  
  executivetable.innerHTML = data
  });
  },500)
  
  })
  
  
  
  
  // Original 
  let executivetable = document.getElementById('executive-table')
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
            <i class="${e.s2}"></i>
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
  
    executivetable.innerHTML = data
  });
  