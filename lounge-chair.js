let livingroom=[
    {
        img : "images/livingroom/Chairs/Lounge Chairs/Aleksandra Chair.png"  ,
        title : "ALEKSANDRA CHAIR ",
        price1: 'PKR:39,000',
        price2: '30,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 220,
location:"Aleksandra Chair.html"
    },
    {
        img : "images/livingroom/Chairs/Lounge Chairs/Angeliona Armless Chaise Lounge.png"   ,
        title : "ANGELIONA ARMLESS LOUNGE CHAIR ",
        price1: 'PKR:40,000',
        price2: '32,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 432,
location:"Angeliona Armless Chaise Lounge.html"
    },
    {
        img : "images/livingroom/Chairs/Lounge Chairs/Calla Lounge Chair with Footrest.png"  ,
        title : "CALLA LOUNGE CHAIR ",
        price1: 'PKR:45,000',
        price2: '40,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 122,
location:"Calla Lounge Chair.html"
    },
    {
        img : "images/livingroom/Chairs/Lounge Chairs/Dahna Chair.png"  ,
        title : "DAHNA CHAIR ",
        price1: 'PKR:38,000',
        price2: '25,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 344,
location:"Dahna Chair.html"
    },
    {
        img : "images/livingroom/Chairs/Lounge Chairs/DWS chair.png"  ,
        title : "DWS CHAIR ",
        price1: 'PKR:35,000',
        price2: '26,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 666,
location:"DWS chair.html"
    },
    {
        img : "images/livingroom/Chairs/Lounge Chairs/Federico Chaise Lounge.png"  ,
        title : "FEDERICO CHAISE LOUNGE CHAIR ",
        price1: 'PKR:34.000',
        price2: '20,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 288,
location:"Federico Chaise Lounge.html"
    },
    {
        img : "images/livingroom/Chairs/Lounge Chairs/Frosty Peach Lounge Chair.png" ,
        title : "FROSTY PEACH LOUNGE CHAIR ",
        price1: 'PKR:36,000',
        price2: '25,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 199,
location:"Frosty Peach Lounge Chair.html"
    },
    {
        img : "images/livingroom/Chairs/Lounge Chairs/Grove Relaxing Chair.png"  ,
        title : "GROVE RELAXING CHAIR ",
        price1: 'PKR:25,000',
        price2: '14,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 477,
location:"Grove Relaxing Chair.html"
    },
    {
        img : "images/livingroom/Chairs/Lounge Chairs/Hashme Lounge Chair.png"  ,
        title : "HASHME LOUNGE CHAIR ",
        price1: 'PKR:33,000',
        price2: '22,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 566,
        location:"Hashme Lounge Chair.html"

    },
    {
        img : "images/livingroom/Chairs/Lounge Chairs/Hebisscus Lounge Chair.png" ,
        title : "HEBISSCUS LOUNGE CHAIR ",
        price1: 'PKR:29,000',
        price2: '19,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 299,
location:"Hebisscus Lounge Chair.html"
    },
    {
        img : "images/livingroom/Chairs/Lounge Chairs/Lilly Velvet.png"  ,
        title : "LILLY VELVET LOUNGE CHAIR ",
        price1: 'PKR:34,000',
        price2: '22,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 166,
location:"Lilly Velvet.html"
    },
    {
        img : "images/livingroom/Chairs/Lounge Chairs/Rangsaaz Armless Chaise Lounge.png"  ,
        title : "RANGSAAZ LOUNGE CHAIR ",
        price1: 'PKR:37,000',
        price2: '29,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 253,
        location:"Rangsaaz Armless Chaise Lounge.html"

    },
  
]

// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = livingroom.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let loungechair = document.getElementById('lounge-chair')
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
    
      loungechair.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let loungechair = document.getElementById('lounge-chair')
    let data =''
    outdoor.forEach(e => {
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
    
    loungechair.innerHTML = data
    });
    },500)
    
    })
    




let loungechair = document.getElementById('lounge-chair')
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

    loungechair.innerHTML = data
});