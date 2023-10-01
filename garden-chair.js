let livingroom=[
    {
        img : "images/livingroom/Chairs/garden-chair/Dalessio Striped Outdoor Chair.png"  ,
        title : "STRIPED OUTDOOR CHAIR ",
        price1: 'PKR:19,999',
        price2: '15,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 180,
        location:"Dalessio Striped Outdoor Chair.html"

    },
    {
        img : "images/livingroom/Chairs/garden-chair/Deovilee Outdoor Chair.png"  ,
        title : "DEOVILEE OUTDOOR CHAIR ",
        price1: 'PKR:17,999',
        price2: '12,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 566,
         location:"Deovilee Outdoor Chair.html"

    },
    {
        img : "images/livingroom/Chairs/garden-chair/Faulkner Check Seating.png"  ,
        title : "FAULKNER CHECK CHAIR ",
        price1: 'PKR:18,999',
        price2: '13,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 655,
 location:"Faulkner Check Seating.html"
    },
    {
        img : "images/livingroom/Chairs/garden-chair/Faulkner Stripe Check Chair.png",
        title : "FAULKNER STRIPE CHECK CHAIR ",
        price1: 'PKR:14,999',
        price2: '8,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 455,
 location:"Faulkner Stripe Check Chair.html"
    },
    {
        img : "images/livingroom/Chairs/garden-chair/Jaylon Striped Outdoor Chair.png"  ,
        title : "JAYLON STRIPED OUTDOOR CHAIR ",
        price1: 'PKR:13,999',
        price2: '7,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 255,
 location:"Jaylon Striped Outdoor Chair.html"
    },
    {
        img : "images/livingroom/Chairs/garden-chair/Pamuk Stripe Chair.png"  ,
        title : "PAMUK STRIPE CHAIR ",
        price1: 'PKR:12,999',
        price2: '6,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 177,
 location:"Pamuk Stripe Chair.html"
    },
    {
        img : "images/livingroom/Chairs/garden-chair/Rhombus Multi Check Outdoor Chair.png",
        title : "RHOMBUS MULTI CHECK OUTDOOR CHAIR ",
        price1: 'PKR:10,000',
        price2: '6,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 344,
 location:"Rhombus Multi Check Outdoor Chair.html"
    },
    {
        img : "images/livingroom/Chairs/garden-chair/Silkrik Checked Style Outdoor Chair.png"   ,
        title : "SILKRIK CHECKED CHAIR ",
        price1: 'PKR:12,999',
        price2: '7,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
         reviews: 199,
         location:"Silkrik Checked Style Outdoor Chair.html"
    },
    {
        img : "images/livingroom/Chairs/garden-chair/Thanlyin Cushioned Chair.png"  ,
        title : "THANLYIN CHAIR ",
        price1: 'PKR:11,000',
        price2: '6,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 299,
 location:"Thanlyin Cushioned Chair.html"
    },
]

// Search 
document.getElementById('search').addEventListener('click',()=>{
  const filter = livingroom.filter((item) => +item.price2.replace(/,/g, '') >= +range.value);
  setTimeout(()=>{
  let gardenchair = document.getElementById('garden-chair')
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
  
    gardenchair.innerHTML = data
  });
  },2900)
  
  
  })
  
  
  // Reset 
  document.getElementById('reset').addEventListener('click',()=>{
  setTimeout(()=>{
  
  let gardenchair = document.getElementById('garden-chair')
  let data =''
 livingroom.forEach(e => {
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
  
  gardenchair.innerHTML = data
  });
  },500)
  
  })






let gardenchair = document.getElementById('garden-chair')
let data =''
livingroom.forEach(e => {
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
            <i class="${e.s3}"></i>
            <span class='text-warning'>(${e.reviews})</span>
          </div>
          <p> <del>${e.price1}</del> <b>${e.price2}</b></p>
          <hr class="product-hr">
          <a href="${e.location}" class='anchor'>ADD TO CART</a>
        </div>
      </div>
    </a>
    </div>
    `

    gardenchair.innerHTML = data
});