let bed=[
    {
        img :"images/bedroom/storage/Wardrobes/Bredevoort Manufactured Wood Armoire.png" ,
        title : "BREDEVOOT MANUFACTURED WOODROBE ",
        price1: 'PKR:49,000',
        price2: '39,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 322,
  location:"Bredevoort Manufactured Wood Armoire.html"
    },
    {
        img :"images/bedroom/storage/Wardrobes/Bucholz  Wardrobe Cabinet.png" ,
        title : "BUCHOLZ WARDROBE",
        price1: 'PKR:45,000',
        price2: '37,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 211,
  location:"Bucholz  Wardrobe Cabinet.html"
    },
    {
        img :"images/bedroom/storage/Wardrobes/Charm Wardrobe.png" ,
        title : "CHARM WARDROBE",
        price1: 'PKR:60,000',
        price2: '51,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 122,
  location:"Charm Wardrobe.html"
    },
    {
        img :"images/bedroom/storage/Wardrobes/Cherone Wardrobe.png"  ,
        title : "CHERONE WARDROBE",
        price1: 'PKR:47,000',
        price2: '42,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 434,
  location:"Cherone Wardrobe.html"
    },
    {
        img :"images/bedroom/storage/Wardrobes/Derlyum Wardrobe.png" ,
        title : "DERLYUM WARDROBE",
        price1: 'PKR:55,000',
        price2: '40,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 243,
  location:"Derlyum Wardrobe.html"
    },
    {
        img :"images/bedroom/storage/Wardrobes/Fresco Wardrobe.png",
        title : "FRESCO WARDROBE",
        price1: 'PKR:47,000',
        price2: '41,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 133,
  location:"Fresco Wardrobe.html"
    },
    {
        img :"images/bedroom/storage/Wardrobes/Greenport Solid Wood Armoire.png" ,
        title : "GREENPORT SOLID WOOD WARDROBE",
        price1: 'PKR:45,000',
        price2: '38,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
      reviews: 421,
      location:"Greenport Solid Wood Armoire.html" 
    },
    {
        img :"images/bedroom/storage/Wardrobes/Howard  Wardrobe.png" ,
        title : "HOWARD WARDROBE",
        price1: 'PKR:88,000',
        price2: '80,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 267,
  location:"Howard  Wardrobe.html"
    },
    {
        img :"images/bedroom/storage/Wardrobes/Primm Solid Wood Armoire.jpg" ,
        title : "PRIM SOLID WOOD WARDROBE",
        price1: 'PKR:86,000',
        price2: '76,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 555,
  location:"Primm Solid Wood Armoire.html"
    },
 
  ]
  
  // Search 
  document.getElementById('search').addEventListener('click',()=>{
  const filter = bed.filter((item) => +item.price2.replace(/,/g, '') >= +range.value);
  setTimeout(()=>{
  let wardrobes = document.getElementById('wardrobes')
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
  
    wardrobes.innerHTML = data
  });
  },2900)
  
  
  })
  
  
  // Reset 
  document.getElementById('reset').addEventListener('click',()=>{
  setTimeout(()=>{
  
  let wardrobes= document.getElementById('wardrobes')
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
  
  wardrobes.innerHTML = data
  });
  },500)
  
  })
  
  
  
  
  // Original 
  let wardrobes = document.getElementById('wardrobes')
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
  
    wardrobes.innerHTML = data
  });
  
  
  
  