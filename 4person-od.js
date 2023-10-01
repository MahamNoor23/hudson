let outdoor=[
    {
        img :"images/outdoor/outdooor furniture/4person/Agaran Metal.png" ,
        title : "AGARAN METAL 4-PERSON SET",
        price1: 'PKR:55,000',
        price2: '45,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 211,
location:"Agaran Metal 4person.html"
    },
    {
        img :"images/outdoor/outdooor furniture/4person/Milnor Square 4 - Person Outdoor Dining Set.png",
        title : "SQUARE  4-PERSON SET",
        price1: 'PKR:52,000',
        price2: '40,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 255,
location:"Milnor Square 4 - Person Outdoor Dining Set.html"
    },
    {
        img :"images/outdoor/outdooor furniture/4person/Carlyssa.png" ,
        title : "CARLYSSA 4-PERSON SET",
        price1: 'PKR:59,000',
        price2: '52,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 555,
location:"Carlyssa 4person.html"
    },
    {
        img :"images/outdoor/outdooor furniture/4person/Charmain Polyethylene.png" ,
        title : "CHARMAIN POLYETHYLENE 4-PERSON SET",
        price1: 'PKR:65,000',
        price2: '52,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 344,
location:"Charmain Polyethylene 4person.html"
    },
    {
        img :"images/outdoor/outdooor furniture/4person/Eulene.png" ,
        title : "EULENE 4-PERSON SET",
        price1: 'PKR:49,000',
        price2: '38,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 211,
location:""
    },
    {
        img :"images/outdoor/outdooor furniture/4person/Ezzah.jpg" ,
        title : "EZZAH 4-PERSON SET",
        price1: 'PKR:45,000',
        price2: '36,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 122,
location:" Eulene 4person.html"
    },
    {
        img :"images/outdoor/outdooor furniture/4person/Hazen.png",
        title : "HAZEN 4-PERSON SET",
        price1: 'PKR:67,000',
        price2: '55,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 455,
location:" Hazen 4person.html"
    },
    {
        img :"images/outdoor/outdooor furniture/4person/Jayda.png" ,
        title : "JAYDA 4-PERSON SET",
        price1: 'PKR:45,000',
        price2: '32,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 148,
location:"Jayda 4person.html"
    },
    {
        img :"images/outdoor/outdooor furniture/4person/Lagarde Hexagon.jpg" ,
        title : "LAGARDE HEXAGON 4-PERSON SET",
        price1: 'PKR:55,000',
        price2: '47,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 245,
location:"Lagarde Hexagon 4person.html"
    },
    {
        img :"images/outdoor/outdooor furniture/4person/Onika.png" ,
        title : "ONIKA 4-PERSON SET",
        price1: 'PKR:49,000',
        price2: '41,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 289,
location:"Onika 4person.html"
    },
    {
        img :"images/outdoor/outdooor furniture/4person/Milnor.png" ,
        title : "MILNOR 4-PERSON SET",
        price1: 'PKR:68,000',
        price2: '60,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 211,
location:"Milnor 4person.html"
    },
]


// Search 
document.getElementById('search').addEventListener('click',()=>{
  const filter = outdoor.filter((item) => item.price2.replace(/,/g, '') >= range.value);
  setTimeout(()=>{
  let fourseaterod = document.getElementById('4person')
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
  
    fourseaterod.innerHTML = data
  });
  },2900)
  
  
  })
  
  
  // Reset 
  document.getElementById('reset').addEventListener('click',()=>{
  setTimeout(()=>{
  
  let fourseaterod = document.getElementById('4person')
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
  
  fourseaterod.innerHTML = data
  });
  },500)
  
  })
  
  
  
  
  // Original 
  let fourseaterod = document.getElementById('4person')
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
  
    fourseaterod.innerHTML = data
  });
  
  
  
  