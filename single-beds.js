let bed=[
    {
        img : "images/bedroom/beds/Single beds/Alanza.png",
        title : "ALANZA SINGLE BED",
        price1: 'PKR:110,000',
        price2: '80,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 250,
        location:"Alanza.html"

    },
    {
        img : "images/bedroom/beds/Single beds/Allen Single Bed.png",
        title : "ALLEN SINGLE BED",
        price1: 'PKR:130,000',
        price2: '95,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 50,
        location:"Allen.html"


    },
    {
        img : "images/bedroom/beds/Single beds/Amien Single Bed.png",
        title : "AMIEN SINGLE BED",
        price1: 'PKR:140,000',
        price2: '99,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 100,
        location:"Amien.html"


    },
    {
        img : "images/bedroom/beds/Single beds/Arby Single Bed.png",
        title : "ARBY SINGLE BED",
        price1: 'PKR:105,000',
        price2: '75,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 100,
        location:"Arby.html "


    },
    {
        img : "images/bedroom/beds/Single beds/Avance Single Bed.png",
        title : "AVANCE SINGLE BED",
        price1: 'PKR:150,000',
        price2: '115,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 180,
        location:"Avance.html"


    },
    {
        img : "images/bedroom/beds/Single beds/bourne Single Bed.png",
        title : "BOURNE SINGLE BED",
        price1: 'PKR:145,000',
        price2: "105,000",
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 280,
        location:"bourne.html"


    },
    {
        img : "images/bedroom/beds/Single beds/Brewdon Single Bed.png" ,
        title : "BREWDON SINGLE BED",
        price1: 'PKR:150,000',
        price2: '130,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 120,
        location:"Brewdon.html"


    },
    {
        img : "images/bedroom/beds/Single beds/Elegant Single Bed.png"  ,
        title : "ELEGANT SINGLE BED",
        price1: 'PKR:150,000',
        price2: '110,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 80,
        location:"Elegant.html"


    },
    {
        img : "images/bedroom/beds/Single beds/Eryl Single Bed.png"   ,
        title : "ERYL SINGLE BED",
        price1: 'PKR:180,000',
        price2: '145,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 480,
        location:"Eryl.html"


    },
    {
        img : "images/bedroom/beds/Single beds/Ham Single Bed.png"   ,
        title : "HAM SINGLE BED",
        price1: 'PKR:140,000',
        price2: '105,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 349,
        location:"Ham.html"


    },
    {
        img : "images/bedroom/beds/Single beds/Klyde single bed.png"  ,
        title : "KLYDE SINGLE BED",
        price1: 'PKR:120,000',
        price2: '85,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 200,
        location:"Klyde.html"


    },
    {
        img : "images/bedroom/beds/Single beds/Mansion Single Bed.png"  ,
        title : "MANSION SINGLE BED",
        price1: 'PKR:160,000',
        price2: '125,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 280,
        location:"singlebedmansion.html "


    },
    {
        img :"images/bedroom/beds/Single beds/Reira bed.png"  ,
        title : "REIRA SINGLE BED",
        price1: 'PKR:190,000',
        price2: '148,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 390,
        location:"Reira.html"
    },
    {
        img :"images/bedroom/beds/Single beds/Retten Single Bed.png",
            title : "RETTEN SINGLE BED",
            price1: 'PKR:110,000',
            price2: '75,000',
            s1: "fa-solid fa-star",
            s2: "fa-solid fa-star-half-stroke",
            s3:'fa-regular fa-star',
            reviews: 256,
            location:"Retten.html"
    }

]



// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = bed.filter((item) => +item.price2.replace(/,/g, '') >= +range.value);
    setTimeout(()=>{
    let singlebeds = document.getElementById('single-beds')
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
    
     singlebeds.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let singlebeds = document.getElementById('single-beds')
    let data =''
   bed.forEach(e => {
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
    
   singlebeds.innerHTML = data
    });
    },500)
    
    })






let singlebeds = document.getElementById('single-beds')
let data =''
bed.forEach(e => {
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

   singlebeds.innerHTML = data
});