let decor=[
    {
        img : "images/bedroom/decor/Cushions/Botanic Cushion Cover.png",
        title : "BOTANIC CUSHION COVER",
        price1: 'PKR:1,499',
        price2: 'PKR:999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 50,
        location:"Botanic.html"

    },
    {
        img : "images/bedroom/decor/Cushions/Check Style Cushion.png",
        title : "CHECK STYLE CUSHION COVER",
        price1: 'PKR:1,359',
        price2: 'PKR:850',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 100,
        location:"CheckStyle.html "

    },
    {
        img : "images/bedroom/decor/Cushions/Classy Cushion.png",
        title : "CLASSY CUSHION COVER",
        price1: 'PKR:1,599',
        price2: 'PKR:1,199',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 180,
        location:"Classycusion.html"

    },
    {
        img : "images/bedroom/decor/Cushions/Florida Cushion.png",
        title : "FLORIDA CUSHION COVER",
        price1: 'PKR:1,499',
        price2: 'PKR:999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 230,
        location:"Floridacushion.html"

    },
    {
        img : "images/bedroom/decor/Cushions/Florista Cushion Cover.png",
        title : "FLORISTA CUSHION COVER",
        price1: 'PKR:1,499',
        price2: 'PKR:999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 120,
        location:"Floristacushion.html "

    },
    {
        img : "images/bedroom/decor/Cushions/Jackfrost Cushion Cover.png" ,
        title : "JACKFROST CUSHION COVER",
        price1: 'PKR:1,599',
        price2: 'PKR:1,299',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 420,
        location:"Jackfrostcushion.html"

    },
    {
        img : "images/bedroom/decor/Cushions/Lime Cushion cover.png" ,
        title : "LIME CUSHION COVER",
        price1: 'PKR:1,499',
        price2: 'PKR:999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 420,
        location:"Limecushion.html"

    },
    {
        img : "images/bedroom/decor/Cushions/Mat Navy blue Cushion.png" ,
        title : "MAT NAVY BLUE CUSHION COVER",
        price1: 'PKR:1,499',
        price2: 'PKR:999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 80,
        location:"MatNavy.html"

    },
    {
        img : "images/bedroom/decor/Cushions/New Printed Cushion.png"  ,
        title : "NEW PRINTED CUSHION COVER",
        price1: 'PKR:1,699',
        price2: 'PKR:1.299',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 456,
        location:"NewPrinted.html"

    },
    {
        img : "images/bedroom/decor/Cushions/Old texture cushion.png"  ,
        title : "OLD TEXTURE CUSHION COVER",
        price1: 'PKR:1,399',
        price2: 'PKR:999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 46,
        location:"Oldtexture.html"

    },
    {
        img : "images/bedroom/decor/Cushions/Rust Cushion Cover.png" ,
        title : "RUST  CUSHION COVER",
        price1: 'PKR:1,299',
        price2: 'PKR:899',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 335,
        location:"Rustcushion.html"

    },
    {
        img : "images/bedroom/decor/Cushions/Stylish Cushion.png" ,
        title : "STYLISH  CUSHION COVER",
        price1: 'PKR:1,499',
        price2: 'PKR:999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 335,
        location:"StylishCushion.html"

    },
    {
        img : "images/bedroom/decor/Cushions/Suffuse Cushion Cover.png" ,
        title : "SUFFUSE  CUSHION COVER",
        price1: 'PKR:1,499',
        price2: 'PKR:999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 234,
        location:"SuffuseCushion.html"

    },
    {
        img : "images/bedroom/decor/Cushions/Swansea Cushion Cover.png" ,
        title : "SWANSEA  CUSHION COVER",
        price1: 'PKR:1,499',
        price2: 'PKR:999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 133,
        location:"SwanseaCushion.html"

    },
   
]








// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = decor.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let  cushions = document.getElementById(' cushions')
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
    
      cushions.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let  cushions= document.getElementById(' cushions')
    let data =''
    decor.forEach(e => {
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
    
    cushions.innerHTML = data
    });
    },500)
    
    })
    
    
    
    
    // Original 
    let cushions = document.getElementById(' cushions')
    let data =''
    decor.forEach(e => {
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
    
      cushions.innerHTML = data
    });