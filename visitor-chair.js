let livingroom=[
    {
        img : "images/livingroom/Chairs/visitor-chair/Afred Contemporary Chair.png"  ,
        title : "AFRED CONTEMPORARY CHAIR ",
        price1: 'PKR:39,000',
        price2: '31,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 166,
location:"Afred Contemporary Chair.html"
    },
    {
        img : "images/livingroom/Chairs/visitor-chair/Chole Revolving Chair.png"  ,
        title : "CHOLE REVOLVING CHAIR ",
        price1: 'PKR:42,000',
        price2: '36,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 388,
location:"Chole Revolving Chair.html"
    },
    {
        img : "images/livingroom/Chairs/visitor-chair/Colby chair.png"  ,
        title : "COLBY CHAIR ",
        price1: 'PKR:45,000',
        price2: '39,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 190,
location:"Colby chair.html"
    },
    {
        img : "images/livingroom/Chairs/visitor-chair/Deska Visitor Chair.png"  ,
        title : "DESKA CHAIR ",
        price1: 'PKR:29,000',
        price2: '20,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 488,
location:"Deska Visitor Chair.html"
    },
    {
        img : "images/livingroom/Chairs/visitor-chair/Erich Wooden Chair.png"  ,
        title : "ERICH WOODEN CHAIR ",
        price1: 'PKR:37,000',
        price2: '25,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 166,
location:"Erich Wooden Chair.html"
    },
    {
        img : "images/livingroom/Chairs/visitor-chair/Ester chair.png"  ,
        title : "ESTER CHAIR ",
        price1: 'PKR:39,000',
        price2: '31,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 522,
location:"Ester chair.html"
    },
    {
        img : "images/livingroom/Chairs/visitor-chair/Ginza chair.png"  ,
        title : "GINZA CHAIR ",
        price1: 'PKR:42,000',
        price2: '36,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 220,
        location:"Ginza chair.html"

    },
    {
        img : "images/livingroom/Chairs/visitor-chair/Jarin Visitor Chair.png"  ,
        title : "JARIN CHAIR ",
        price1: 'PKR:44,000',
        price2: '39,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 677,
location:"Jarin Visitor Chair.html"
    },
    {
        img : "images/livingroom/Chairs/visitor-chair/Leola Visitor Chair.png"  ,
        title : "LEOLA CHAIR ",
        price1: 'PKR:50,000',
        price2: '40,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 256,
location:"Leola Visitor Chair.html"
    },
    {
        img : "images/livingroom/Chairs/visitor-chair/Mishmash Patchwork.png"  ,
        title : "MISHMASH PATCHWORK CHAIR ",
        price1: 'PKR:39,000',
        price2: '31,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 220,
location:"Mishmash Patchwork.html"
    },
    {
        img :"images/livingroom/Chairs/visitor-chair/Orlando chair.png"  ,
        title : "ORLANDO CHAIR ",
        price1: 'PKR:42,000',
        price2: '35,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 1223,
location:"Orlando chair.html"
    },
    {
        img : "images/livingroom/Chairs/visitor-chair/Prahl Visitor Chair.png"  ,
        title : "PARAHL CHAIR ",
        price1: 'PKR:43,000',
        price2: '33,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 188,
location:"Prahl Visitor Chair.html"
    },
    {
        img :"images/livingroom/Chairs/visitor-chair/Rivoli Patchwork chair.png"  ,
        title : "RIVOLI PATCHWORK CHAIR ",
        price1: 'PKR:45,000',
        price2: '37,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 145,
location:"Rivoli Patchwork chair.html"
    },
    {
        img : "images/livingroom/Chairs/visitor-chair/Ross Velvet Chair.png"  ,
        title : "ROSE VELVET CHAIR ",
        price1: 'PKR:34,000',
        price2: '29,000,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 545,
location:"Ross Velvet Chair.html"
    },
   

]
// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = livingroom.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let visitorchair = document.getElementById('visitor-chair')
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
    
      visitorchair.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let visitorchair = document.getElementById('visitor-chair')
    let data =''
    livingroom.forEach(e => {
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
    
    visitorchair.innerHTML = data
    });
    },500)
    
    })
    






let visitorchair = document.getElementById('visitor-chair')
let data =''
livingroom.forEach(e => {
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
          <p> <del>${e.price1}</del> <b>${e.price2}</b></p>
          <hr class="product-hr">
          <a href="${e.location}" class='anchor'>ADD TO CART</a>
        </div>
      </div>
    </a>
    </div>
    `

    visitorchair.innerHTML = data
});