let livingroom=[
    {
        img :"images/livingroom/Storage/book-sleves/Amy Bookshelf.png"  ,
        title : "AMY  BOOKSHELF ",
        price1: 'PKR:25,000',
        price2: '20,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 220,
        location:"Amy Bookshelf.html"

    },
    {
        img :"images/livingroom/Storage/book-sleves/Candy Storage Unit.png" ,
        title : "CANDY STORAGE UNIT ",
        price1: 'PKR:27,000',
        price2: '22,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 123,
location:"Candy Storage Unit.html"
    },
    {
    img : "images/livingroom/Storage/book-sleves/Diego Book Shelf.jpg"  ,
    title : "DIEGO BOOK  SHELF ",
    price1: 'PKR:25,000',
    price2: '20,000',
    s1: "fa-solid fa-star",
    s2: "fa-solid fa-star-half-stroke",
    s3:'fa-regular fa-star',
    reviews: 133,
location:"Diego Book Shelf.html"
},
   

    {
        img : "images/livingroom/Storage/book-sleves/Enderlin Wall Rack.png"  ,
        title : "ENDERLIN WALL RACK ",
        price1: 'PKR:25,000',
        price2: '20,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 133,
location:"Enderlin Wall Rack.html"
    },
   
    {
        img : "images/livingroom/Storage/book-sleves/Fantell Corner Shelf.png" ,
        title : "FANTELL CORNER SHELF ",
        price1: 'PKR:19,000',
        price2: '15,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 322,
location:"Fantell Corner Shelf.html"
    },
    {
        img : "images/livingroom/Storage/book-sleves/Fazani Display Shelf.png",
        title : "FAZANI DISPLAY SHELF ",
        price1: 'PKR:25,000',
        price2: '20,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 221,
location:"Fazani Display Shelf.html"
    },
    {
        img : "images/livingroom/Storage/book-sleves/Hamlyn Three Tier Book Shelf.png"  ,
        title : "HAMLYN THREE TIER BOOK SHELF ",
        price1: 'PKR:27,000',
        price2: '23,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 124,
location:"Hamlyn Three Tier Book Shelf.html"
    },
    {
        img : "images/livingroom/Storage/book-sleves/Moderne Bookshelf.png"  ,
        title : "MODERNE BOOK SHELF ",
        price1: 'PKR:25,000',
        price2: '19,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 432,
location:"Moderne Bookshelf.html"
    },
    {
        img :"images/livingroom/Storage/book-sleves/Monaghan Wall Rack.png"   ,
        title : "MONAGHAN WALL RACK ",
        price1: 'PKR:25,000',
        price2: '22,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 144,
location:"Monaghan Wall Rack.html"
    },
   
 
    
   
    
]

// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = livingroom.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let bookshelves = document.getElementById('bookshelves')
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
    
      bookshelves.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let bookshelves = document.getElementById('bookshelves')
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
    
    bookshelves.innerHTML = data
    });
    },500)
    
    })






let bookshelves = document.getElementById('bookshelves')
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

    bookshelves.innerHTML = data
});