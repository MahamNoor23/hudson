let livingroom=[
    {
        img : "images/livingroom/Sofa/3 seater sofa/Anisa 3 Seater Sofa.png" ,
        title : "ANISA THREE SEATER ",
        price1: 'PKR:149,999',
        price2: '145,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 220,

    },
    {
        img : "images/livingroom/Sofa/3 seater sofa/Chesterfield 3 Seater Sofa.png" ,
        title : "CHESTERFIELD THREE SEATER ",
        price1: 'PKR:119,999',
        price2: '115,299',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 456,

    },
    {
        img : "images/livingroom/Sofa/3 seater sofa/Chesterfield Hokh Arm 3 Seater Sofa.png" ,
        title : "CHESTERFIELD HOKH  THREE SEATER ",
        price1: 'PKR:155,999',
        price2: '150,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 220,

    },
    {
        img : "images/livingroom/Sofa/3 seater sofa/Chesterfield Line 3 Seater Sofa.png" ,
        title : "CHESTERFIELD LINE  THREE SEATER ",
        price1: 'PKR:153,999',
        price2: '149,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 545,

    },
    {
        img : "images/livingroom/Sofa/3 seater sofa/Danell Luxury 3 Seater Sofa.png",
        title : "DANELL LUXURY  THREE SEATER ",
        price1: 'PKR:115,999',
        price2: '105,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 135,

    },
    {
        img : "images/livingroom/Sofa/3 seater sofa/Dorian 3 Seater Sofa.png" ,
        title : "DORIAN THREE SEATER ",
        price1: 'PKR:95,999',
        price2: '89,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 234,

    },
    {
        img : "images/livingroom/Sofa/3 seater sofa/Filberta Luxury 3 Seater Sofa.png" ,
        title : "FILBERTA LUXURY  THREE SEATER ",
        price1: 'PKR:105,999',
        price2: '95,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 220,

    },
    {
        img : "images/livingroom/Sofa/3 seater sofa/High back 3 seater sofa.png" ,
        title : "FILBERTA LUXURY  THREE SEATER ",
        price1: 'PKR:85,999',
        price2: '76,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 345,

    },
    {
        img : "images/livingroom/Sofa/3 seater sofa/Italian Line 3 Seater Sofa.png" ,
        title : "ITALIAN LINE  THREE SEATER ",
        price1: 'PKR:95,999',
        price2: '87,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 455,

    },
    {
        img : "images/livingroom/Sofa/3 seater sofa/Ava 3 Seater Sofa.png" ,
        title : "AVA THREE SEATER ",
        price1: 'PKR:91,999',
        price2: '83,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 555,

    },
    {
        img : "images/livingroom/Sofa/3 seater sofa/Bubble 3 Seater Sofa.png",
        title : "BUBBLE THREE SEATER ",
        price1: 'PKR:95,999',
        price2: '87,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 455,

    },
]






// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = livingroom.filter((item) => +item.price2.replace(/,/g, '') >= +range.value);
    setTimeout(()=>{
    let threeseatersofa = document.getElementById('3 seater-set')
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
    
    threeseatersofa.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let threeseatersofa = document.getElementById('3 seater-set')
    let data =''
    livingroom.forEach(e => {
    data += `
    
    <div class="col-lg-4 col-md-6 d-flex justify-content-center  text-center mt-5 ">
    <a href="${e.location}" class='anchor'>
    <div class="card "  style="width: 18rem;">
    <div class="img">
    <img src="${e.img}"class="card-img-top " alt="..." height="250px" >
    </div> >
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
    
 threeseatersofa.innerHTML = data
    });
    },500)
    
    })
    
    
    
    
    // Original 
    let threeseatersofa = document.getElementById('3 seater-set')
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
    threeseatersofa.innerHTML = data
    });
    