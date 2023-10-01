let office=[
    {
        img : "images/office/office-chair/high-back chair/Cello Manager Chair High Back.png",
        title : "CELLO MANAGER CHAIR HIGH BACK ",
        price1: 'PKR:51,000',
        price2: '46,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 333,
        location:"Cello Manager Chair High Back.html"

    },
    {
        img : "images/office/office-chair/high-back chair/Chord Manager Chair High Back.png" ,
        title : "CHORD MANAGER CHAIR HIGH BACK ",
        price1: 'PKR:48,000',
        price2: '36,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 556,
        location:"ChordManager Chair High Back.html"

    },
    {
        img : "images/office/office-chair/high-back chair/Manager High Back Chair.png",
        title : " MANAGER CHAIR HIGH BACK ",
        price1: 'PKR:52,000',
        price2: '42,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 155,
        location:"ManagerHigh Back Chair.html"

    },
    {
        img : "images/office/office-chair/high-back chair/Marlon Manager High Back Chair.png" ,
        title : "MARLON MANAGER CHAIR HIGH BACK ",
        price1: 'PKR:55,000',
        price2: '49,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 455,
        location:"MarlonManager High Back Chair.html"

    },
]





// Search 
document.getElementById('search').addEventListener('click',()=>{
  const filter = office.filter((item) => item.price2.replace(/,/g, '') >= range.value);
  setTimeout(()=>{
  let highbackchair = document.getElementById('high back-chair')
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
  
  highbackchair.innerHTML = data
  });
  },2900)
  
  
  })
  
  
  // Reset 
  document.getElementById('reset').addEventListener('click',()=>{
  setTimeout(()=>{
  
  let highbackchair= document.getElementById('high back-chair')
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
  
  highbackchair.innerHTML = data
  });
  },500)
  
  })
  
  
  
  
  // Original 
  let highbackchair = document.getElementById('high back-chair')
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
  
    highbackchair.innerHTML = data
  });
  