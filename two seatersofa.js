let livingroom=[
    {
        img : "images/livingroom/Sofa/2 seater sofa/Fraser 2 Seater Sofa.png" ,
        title : "FRASER TWO SEATER ",
        price1: 'PKR:49,999',
        price2: '40,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 250, 
        location:"Frasertwo.html"

    },
    {
        img : "images/livingroom/Sofa/2 seater sofa/Hugo 2 Seater Sofa.png" ,
        title : "HUGO TWO SEATER ",
        price1: 'PKR:55,000',
        price2: '42,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 234, 
        location:"Hugotwo.html"

    },
    {
        img : "images/livingroom/Sofa/2 seater sofa/Living Hoxton 2 Seater Sofa.png" ,
        title : "LIVING HOXTON TWO SEATER ",
        price1: 'PKR:59,999',
        price2: '47,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 345,
        location:"LivingHoxton.html"

    },
    {
        img : "images/livingroom/Sofa/2 seater sofa/Noah 2 Seater Sofa.png" ,
        title : "NOAH TWO SEATER ",
        price1: 'PKR:43,999',
        price2: '35,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 120,
        location:"Noahtwo.html"

    },
    {
        img :"images/livingroom/Sofa/2 seater sofa/Regency 2 Seater Sofa.png" ,
        title : "REGENCY TWO SEATER ",
        price1: 'PKR:52,999',
        price2: '44,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 250,
        location:"Regencytwo.html",

    },
    {
        img : "images/livingroom/Sofa/2 seater sofa/Theo Express 2 Seater Sofa.png" ,
        title : "THEO EXPRESS TWO SEATER ",
        price1: 'PKR:42,999',
        price2: '36,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 453,
        location:"TheoExpress.html"

    },
    {
        img : "images/livingroom/Sofa/2 seater sofa/Axel 2 Seater Power Recliner Sofa.png",
        title : "AXEL TWO SEATER ",
        price1: 'PKR:57,999',
        price2: '49,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 521,
        location:"Axeltwo.html"

    },
    {
        img :"images/livingroom/Sofa/2 seater sofa/Pluto 2 Seater Power Recliner Sofa.png" ,
        title : "PLUTO TWO SEATER ",
        price1: 'PKR:43,999',
        price2: '35,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 389,
location:"Plutotwo.html"
    },
    {
        img : "images/livingroom/Sofa/2 seater sofa/Hoxton 2 Seater Sofa.jpg" ,
        title : "HOXTON TWO SEATER ",
        price1: 'PKR:63,999',
        price2: '52,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 235,
        location:"Hoxtontwo.html"

    },
    {
        img : "images/livingroom/Sofa/2 seater sofa/County 2 Seater Sofa.png" ,
        title : "COUNTY TWO SEATER ",
        price1: 'PKR:49,999',
        price2: '40,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 345,
        location:"Countytwo.html "

    },
    {
        img : "images/livingroom/Sofa/2 seater sofa/Chicago 2 Seater Sofa.png" ,
        title : "CHICAGO TWO SEATER ",
        price1: 'PKR:59,999',
        price2: '52,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 232,
location:"Chicagotwo.html"
    },
 
]



// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = livingroom.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let twoseatersofa = document.getElementById('2 seater-sofa')
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
    
      twoseatersofa.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let twoseatersofa = document.getElementById('2 seater-sofa')
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
    
    twoseatersofa.innerHTML = data
    });
    },500)
    
    })
    
    
    
    
    // Original 
    let twoseatersofa = document.getElementById('2 seater-sofa')
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
    
    twoseatersofa.innerHTML = data
    });
    