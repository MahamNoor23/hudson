let dining=[
    {
        img :"images/diningroom/Dinning-tables/Ablo Dining Table.png",
        title : "ABLO DINING TABLE ",
        price1: 'PKR:30,000',
        price2: '15,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 231,
        location:"Ablo Dining Table.html"

    },
    {
        img :"images/diningroom/Dinning-tables/Altamae dining table.png",
        title : "ALTAMAE DINING TABLE ",
        price1: 'PKR:35,000',
        price2: '25,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 128,
        location:"Altamae dining table.html"

    },
    {
        img :"images/diningroom/Dinning-tables/Angelisha dining table.png" ,
        title : "ANGELISHA DINING TABLE ",
        price1: 'PKR:30,000',
        price2: '20,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 342,
        location:"Angelisha dining table.html"

    },
    {
        img :"images/diningroom/Dinning-tables/Armonnie dining table.png" ,
        title : "ARMONNIE DINING TABLE ",
        price1: 'PKR:25,000',
        price2: '17,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 311,
        location:"Armonnie dining table.html"

    },
    {
        img :"images/diningroom/Dinning-tables/Ashneel dining table.png" ,
        title : "ASHNEEL TABLE ",
        price1: 'PKR:33,000',
        price2: '24,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 244,
        location:"Ashneel dining table.html"

    },
    {
        img :"images/diningroom/Dinning-tables/Astraea dining table.png",
        title : "ASTRAEA DINING TABLE ",
        price1: 'PKR:39,999',
        price2: '30,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 421,
        location:"Astraea dining table.html"

    },
    {
        img :"images/diningroom/Dinning-tables/Atlanta dining table.jpg" ,
        title : "ATLANA DINING TABLE ",
        price1: 'PKR:30,000',
        price2: '20,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 188,
        location:"Atlanta dining table.html"

    },
    {
        img :"images/diningroom/Dinning-tables/Cumbria Aspen dining table .png",
        title : "CUMBRIA ASPEN DINING TABLE ",
        price1: 'PKR:36,000',
        price2: '28,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 321,
        location:"Cumbria Aspen dining table.html"

    },
    {
        img :"images/diningroom/Dinning-tables/Dag dining table.png" ,
        title : "DAG DINING TABLE ",
        price1: 'PKR:33,000',
        price2: '26,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 378,
        location:"Dag dining table.html"

    },
]

// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = dining.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let dining = document.getElementById('dining-table')
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
    
      diningtable.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let diningtable = document.getElementById('dining-table')
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
    
    diningtable.innerHTML = data
    });
    },500)
    
    })






let diningtable = document.getElementById('dining-table')
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

    diningtable.innerHTML = data
});