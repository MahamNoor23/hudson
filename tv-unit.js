let livingroom=[
    {
        img :"images/livingroom/Storage/tv units/Cresta Grand Media Unit.png"  ,
        title : "CRESTA GRAND MEDIA UNIT ",
        price1: 'PKR:49,999',
        price2: '41,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 564,
        location:"Cresta Grand Media Unit.html"

    },
    {
        img :"images/livingroom/Storage/tv units/Fresco Media Storage Unit Set.png"  ,
        title : "FRESCO MEDIA STORAGE UNIT ",
        price1: 'PKR:54,000',
        price2: '49,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 651,
        location:"Fresco Media Storage Unit Set.html"

    },
    {
        img :"images/livingroom/Storage/tv units/Fresco TV Stand With Media Storage.png" ,
        title : " FRESCO TV STAND WITH MEDIA STORAGE ",
        price1: 'PKR:44,000',
        price2: '34,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 234,
        location:"Fresco TV Stand With Media Storage.html"

    },
    {
        img :"images/livingroom/Storage/tv units/Fusion Media Unit.png" ,
        title : "FUSION MEDIA  UNIT ",
        price1: 'PKR:39,000',
        price2: '33,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 456,
        location:"Fusion Media Unit.html"

    },
    {
        img :"images/livingroom/Storage/tv units/Seaford Media Unit.png" ,
        title : "SEAFORD MEDIA  UNIT ",
        price1: 'PKR:35,000',
        price2: '27,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 567,
        location:"Seaford Media Unit.html"

    },
    {
        img :"images/livingroom/Storage/tv units/Sienna Media Unit.png"  ,
        title : "SIENNA MEDIA  UNIT ",
        price1: 'PKR:34,000',
        price2: '25,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 345,
        location:"Sienna Media Unit.html"

    },
    {
        img :"images/livingroom/Storage/tv units/TV Stand Antico.png"  ,
        title : "TV STAND ANTICO ",
        price1: 'PKR:54,000',
        price2: '49,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 651,
        location:"TV Stand Antico.html"

    },
    {
        img :"images/livingroom/Storage/tv units/TV Stand Painted Top Bay.png"  ,
        title : "TV STAND PAINTED TOP BAY ",
        price1: 'PKR:44,000',
        price2: '38,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 784,
        location:"TV Stand Painted Top Bay.html"

    },
    {
        img :"images/livingroom/Storage/tv units/TV Stand Side Glass Bay.png"  ,
        title : "TV STAND SIDE GLASS BAY ",
        price1: 'PKR:44,000',
        price2: '32,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 311,
        location:"TV Stand Side Glass Bay.html"

    },
    {
        img :"images/livingroom/Storage/tv units/TV Unit Quest in Chestnut and Grey Colour.png"  ,
        title : "TV UNIT QUEST ",
        price1: 'PKR:54,000',
        price2: '49,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 651,
        location:"TV Unit Quest in Chestnut and Grey Colour.html"

    },
    {
        img :"images/livingroom/Storage/tv units/Wall Panel Module 2 Antico.png" ,
        title : "WALL PANEL MODULE 2 ANTICO ",
        price1: 'PKR:34,000',
        price2: '22,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 456,
        location:"Wall Panel Module 2 Antico.html"

    },
   
    {
        img :"images/livingroom/Storage/tv units/Wall Panel Module.png"  ,
        title : "WALL PANEL MODULE",
        price1: 'PKR:25,000',
        price2: '17,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 678,
        location:"Wall Panel Module.html"

    },
]

// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = livingroom.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let tvunit = document.getElementById('tv-unit')
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
    
      tvunit.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let tvunit = document.getElementById('tv-unit')
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
    
    tvunit.innerHTML = data
    });
    },500)
    
    })





let tvunit = document.getElementById('tv-unit')
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

    tvunit.innerHTML = data
});