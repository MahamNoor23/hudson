let livingroom=[
    {
        img : "images/livingroom/Storage/shoe racks/16 Pairs Brown Metal Shoe Rack.png"  ,
        title : "BROWN METAL SHOE RACK ",
        price1: 'PKR:13,000',
        price2: '10,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 454,
location:"16 Pairs Brown Metal Shoe Rack.html"
    },
    {
        img : "images/livingroom/Storage/shoe racks/20 Pairs Black Shoe Rack.png"  ,
        title : "20 PAIRS BLACK SHOE RACK ",
        price1: 'PKR:10,000',
        price2: '7,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 232,
location:"20 Pairs Black Shoe Rack.html"
    },
    {
        img : "images/livingroom/Storage/shoe racks/30 Pair Shoe Rack.png"  ,
        title : "30 PAIR SHOE RACK ",
        price1: 'PKR:12,000',
        price2: '9,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
       reviews: 321,
       location:"30 Pair Shoe Rack.html"
    },
    {
        img : "images/livingroom/Storage/shoe racks/Bronze Metal Shoe Rack.png"  ,
        title : "BRONZE METAL SHOE RACK ",
        price1: 'PKR:14,000',
        price2: '12,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 211,
location:"Bronze Metal Shoe Rack.html"
    },
    {
        img : "images/livingroom/Storage/shoe racks/Brown Solid Wood Shoe Rack.png"  ,
        title : "BROWN SOLID WOOD SHOE RACK ",
        price1: 'PKR:16,000',
        price2: '13,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 245,
location:"Brown Solid Wood Shoe Rack.html"
    },
    {
        img : "images/livingroom/Storage/shoe racks/Foldable 12 Pairs Shoe Rack.png"  ,
        title : "FOLDABLE 12 PAIR SHOE RACK ",
        price1: 'PKR:12,000',
        price2: '6,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 344,
location:"Foldable 12 Pairs Shoe Rack.html"
    },
    {
        img : "images/livingroom/Storage/shoe racks/Gray Manufactured Wood Shoe Rack.png"   ,
        title : "GRAY MANUFACTURED WOOD SHOE RACK ",
        price1: 'PKR:14,000',
        price2: '8,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 443,
location:"Gray Manufactured Wood Shoe Rack.html"
    },
  
    {
        img : "images/livingroom/Storage/shoe racks/Natural Bamboo Shoe Rack.png"   ,
        title : "NATURAL BAMBOO SHOE RACK ",
        price1: 'PKR:10,000',
        price2: '8,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 333,
location:"Natural Bamboo Shoe Rack.html"
    },
    {
        img : "images/livingroom/Storage/shoe racks/Plastic Shoe Storage Box.png"  ,
        title : "PLASTIC  SHOE RACK ",
        price1: 'PKR:11,000',
        price2: '6,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 555,
location:"Plastic Shoe Storage Box.html"
    },
   
]

// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = livingroom.filter((item) => +item.price2.replace(/,/g, '') >= +range.value);
    setTimeout(()=>{
    let shoerack = document.getElementById('shoe-rack')
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
    
     shoerack.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let shoerack = document.getElementById('shoe-rack')
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
    
    shoerack.innerHTML = data
    });
    },500)
    
    })






let shoerack = document.getElementById('shoe-rack')
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

    shoerack.innerHTML = data
});