let livingroom=[
    {
        img : "images/livingroom/Tables/Coffee-tables/Ashlore coffee table.png" ,
        title : "ASHLORE COFFEE TABLE ",
        price1: 'PKR:99,999',
        price2: '85,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 320,
        location:"Ashlore coffee table.html"

    },
    {
        img : "images/livingroom/Tables/Coffee-tables/Estroil Luxury Center Table.png" ,
        title : "ESTROIL LUXURY COFFEE TABLE ",
        price1: 'PKR:89,999',
        price2: '77,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 432,
 location:"Estroil Luxury Center Table.html"
    },

    {
        img : "images/livingroom/Tables/Coffee-tables/Iris Coffee Table.png" ,
        title : "IRIS COFFEE TABLE ",
        price1: 'PKR:66,999',
        price2: '55,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 241,
 location:"Iris Coffee Table.html"
    },
    {
        img : "images/livingroom/Tables/Coffee-tables/Jesolo Wooden Coffee table.png" ,
        title : "JESOLO WOODEN COFFEE TABLE ",
        price1: 'PKR:50,000',
        price2: '39,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 545,
 location:"Jesolo Wooden Coffee table.html"
    },
    {
        img : "images/livingroom/Tables/Coffee-tables/Piers Coffee Table.png" ,
        title : "PIERS COFFEE TABLE ",
        price1: 'PKR:70,000',
        price2: '65,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
         reviews: 244,
         location:"Piers Coffee Table.html"
    },
    {
        img : "images/livingroom/Tables/Coffee-tables/Radius Round Coffee Table.png" ,
        title : "RADIUS ROUND COFFEE COFFEE TABLE ",
        price1: 'PKR:89,999',
        price2: '81,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 356,
 location:"Radius Round Coffee Table.html"
    },
    {
        img : "images/livingroom/Tables/Coffee-tables/Richer Coffee Table.png" ,
        title : "RICHER COFFEE COFFEE TABLE ",
        price1: 'PKR:75,999',
        price2: '69,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 545,
 location:"Richer Coffee Table.html"
    },
    {
        img : "images/livingroom/Tables/Coffee-tables/Zardoni Coffee table.png.jpg" ,
        title : "RADIUS ROUND COFFEE COFFEE TABLE ",
        price1: 'PKR:99,999',
        price2: '91,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 345,
 location:"Zardoni Coffee table.html"
    },
]

// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = livingroom.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let coffeetable = document.getElementById('coffee-table')
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
    
      coffeetable.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let coffeetable = document.getElementById('coffee-table')
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
    
    coffeetable.innerHTML = data
    });
    },500)
    
    })
    







let coffeetable = document.getElementById('coffee-table')
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

    coffeetable.innerHTML = data
});