let outdoor=[
    {
        img :"images/outdoor/outdooor furniture/6person/Avebury.png" ,
        title : "AVEBURY 6-PERSON SET",
        price1: 'PKR:55,000',
        price2: '45,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 211,
        location:"Avebury.html"

    },
    {
        img :"images/outdoor/outdooor furniture/6person/Bathilde.png"  ,
        title : "BAHILDE 6-PERSON SET",
        price1: 'PKR:85,000',
        price2: '69,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 433,
location:"Bathilde.html"
    },
    {
        img :"images/outdoor/outdooor furniture/6person/Bindu.png" ,
        title : "BINDU 6-PERSON SET",
        price1: 'PKR:90,000',
        price2: '79,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 561,
location:"Bindu.html"
    },
    {
        img :"images/outdoor/outdooor furniture/6person/Hoff.png"   ,
        title : "HOFF 6-PERSON SET",
        price1: 'PKR:85,000',
        price2: '71,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 278,
location:"Hoff.html"
    },
    {
        img :"images/outdoor/outdooor furniture/6person/Licette.png",
        title : "LICETTE 6-PERSON SET",
        price1: 'PKR:95,000',
        price2: '82,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 189,
location:"Licette.html"
    },
    {
        img :"images/outdoor/outdooor furniture/6person/Milnor.png",
        title : "MILNOR 6-PERSON SET",
        price1: 'PKR:85,000',
        price2: '69,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 199,
location:"Milnor.html"
    },
    {
        img :"images/outdoor/outdooor furniture/6person/Rithland.png",
        title : "RITHLAND 6-PERSON SET",
        price1: 'PKR:95,000',
        price2: '86,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 543,
location:"Rithland.html"
    },
   
]


// Search 
document.getElementById('search').addEventListener('click',()=>{
const filter = outdoor.filter((item) => item.price2.replace(/,/g, '') >= range.value);
setTimeout(()=>{
let sixseaterod = document.getElementById('6seater')
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

  sixseaterod.innerHTML = data
});
},2900)


})


// Reset 
document.getElementById('reset').addEventListener('click',()=>{
setTimeout(()=>{

let sixseaterod = document.getElementById('6seater')
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
sixseaterod.innerHTML = data
});
},500)

})




// Original 
let sixseaterod = document.getElementById('6seater')
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

  sixseaterod.innerHTML = data
});



