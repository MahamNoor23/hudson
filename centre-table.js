let livingroom=[
    {
        img : "images/livingroom/Tables/Center table/Aperçu Marble Center Table.png" ,
        title : "APERCU MARBLE CENTRE TABLE ",
        price1: 'PKR:90,000',
        price2: '75,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 345,
location:"Aperçu Marble Center Table.html"
    },
    {
        img : "images/livingroom/Tables/Center table/crestbolt centre table.webp" ,
        title : "CRESTBOLT CENTRE TABLE ",
        price1: 'PKR:98,000',
        price2: '91,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 199,
location:"crestbolt centre table.html"
    },
    {
        img : "images/livingroom/Tables/Center table/Ashford centre table.png",
        title : "ASHFORD CENTRE TABLE ",
        price1: 'PKR:80,000',
        price2: '72,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 455,
location:"Ashford centre table.html"
    },
    {
        img : "images/livingroom/Tables/Center table/Opera Marble Center Table.png" ,
        title : "OPERA MARBLE CENTRE TABLE ",
        price1: 'PKR:99,000',
        price2: '93,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 566,
location:"Opera Marble Center Table.html"
    },
    {
        img : "images/livingroom/Tables/Center table/ELEXIS Center Table.png" ,
        title : "ELEXIS CENTRE TABLE ",
        price1: 'PKR:92,000',
        price2: '81,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 322,
location:"ELEXIS Center Table.html"
    },
    {
        img :"images/livingroom/Tables/Center table/Ottoman Centre Table.png" ,
        title : "OTTOMAN CENTRE TABLE ",
        price1: 'PKR:80,000',
        price2: '65,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 522,
location:"Ottoman Centre Table.html"
    },
    {
        img : "images/livingroom/Tables/Center table/Estroil Luxury Center Table.png" ,
        title : "ESTROIL LUXURY CENTRE TABLE ",
        price1: 'PKR:90,000',
        price2: '75,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 220,
location:"EstroilLuxury Center Table.html"
    },
    {
        img :"images/livingroom/Tables/Center table/Exus Snowrock White Centre Table.png" ,
        title : "EXUS SNOWROCK CENTRE TABLE ",
        price1: 'PKR:92,000',
        price2: '80,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 666,
location:"Exus Snowrock White Centre Table.html"
    },
    {
        img : "images/livingroom/Tables/Center table/Hazel Center Table.png" ,
        title : "HAZEL CENTRE TABLE ",
        price1: 'PKR:99,000',
        price2: '94,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 399,
location:"Hazel Center Table.html"
    },
   
   
    
   

]

// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = livingroom.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let centretable = document.getElementById('centre-table')
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
    
      centretable.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let centretable = document.getElementById('centre-table')
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
    
    centretable.innerHTML = data
    });
    },500)
    
    })
    







let centretable = document.getElementById('centre-table')
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

    centretable.innerHTML = data
});