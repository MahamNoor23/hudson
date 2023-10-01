let bed=[
    {
        img : "images/bedroom/beds/Double beds/Advik Double Bed/Advik Bed.png",
        title : "ADVIK DOUBLE BED",
        price1: 'PKR:200,000',
        price2: '150,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 150,
        location:"advikdb-cart.html"

    },
    {
        img : "images/bedroom/beds/Double beds/Brisk Double Bed/Brisk Double Bed.png",
        title : "BRISK DOUBLE BED",
        price1: 'PKR:220,000',
        price2: '190,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 100,
        location:"Briskdb-cart.html"

    },
    {
        img : "images/bedroom/beds/Double beds/Cobb Double Bed/Cobb bed.png",
        title : "COBB DOUBLE BED",
        price1: 'PKR:190,000',
        price2: '150,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 300,
        location:"Cobbdb-cart.html"

    },
    {
        img : "images/bedroom/beds/Double beds/Dagen Bed Set/Dagen Bed.PNG.jpg",
        title : "DAGEN DOUBLE BED",
        price1: 'PKR:230,000',
        price2: '200,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 200,
        location:"Dagendb-cart.html"

    },
    {
        img : "images/bedroom/beds/Double beds/Edler Upholstered Double Bed/Edler Upholstered.png",
        title : "EDLER DOUBLE BED",
        price1: 'PKR:250,000',
        price2: '200,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 400,
        location:"Edlerdb-cart.html"

    },
    {
        img : "images/bedroom/beds/Double beds/Garret Upholstered Double Bed/Garret Upholstered Bed.png",
        title : "GARRET UPHOLSTERED DOUBLE BED",
        price1: 'PKR:195,000',
        price2: '150,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 180,
        location:"Garretdb-cart.html"

    },
    {
        img :"images/bedroom/beds/Double beds/Gomez Double Bed/Gomez Double Bed.png",
        title : "GOMEZ DOUBLE BED",
        price1: 'PKR:180,000',
        price2: '120,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 290,
        location:"Gomezdb-cart.html"

    },
    {
        img :"images/bedroom/beds/Double beds/Hoffman Double Bed/Hoffman.png",
        title : "HOFFMAN DOUBLE BED",
        price1: 'PKR:250,000',
        price2: '200,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 80,
        location:"Hoffmandb-cart.html"

    },
    {
        img :"images/bedroom/beds/Double beds/Jude Upholstered  Double Bed/Jude Upholstered Double Bed.png",
        title : "JUDE UPHOLSTERED DOUBLE BED",
        price1: 'PKR:190,000',
        price2: '150,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 460,
        location:"Judedb-cart.html"

    },
    {
        img :"images/bedroom/beds/Double beds/Julien Upholstered Double Bed/Julien Upholstered Double Bed.webp",
        title : "JULIEN UPHOLSTERED DOUBLE BED",
        price1: 'PKR:220,000',
        price2: '180,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 240,
        location:"Juliendb-cart.html"

    },
    {
        img :"images/bedroom/beds/Double beds/Kaniel Bed/Kaniel.png",
        title : "KANIEL DOUBLE BED",
        price1: 'PKR:250,000',
        price2: '210,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 390,
        location:"Kanieldb-cart.html"

    },
    {
        img :"images/bedroom/beds/Double beds/Layla Upholstered Bed/Layla Upholstered Bed.png",
        title : "LAYLA UPHOLSTERED DOUBLE BED",
        price1: 'PKR:210,000',
        price2: '170,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 90,
        location:"Layla db-cart.html"

    },
    
]








// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = bed.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let doublebeds = document.getElementById('double-beds')
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
    
     doublebeds.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let doublebeds = document.getElementById('double-beds')
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
    
    doublebeds.innerHTML = data
    });
    },500)
    
    })






let doublebeds = document.getElementById('double-beds')
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

   doublebeds.innerHTML = data
});