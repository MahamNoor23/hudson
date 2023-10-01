let office=[
    {
        img : "images/office/office-tables/Manager-table/Ariel Manager Office Desk.png",
        title : "ARIEL MANAGER OFFICE DESK",
        price1: 'PKR:56,000',
        price2: '45,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 199,
location:"Ariel Manager Office Desk.html"

    },
    {
        img : "images/office/office-tables/Manager-table/Jayde Desk.png",
        title : "JAYDE MANAGER OFFICE DESK",
        price1: 'PKR:46,000',
        price2: '35,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 333,
location:"Jayde Desk.html"

    },
    {
        img : "images/office/office-tables/Manager-table/Lunar Junior Manager Desk Set.png",
        title : "LUNAR JUNIOR MANAGER OFFICE DESK",
        price1: 'PKR:60,000',
        price2: '55,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 277,
location:"Lunar Junior Manager Desk Set.html"

    },
    {
        img : "images/office/office-tables/Manager-table/Omega.png",
        title : "OMEGA MANAGER OFFICE DESK",
        price1: 'PKR:66,000',
        price2: '60,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 599,
location:"Omega Desk.html"

    },
    {
        img : "images/office/office-tables/Manager-table/Ozone.png",
        title : "OZONE MANAGER OFFICE DESK",
        price1: 'PKR:59,000',
        price2: '52,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 666,
location:"Ozone Desk.html"

    },
    {
        img : "images/office/office-tables/Manager-table/Topwell Compact Desk.png",
        title : "TOPWELL  MANAGER OFFICE DESK",
        price1: 'PKR:65,000',
        price2: '57,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 496,
location:"opwell Compact Desk.html"
    },
]






// Search 
document.getElementById('search').addEventListener('click',()=>{
const filter = office.filter((item) => +item.price2.replace(/,/g, '') >= +range.value);
setTimeout(()=>{
let managertable = document.getElementById('manager-table')
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

  managertable.innerHTML = data
});
},2900)


})


// Reset 
document.getElementById('reset').addEventListener('click',()=>{
setTimeout(()=>{

let managertable = document.getElementById('manager-table')
let data =''
office.forEach(e => {
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

managertable.innerHTML = data
});
},500)

})




// Original 
let managertable = document.getElementById('manager-table')
let data =''
office.forEach(e => {
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

  managertable.innerHTML = data
});



