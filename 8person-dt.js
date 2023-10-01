let dining=[
    {
        img :"images/diningroom/8 persons-ds/Anyayyi Dining set.jpg"  ,
        title : "ANAYAYYI DINING SET ",
        price1: 'PKR:97,000',
        price2: '91,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 432,
        location:"Anyayyi 8Dining set.html"

    },
    {
        img :"images/diningroom/8 persons-ds/Abdul-Hakeem 8 - Person Dining Set.jpg"  ,
        title : "ABDUL-HAKEEM DINING SET ",
        price1: 'PKR:99,000',
        price2: '87,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 533,
        location:"Abdul-Hakeem 8 - Person Dining Set.html"

    },
    {
        img :"images/diningroom/8 persons-ds/Barrel dining set.jpg" ,
        title : "BARREL DINING SET ",
        price1: 'PKR:97,000',
        price2: '84,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 455,
        location:"Barrel 8dining set.html"

    },
    {
        img :"images/diningroom/8 persons-ds/Carrion 8 - Person Dining Set.jpg"  ,
        title : "CARRION DINING SET ",
        price1: 'PKR:95,000',
        price2: '83,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 333,
        location:"Carrion 8 - Person Dining Set.html"

    },
    {
        img :"images/diningroom/8 persons-ds/Coleshill  dining set.jpg"  ,
        title : "COLESHILL DINING SET ",
        price1: 'PKR:92,000',
        price2: '78,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 455,
        location:"Coleshill  8dining set.html"

    },
    {
        img :"images/diningroom/8 persons-ds/Garik 8 - Person Dining Set.png"  ,
        title : "GARIK DINING SET ",
        price1: 'PKR:90,000',
        price2: '79,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 211,
        location:"Garik 8 - Person Dining Set.html"

    },
    {
        img :"images/diningroom/8 persons-ds/Geneiveve 8 - Person Dining Set.png"   ,
        title : "GENEIVEVE DINING SET ",
        price1: 'PKR:89,000',
        price2: '75,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 542,
        location:"Geneiveve 8 - Person Dining Set.html"

    },
    {
        img :"images/diningroom/8 persons-ds/Harless dining set.png",
        title : "HARLESS DINING SET ",
        price1: 'PKR:97,000',
        price2: '86,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 556,
        location:"Harless 8dining set.html"

    },
    {
        img :"images/diningroom/8 persons-ds/Latitude 8-persons dining set.png"  ,
        title : "LATITUDE DINING SET ",
        price1: 'PKR:99,000',
        price2: '89,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 621,
        location:"Latitude 8-persons dining set.html"


    },
]







// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = dining.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let eightperson = document.getElementById('8person-dt')
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
              <i class="${e.s2}"></i>
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
    
      eightperson.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let eightperson = document.getElementById('8person-dt')
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
            <i class="${e.s1}"></i>
            <i class="${e.s2}"></i>
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
    
    eightperson.innerHTML = data
    });
    },500)
    
    })






let eightperson = document.getElementById('8person-dt')
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
            <i class="${e.s1}"></i>
            <i class="${e.s2}"></i>
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

    eightperson.innerHTML = data
});