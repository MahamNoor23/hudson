let outdoor=[
    {
        img :"images/outdoor/swing/Arcisz Porch Swing.png" ,
        title : "ARCISZ PORCH SWING",
        price1: 'PKR:55,000',
        price2: '46,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 233,
location:"Arcisz Porch Swing.html"
    },
    {
        img :"images/outdoor/swing/Chingford Porch Swing.png" ,
        title : "CHINGFORD PORCH SWING",
        price1: 'PKR:58,000',
        price2: '52,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 189,
location:"Chingford Porch Swing.html"
    },
    {
        img :"images/outdoor/swing/Cottle Porch Swing.png" ,
        title : "COTTLE PORCH SWING",
        price1: 'PKR:57,000',
        price2: '44,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 256,
location:"Cottle Porch Swing.html"
    },
    {
        img :"images/outdoor/swing/Fordwich Porch Swing.png" ,
        title : "FORDWICH PORCH SWING",
        price1: 'PKR:60,000',
        price2: '58,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 345,
location:"Fordwich Porch Swing.html"
    },
    {
        img :"images/outdoor/swing/Kauffman Porch Swing.jpg",
        title : "KAUFFMAN PORCH SWING",
        price1: 'PKR:50,000',
        price2: '38,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 123,
location:"Kauffman Porch Swing.html"
    },
    {
        img :"images/outdoor/swing/Marcheline Swing Chair with Stand.png" ,
        title : "MARCHELINE PORCH SWING",
        price1: 'PKR:59,000',
        price2: '52,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 176,
location:"Marcheline Swing Chair with Stand.html"
    },
   
    {
        img :"images/outdoor/swing/Warrington Porch Swing.png",
        title : "WARRINGTON PORCH SWING",
        price1: 'PKR:57,000',
        price2: '46,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 455,
location:"Warrington Porch Swing.html"
    },
    {
        img :"images/outdoor/swing/Watford Porch Swing.png" ,
        title : "WATFORD PORCH SWING",
        price1: 'PKR:59,000',
        price2: '50,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 489,
location:"Watford Porch Swing.html"
    },
]







// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = outdoor.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let podswing = document.getElementById('pod-swing')
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
    
     podswing.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let podswing = document.getElementById('pod-swing')
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
    
    podswing.innerHTML = data
    });
    },500)
    
    })
    
    
    
    
    // Original 
    let podswing = document.getElementById('pod-swing')
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
    
      podswing.innerHTML = data
    });
    
    
    
    