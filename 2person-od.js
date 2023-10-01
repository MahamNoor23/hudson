let outdoor=[
  {
      img :"images/outdoor/outdooor furniture/2person/Ainsley Round 2 - Person.png" ,
      title : "AINSLEY 2-PERSON SET",
      price1: 'PKR:35,000',
      price2: '29,000',
      s1: "fa-solid fa-star",
      s2: "fa-solid fa-star-half-stroke",
      s3:'fa-regular fa-star',
      reviews: 322,
location:"Ainsley Round 2 - Person.html"
  },
  {
      img :"images/outdoor/outdooor furniture/2person/Alfreda.png" ,
      title : "ALFREDA 2-PERSON SET",
      price1: 'PKR:35,000',
      price2: '27,000',
      s1: "fa-solid fa-star",
      s2: "fa-solid fa-star-half-stroke",
      s3:'fa-regular fa-star',
      reviews: 211,
location:"Alfreda.html"
  },
  {
      img :"images/outdoor/outdooor furniture/2person/Beoll Metal 2 - Person.png" ,
      title : "BEOLL METAL 2-PERSON SET",
      price1: 'PKR:40,000',
      price2: '36,000',
      s1: "fa-solid fa-star",
      s2: "fa-solid fa-star-half-stroke",
      s3:'fa-regular fa-star',
      reviews: 122,
location:"Beoll Metal 2 - Person.html"
  },
  {
      img :"images/outdoor/outdooor furniture/2person/Kirsta Square 2 - Person.png"  ,
      title : "KIRSTA SQUARE 2-PERSON SET",
      price1: 'PKR:47,000',
      price2: '42,000',
      s1: "fa-solid fa-star",
      s2: "fa-solid fa-star-half-stroke",
      s3:'fa-regular fa-star',
      reviews: 434,
location:"Kirsta Square 2 - Person.html"
  },
  {
      img :"images/outdoor/outdooor furniture/2person/Rares.jpg" ,
      title : "RARES 2-PERSON SET",
      price1: 'PKR:35,000',
      price2: '30,000',
      s1: "fa-solid fa-star",
      s2: "fa-solid fa-star-half-stroke",
      s3:'fa-regular fa-star',
      reviews: 243,
location:"Rares.html"
  },
  {
      img :"images/outdoor/outdooor furniture/2person/Round 2 - Person.png",
      title : "ROUND 2-PERSON SET",
      price1: 'PKR:37,000',
      price2: '31,000',
      s1: "fa-solid fa-star",
      s2: "fa-solid fa-star-half-stroke",
      s3:'fa-regular fa-star',
      reviews: 133,
location:"Round 2 - Person.html"
  },
  {
      img :"images/outdoor/outdooor furniture/2person/Springmont.png" ,
      title : "SPRINGMONT 2-PERSON SET",
      price1: 'PKR:35,000',
      price2: '28,000',
      s1: "fa-solid fa-star",
      s2: "fa-solid fa-star-half-stroke",
      s3:'fa-regular fa-star',
    reviews: 421,
    location:"Springmont.html" 
  },
  {
      img :"images/outdoor/outdooor furniture/2person/Square 2 - Person.jpg" ,
      title : "SQUARE 2-PERSON SET",
      price1: 'PKR:39,000',
      price2: '33,000',
      s1: "fa-solid fa-star",
      s2: "fa-solid fa-star-half-stroke",
      s3:'fa-regular fa-star',
      reviews: 267,
location:"Square 2 - Person.html"
  },
  {
      img :"images/outdoor/outdooor furniture/2person/Stilton Round 2 - Person.png" ,
      title : "STILTON 2-PERSON SET",
      price1: 'PKR:36,000',
      price2: '28,000',
      s1: "fa-solid fa-star",
      s2: "fa-solid fa-star-half-stroke",
      s3:'fa-regular fa-star',
      reviews: 555,
location:"Stilton Round 2 - Person.html"
  },
  {
      img :"images/outdoor/outdooor furniture/2person/Tadwick Square 2 - Person.png" ,
      title : "TADWICK 2-PERSON SET",
      price1: 'PKR:49,000',
      price2: '45,000',
      s1: "fa-solid fa-star",
      s2: "fa-solid fa-star-half-stroke",
      s3:'fa-regular fa-star',
      reviews: 433,
location:"Tadwick Square 2 - Person.htmml"
  },
]

// Search 
document.getElementById('search').addEventListener('click',()=>{
const filter = outdoor.filter((item) => item.price2.replace(/,/g, '') >= range.value);
setTimeout(()=>{
let twoseaterod = document.getElementById('2seater')
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

  twoseaterod.innerHTML = data
});
},2900)


})


// Reset 
document.getElementById('reset').addEventListener('click',()=>{
setTimeout(()=>{

let twoseaterod = document.getElementById('2seater')
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

twoseaterod.innerHTML = data
});
},500)

})




// Original 
let twoseaterod = document.getElementById('2seater')
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

  twoseaterod.innerHTML = data
});



