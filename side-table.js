let livingroom=[
    {
        img : "images/livingroom/Tables/side _ end table/Chelsea Side Table.png" ,
        title : "CHELSEA SIDE TABLE ",
        price1: 'PKR:25,000',
        price2: '20,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 220,
location:"Chelsea Side Table.html"
    },
    {
        img : "images/livingroom/Tables/side _ end table/Cresta Grand Side Table.png" ,
        title : "CRESTA SIDE TABLE ",
        price1: 'PKR:22,000',
        price2: '17,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 334,
location:"Cresta Grand Side Table.html"
    },
    {
        img : "images/livingroom/Tables/side _ end table/Fusion Side Table.png" ,
        title : "FUSHION SIDE TABLE ",
        price1: 'PKR:27,000',
        price2: '22,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 452,
location:"Fusion Side Table.html"
    },
    {
        img : "images/livingroom/Tables/side _ end table/Omega Side Table.png" ,
        title : "OMEGA SIDE TABLE ",
        price1: 'PKR:25,000',
        price2: '20,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 220,
location:"Omega Side Table.html"
    },
    {
        img : "images/livingroom/Tables/side _ end table/Ozone 2.0 Side Table.png" ,
        title : "OZONE SIDE TABLE ",
        price1: 'PKR:22,000',
        price2: '15,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 220,
location:"Ozone 2.0 Side Table.html"
    },
    {
        img : "images/livingroom/Tables/side _ end table/Sage Side Table.png"  ,
        title : "SAGE SIDE TABLE ",
        price1: 'PKR:29,000',
        price2: '22,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 354,
location:"Sage Side Table.html"
    },
    {
        img : "images/livingroom/Tables/side _ end table/Side Table Antico.png" ,
        title : "ANTICO SIDE TABLE ",
        price1: 'PKR:30,000',
        price2: '24,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 135,
location:"Side Table Antico.html"
    },
    {
        img : "images/livingroom/Tables/side _ end table/Side Table Cassandra.png"  ,
        title : "CASSANDRA SIDE TABLE ",
        price1: 'PKR:32,000',
        price2: '28,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 232,
location:"Side Table Cassandra.html"
    },
    {
        img :"images/livingroom/Tables/side _ end table/Side Table Colombo.png"  ,
        title : "COLOMBO SIDE TABLE ",
        price1: 'PKR:35,000',
        price2: '29,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 231,
location:"Side Table Colombo.html"
    },
  
]






// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = livingroom.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let sidetable = document.getElementById('side-table')
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
    
      sidetable.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let sidetable = document.getElementById('side-table')
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
    
    sidetable.innerHTML = data
    });
    },500)
    
    })
    







let sidetable = document.getElementById('side-table')
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

    sidetable.innerHTML = data
});