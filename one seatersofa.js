let livingroom=[
    {
        img : "images/livingroom/Sofa/1 seater sofa/Carlton 1seater.png" ,
        title : "CARLTON ONE SEATER ",
        price1: 'PKR:32,000',
        price2: '25,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 250,
        location:"Carltonone.html"

    },
    {
        img : "images/livingroom/Sofa/1 seater sofa/Dolans Armchair.png",
        title : "DOLANS ARMCHAIR ",
        price1: 'PKR:34,000',
        price2: '30,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 227,
location:"Dolansone.html"
    },
    {
        img : "images/livingroom/Sofa/1 seater sofa/Lola chair.jpg",
        title : "LOLA ONE SEATER ",
        price1: 'PKR:20,000',
        price2: '15,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 123,
location:"Lolaone.html"
    },
    {
        img : "images/livingroom/Sofa/1 seater sofa/Missy Armchair.png" ,
        title : "MISSY ARMCHAIR ",
        price1: 'PKR:39,999',
        price2: '35,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 450,
location:"Missyone.html"
    },
    {
        img : "images/livingroom/Sofa/1 seater sofa/Nina Armchair.png" ,
        title : "NINA ARMCHAIR",
        price1: 'PKR:29,999',
        price2: '25,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
     reviews: 250,
     location:"Ninaone.html" 

    },
    {
        img : "images/livingroom/Sofa/1 seater sofa/Ruby Armchair.jpg" ,
        title : "CARLTON ONE SEATER ",
        price1: 'PKR:22,999',
        price2: '20,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 377,
location:"Rubyone.html"
    },
    {
        img : "images/livingroom/Sofa/1 seater sofa/Wing Armchair.png" ,
        title : "WING ARMCHAIR ",
        price1: 'PKR:35,999',
        price2: '31,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 250,
location:"Wingone.html"
    },
    {
        img : "images/livingroom/Sofa/1 seater sofa/Carlton .png" ,
        title : "CARLTON  ",
        price1: 'PKR:22,999',
        price2: '19,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 340,
location:"Carltononeseater.html"
    },{
    img : "images/livingroom/Sofa/1 seater sofa/Hester Sofa 1 Seater.png" ,
        title : "HESTER ONE SEATER ",
        price1: 'PKR:38,999',
        price2: '35,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 243,
  location:"Hesternone.html" 
    },
    {
        img : "images/livingroom/Sofa/1 seater sofa/Sofa Kessel Single Seater.png",
        title : "KESSEL ONE SEATER ",
        price1: 'PKR:38,999',
        price2: '33,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 356,
  location:"Kesselnone.html" 
    },
    {
        img : "images/livingroom/Sofa/1 seater sofa/Sofa Cooper 1 Seater.png" ,
        title : "COOPER ONE SEATER ",
        price1: 'PKR:50,999',
        price2: '45,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 215,
  location:"Coopernone.html" 
    },
    {
        img : "images/livingroom/Sofa/1 seater sofa/Sofa Noble Single Seater.png" ,
        title : "NOBLE SINGLE SEATER ",
        price1: 'PKR:54,999',
        price2: '48,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 243,
location:"Noblenone.html"
    },
]

// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = livingroom.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let oneseatersofa = document.getElementById('one seater-sofa')
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
    
      oneseatersofa.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let oneseatersofa = document.getElementById('one seater-sofa')
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
    
    oneseatersofa.innerHTML = data
    });
    },500)
    
    })
    
    
    
    
    // Original 
    let oneseatersofa = document.getElementById('one seater-sofa')
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
    
      oneseatersofa.innerHTML = data
    });
    