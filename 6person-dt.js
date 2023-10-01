let dining=[
    {
        img :"images/diningroom/6 persons-ds/Alzahra dining set.png"  ,
        title : "ALZAHRA DINING SET ",
        price1: 'PKR:95,000',
        price2: '75,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 321,
        location:"Alzahra 6dining set.html"

    },
    {
        img :"images/diningroom/6 persons-ds/Devante dining set.png"   ,
        title : "DEVANTE DINING SET ",
        price1: 'PKR:97,000',
        price2: '85,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 122,
        location:"Devante 6dining set.html"

    },
    {
        img :"images/diningroom/6 persons-ds/Gigi 6 - Person Dining Set.png"  ,
        title : "GIGI DINING SET ",
        price1: 'PKR:95,000',
        price2: '75,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 222,
        location:"Gigi 6 - Person Dining Set.html"

    },
    {
        img :"images/diningroom/6 persons-ds/Gray Dining Table.jpg"  ,
        title : "GRAY DINING SET ",
        price1: 'PKR:80,000',
        price2: '70,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 444,
        location:"Gray 6Dining Table.html"

    },
    {
        img :"images/diningroom/6 persons-ds/Ismay 6 - Person Dining Set.png"  ,
        title : "ISMAY DINING SET ",
        price1: 'PKR:86,000',
        price2: '72,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 245,
        location:"Ismay 6 - Person Dining Set.html"

    },
   
    {
        img :"images/diningroom/6 persons-ds/Leger 6 - Person Dining Set.png"  ,
        title : "LEGER DINING SET ",
        price1: 'PKR:90,000',
        price2: '71,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 555,
        location:"Leger 6 - Person Dining Set.html"

    },
    {
        img :"images/diningroom/6 persons-ds/Seibold 6 - Person Dining Set.png"  ,
        title : "SEIBOLD DINING SET ",
        price1: 'PKR:75,000',
        price2: '66,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 432,
        location:"Seibold 6 - Person Dining Set.html"

    },
    {
        img :"images/diningroom/6 persons-ds/Stonge dining set.jpg"  ,
        title : "STONGE DINING SET ",
        price1: 'PKR:95,000',
        price2: '82,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 322,
        location:"Stonge 6dining set.html"

    },
    {
        img :"images/diningroom/6 persons-ds/Swanscombe 6 - Person Dining Set.png"  ,
        title : "SWANSCOMBE DINING SET ",
        price1: 'PKR:92,000',
        price2: '80,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 556,
        location:"Swanscombe 6 - Person Dining Set.html"

    },
]





// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = dining.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let sixperson = document.getElementById('6person-dt')
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
    
      sixperson.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let sixperson = document.getElementById('6person-dt')
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
    
    sixperson.innerHTML = data
    });
    },500)
    
    })






let sixperson = document.getElementById('6person-dt')
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

    sixperson.innerHTML = data
});