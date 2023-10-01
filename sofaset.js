let livingroom=[
    {
        img : "images/livingroom/Sofa/Sofa sets/AZTEC Sofa/AZTEC Sofa Set.png" ,
        title : "AZTEC SOFA SET ",
        price1: 'PKR:200,000',
        price2: '180,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 250,
        location:"AZTEC.html"

    },
    {
        img : "images/livingroom/Sofa/Sofa sets/HOLDEN Sofa/HOLDEN sofaset.png" ,
        title : "HOLDEN SOFA SET ",
        price1: 'PKR:180,000',
        price2: '140,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 210,
location:"HOLDENsofaset.html"
    },
    {
        img : "images/livingroom/Sofa/Sofa sets/Lodge Sofa Set/lodge-sofa-set-in-green-velvet.png" ,
        title : "LODGE SOFA SET ",
        price1: 'PKR:230,000',
        price2: '190,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 250,
location:"lodgesofaset.html"
    },
    {
        img : "images/livingroom/Sofa/Sofa sets/Robles/ROBLES-Sofa-Set.jpg" ,
        title : "ROBLES SOFA SET ",
        price1: 'PKR:170,000',
        price2: '130,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 200,
location:"ROBLESsofaset.html"
    },
    {
        img : "images/livingroom/Sofa/Sofa sets/Sofa noble set/sofa_noble_set_in_navy_blue_velvet.png" ,
        title : " SOFA NOBLE SET ",
        price1: 'PKR:140,000',
        price2: '110,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 546,
location:"sofanoble.html"
    },
    {
        img : "images/livingroom/Sofa/Sofa sets/LYMAN Sofa.jpg" ,
        title : "LYMAN SOFA SET ",
        price1: 'PKR:250,000',
        price2: '210,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 559,
location:"LYMAN Sofa.html"
    },
    {
        img : "images/livingroom/Sofa/Sofa sets/lennarsofa.jpg" ,
        title : "LENNAR SOFA SET ",
        price1: 'PKR:190,000',
        price2: '140,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 224,
location:"LENNARSofa.html"
    },
 
]




// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = livingroom.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let sofaset = document.getElementById('sofa-set')
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
    
    sofaset.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let sofaset = document.getElementById('sofa-set')
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
    
  sofaset.innerHTML = data
    });
    },500)
    
    })
    
    
    
    
    // Original 
    let sofaset = document.getElementById('sofa-set')
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
    
      sofaset.innerHTML = data
    });
    