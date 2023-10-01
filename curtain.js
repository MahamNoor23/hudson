let decor=[
    {
        img : "images/bedroom/decor/curtains/Archaeo Sarro.png",
        title : "ARCHAEO SARRO CURTAIN PAIR ",
        price1: 'PKR:9,999',
        price2: 'PKR:4,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 123,
        location:"ArchaeoSarro.html"

    },
    {
        img : "images/bedroom/decor/curtains/Bantam.png",
        title : "BANTAM CURTAIN PAIR ",
        price1: 'PKR:12,599',
        price2: 'PKR:7,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 345,
        location:"Bantam.html"

    },
    {
        img : "images/bedroom/decor/curtains/Gemala Thermal.png",
        title : "GEMALA THERMAL CURTAIN PAIR ",
        price1: 'PKR:11,999',
        price2: 'PKR:6,299',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 455,
        location:"GemalaThermal.html"

    },
    {
        img : "images/bedroom/decor/curtains/Hallmark.jpg",
        title : "HALLMARK CURTAIN PAIR ",
        price1: 'PKR:9,999',
        price2: 'PKR:6,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 245,
        location:"Hallmark.html"

    },
    {
        img : "images/bedroom/decor/curtains/Haoxuan curtain pair.png",
        title : "HAOXUAN CURTAIN PAIR ",
        price1: 'PKR:13,000',
        price2: 'PKR:8,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 344,
        location:"Haoxuan.html"

    },
    {
        img : "images/bedroom/decor/curtains/Kennith Sateen.jpg",
        title : "KENNITH CURTAIN PAIR ",
        price1: 'PKR:12,000',
        price2: 'PKR:8,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 289,
        location:"Kennith.html"

    },
    {
        img : "images/bedroom/decor/curtains/Lauren Ralph.jpg",
        title : "LAUREN RALPH CURTAIN PAIR ",
        price1: 'PKR:14,000',
        price2: 'PKR:10,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 367,
        location:"LaurenRalph.html"

    },
    {
        img : "images/bedroom/decor/curtains/Lineberry.png",
        title : "LINEBERRY CURTAIN PAIR ",
        price1: 'PKR:13,000',
        price2: 'PKR:8,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 455,
        location:"Lineberry.html"

    },
    {
        img : "images/bedroom/decor/curtains/Polyester Sheer Curtain Pair.png",
        title : "POLYESTER SHEER CURTAIN PAIR ",
        price1: 'PKR:11,000',
        price2: 'PKR:7,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 267,
        location:"PolyesterSheer.html"

    },
    {
        img : "images/bedroom/decor/curtains/Sauers.png",
        title : "SAUERS CURTAIN PAIR ",
        price1: 'PKR:12,999',
        price2: 'PKR:6,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 413,
        location:"Sauers.html"

    },
    {
        img : "images/bedroom/decor/curtains/Solid Grommet.png",
        title : "SOLID GROMMET CURTAIN PAIR ",
        price1: 'PKR:14,000',
        price2: 'PKR:9,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 123,
        location:"Solid Grommet.html"

    },
]



// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = decor.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let curtains = document.getElementById('curtains')
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
              <i class="${e.s2}"></i>
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
    
      curtains.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let curtains= document.getElementById('curtains')
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
            <i class="${e.s2}"></i>
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
    
    curtains.innerHTML = data
    });
    },500)
    
    })
    
    
    
    
    // Original 
    let curtains = document.getElementById('curtains')
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
              <i class="${e.s2}"></i>
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
    
      curtains.innerHTML = data
    });