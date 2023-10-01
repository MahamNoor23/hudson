let dining=[
    {
        img :"images/diningroom/Dinning table-sets/Affinity dining set.jpg",
        title : "AFFINITY DINING SET ",
        price1: 'PKR:125,000',
        price2: '105,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 563,
        location:"Affinity dining set.html"

    },
    {
        img :"images/diningroom/Dinning table-sets/Alannah Extendable Dining Set.png",
        title : "ALANNAH EXTENDABLE DINING SET ",
        price1: 'PKR:115,000',
        price2: '99,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 343,
        location:"Alannah Extendable Dining Set.html"

    },
    {
        img :"images/diningroom/Dinning table-sets/Alfano Dining Set.jpg",
        title : "ALFANO DINING SET ",
        price1: 'PKR:130,000',
        price2: '115,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 234,
        location:"Alfano Dining Set.html"

    },
    {
        img :"images/diningroom/Dinning table-sets/Allscore  Dining Set.png",
        title : "ALLSCORE DINING SET ",
        price1: 'PKR:105,000',
        price2: '92,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews:122,
        location:"Allscore  Dining Set.html"

    },
    {
        img :"images/diningroom/Dinning table-sets/Ariana Dining Set.png",
        title : "ARIANA DINING SET ",
        price1: 'PKR:135,000',
        price2: '115,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 431,
        location:"Ariana Dining Set.html"

    },
    {
        img :"images/diningroom/Dinning table-sets/Arteta  Dining Set.png",
        title : "ARTETA DINING SET ",
        price1: 'PKR:135,000',
        price2: '100,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 123,
        location:"Arteta  Dining Set.html"

    },
    {
        img :"images/diningroom/Dinning table-sets/Aster 8 - Person Solid Wood Dining Set.png" ,
        title : "ASTER DINING SET ",
        price1: 'PKR:120,000',
        price2: '91,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 213,
        location:"Aster 8 - Person Solid Wood Dining Set.html"

    },
    {
        img :"images/diningroom/Dinning table-sets/Carmino dining set.png",
        title : "CARMINO DINING SET ",
        price1: 'PKR:95,999',
        price2: '75,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 211,
        location:"Carmino dining set.html"

    },
    {
        img :"images/diningroom/Dinning table-sets/Chantilly dining set.jpg",
        title : "CHANTILLY DINING SET ",
        price1: 'PKR:130,000',
        price2: '100,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 332,
        location:"Chantilly dining set.html"

    },
]





// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = dining.filter((item) => +item.price2.replace(/,/g, '') >= +range.value);
    setTimeout(()=>{
    let diningtableset = document.getElementById('diningtable-set')
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
    
      diningtableset.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let diningtableset = document.getElementById('diningtable-set')
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
    
    diningtableset.innerHTML = data
    });
    },500)
    
    })
    
    
    
    
    // Original 
    let diningtableset = document.getElementById('diningtable-set')
    let data =''
    dining.forEach(e => {
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
    
      diningtableset.innerHTML = data
    });
    
    
    
    