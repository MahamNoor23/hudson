let dining=[
    {
        img :"images/diningroom/Seating/bar stools/bar stool with footrest.png",
        title : "BAR STOOL WITH FOOTREST ",
        price1: 'PKR:30,000',
        price2: '14,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 442,
        location:"bar stool with footrest.html"

    },
    {
        img :"images/diningroom/Seating/bar stools/Burney bar stool.png",
        title : " BURNEY BAR STOOL ",
        price1: 'PKR:40,000',
        price2: '32,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 221,
        location:"Burney bar stool.html"

    },
    {
        img :"images/diningroom/Seating/bar stools/Clift bar stool.png",
        title : " CLIFT BAR STOOL ",
        price1: 'PKR:30,000',
        price2: '21,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 512,
        location:"Clift bar stool.html"

    },
    {
        img :"images/diningroom/Seating/bar stools/Hartung bar stools.png",
        title : "HARTUNG BAR STOOL  ",
        price1: 'PKR:30,000',
        price2: '12,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 442,
        location:"Hartung bar stools.html"

    },
    {
        img :"images/diningroom/Seating/bar stools/Ludly Swivel bar stool.png",
        title : "LUDLY SWIVEL BAR STOOL  ",
        price1: 'PKR:37,000',
        price2: '25,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 122,
        location:"Ludly Swivel bar stool.html"
    },
    {
        img :"images/diningroom/Seating/bar stools/Luca bar stool.png" ,
        title : "LUCA BAR STOOL  ",
        price1: 'PKR:35,000',
        price2: '26,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 442,
        location:"Luca bar stool.html"

    },
    {
        img :"images/diningroom/Seating/bar stools/Sharman bar stools.png" ,
        title : " SHARMAN BAR STOOL  ",
        price1: 'PKR:21,000',
        price2: '12,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 223,
        location:"Sharman bar stools.html"

    },
    {
        img :"images/diningroom/Seating/bar stools/Swivel Bar Stools.png" ,
        title : " SWIVEL BAR STOOL  ",
        price1: 'PKR:29,000',
        price2: '21,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 331,
        location:"Swivel Bar Stools.html"

    },
]





// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = dining.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let barstools = document.getElementById('bar-stools')
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
    
     barstools.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let barstools = document.getElementById('bar-stools')
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
    barstools.innerHTML = data
    });
    },500)
    
    })






let barstools= document.getElementById('bar-stools')
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

    barstools.innerHTML = data
});