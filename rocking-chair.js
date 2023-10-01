let livingroom=[
    {
        img : "images/livingroom/Chairs/Rocking-chairs/Ankara Rocking Chair.png"  ,
        title : "ANKARA ROCKING CHAIR ",
        price1: 'PKR:49,000',
        price2: '34,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 220,
        location:"Ankara Rocking Chair.html"

    },
    {
        img : "images/livingroom/Chairs/Rocking-chairs/Ariella Rocking Chair.ng.webp"  ,
        title : "ARIELLA ROCKING CHAIR ",
        price1: 'PKR:47,000',
        price2: '35,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 210,
location:"Ariella Rocking Chair.html"
    },
    {
        img : "images/livingroom/Chairs/Rocking-chairs/Birney Rocking Chair.png"  ,
        title : "BIRNEY ROCKING CHAIR ",
        price1: 'PKR:44,000',
        price2: '36,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 188,
location:"Birney Rocking Chair.html"
    },
   
    {
        img : "images/livingroom/Chairs/Rocking-chairs/Green Peninsula Rocking Chair.png"  ,
        title : "GREEN PENISULA ROCKING CHAIR ",
        price1: 'PKR:39,999',
        price2: '32,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 190,
         location:"Green Peninsula Rocking Chair.html"


    },
    {
        img : "images/livingroom/Chairs/Rocking-chairs/Ivona Rocking Chair.png" ,
        title : "IVONA ROCKING CHAIR ",
        price1: 'PKR:42,000',
        price2: '36,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 120,
         location:"Ivona Rocking Chair.html"


    },
    {
        img : "images/livingroom/Chairs/Rocking-chairs/Kell Rocking Chair.png"  ,
        title : "KELL ROCKING CHAIR ",
        price1: 'PKR:37,999',
        price2: '30,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 278,
         location:"Kell Rocking Chair.html"


    },
    {
        img : "images/livingroom/Chairs/Rocking-chairs/Kendal Rocking Chair.png"  ,
        title : "KENDAL ROCKING CHAIR ",
        price1: 'PKR:36,000',
        price2: '29,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 220, 
        location:"Kendal Rocking Chair.html"


    },
    {
        img : "images/livingroom/Chairs/Rocking-chairs/Leather Seat Rocking.png"  ,
        title : "LEATHER ROCKING CHAIR ",
        price1: 'PKR:53,999',
        price2: '37,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 220, 
        location:"Leather Seat Rocking.html"


    },
    {
        img : "images/livingroom/Chairs/Rocking-chairs/Mexico Rocking Chair.png"  ,
        title : "MEXICO ROCKING CHAIR ",
        price1: 'PKR:42,000',
        price2: '35,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 455,
         location:"Mexico Rocking Chair.html"


    },
    {
        img : "images/livingroom/Chairs/Rocking-chairs/Misty Rocking Chair.png" ,
        title : "MISTY ROCKING CHAIR ",
        price1: 'PKR:34,999',
        price2: '27,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 220,
         location:"Misty Rocking Chair.html"


    },
    {
        img : "images/livingroom/Chairs/Rocking-chairs/Red Scott Rocking Chair.png",
        title : "RED SCOTT ROCKING CHAIR ",
        price1: 'PKR:55,000',
        price2: '33,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 220,
         location:"Red Scott Rocking Chair.html"


    },
]
// Search 
document.getElementById('search').addEventListener('click',()=>{
  const filter = livingroom.filter((item) => item.price2.replace(/,/g, '') >= range.value);
  setTimeout(()=>{
  let rockingchair = document.getElementById('rocking-chair')
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
  
    rockingchair.innerHTML = data
  });
  },2900)
  
  
  })
  
  
  // Reset 
  document.getElementById('reset').addEventListener('click',()=>{
  setTimeout(()=>{
  
  let rockingchair = document.getElementById('rocking-chair')
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
  
  rockingchair.innerHTML = data
  });
  },500)
  
  })
  







let rockingchair = document.getElementById('rocking-chair')
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

    rockingchair.innerHTML = data
});