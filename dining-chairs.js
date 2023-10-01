let dining=[
    {
        img :"images/diningroom/Seating/dining-chairs/Diana Velvet Dining.png" ,
        title : "DIANA VELVET DINING CHAIR ",
        price1: 'PKR:30,000',
        price2: '18,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 442,
        location:"Diana Velvet Dining.html"

    },
    {
        img :"images/diningroom/Seating/dining-chairs/Dining Chair Colombo.png" ,
        title : "COLOMBBO DINING CHAIR ",
        price1: 'PKR:22,000',
        price2: '13,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews:344,
        location:"Dining Chair Colombo.html"

    },
    {
        img :"images/diningroom/Seating/dining-chairs/Dining Chair Kensington.png" ,
        title : "KENSINGTON DINING CHAIR ",
        price1: 'PKR:22,000',
        price2: '12,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 122,
        location:"Dining Chair Kensington.html"

    },
    {
        img :"images/diningroom/Seating/dining-chairs/Dining Chair Rocco.png" ,
        title : "ROCCO DINING CHAIR ",
        price1: 'PKR:30,000',
        price2: '21,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 332,
        location:"Dining Chair Rocco.html"

    },
    {
        img :"images/diningroom/Seating/dining-chairs/Dining Chair Zach.png"  ,
        title : "ZACH DINING CHAIR ",
        price1: 'PKR:25,000',
        price2: '18,499',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 533,
        location:"Dining Chair Zach.html"

    },
    {
        img :"images/diningroom/Seating/dining-chairs/Orlando Velvet Modern Dining Chair.png" ,
        title : "ORLANDO VELVET DINING CHAIR ",
        price1: 'PKR:29,499',
        price2: '19,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 223,
        location:"Orlando Velvet Modern Dining Chair.html"

    },
    {
        img :"images/diningroom/Seating/dining-chairs/Rubik Luxury Dining.png"  ,
        title : "RUBIK LUXURY DINING CHAIR ",
        price1: 'PKR:30,000',
        price2: '21,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 324,
        location:"Rubik Luxury Dining.html"

    },
    {
        img :"images/diningroom/Seating/dining-chairs/Rubik Microfiber Leather Dining Chair.png",
        title : "RUBIK MICROFIBER DINING CHAIR ",
        price1: 'PKR:30,000',
        price2: '19,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 432,
        location:"Rubik Microfiber Leather Dining Chair.html"

    },
    {
        img :"images/diningroom/Seating/dining-chairs/Volley Dining-chair.png" ,
        title : "VOLLEY DINING CHAIR ",
        price1: 'PKR:25,000',
        price2: '18,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 218,
        location:"Volley Dining-chair.html"

    },
]





// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = dining.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let diningchairs = document.getElementById('dining-chairs')
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
    
      diningchairs.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let diningchairs = document.getElementById('dining-chairs')
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
    diningchairs.innerHTML = data
    });
    },500)
    
    })






let diningchairs = document.getElementById('dining-chairs')
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
          <p> <del>${e.price1}</del> <b>${e.price2}</b></p>
          <hr class="product-hr">
          <a href="${e.location}" class='anchor'>ADD TO CART</a>
        </div>
      </div>
    </a>
    </div>
    `

    diningchairs.innerHTML = data
});