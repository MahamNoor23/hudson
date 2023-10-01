let dining=[
    {
        img :"images/diningroom/Trollyes/Wooden-tea trolleys/Diana solid wood tea trolley.jpg"  ,
        title : "DIANA SOLID WOOD TEA TROLLEY ",
        price1: 'PKR:27,000',
        price2: '20,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 422,
        location:"Diana solid wood tea trolley.html"

    },
    {
        img :"images/diningroom/Trollyes/Wooden-tea trolleys/Duchess Hand Carved Tea Trolley.jpg" ,
        title : "DUCHES HAND CARVED TEA TROLLEY ",
        price1: 'PKR:29,000',
        price2: '22,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 522,
        location:"Duchess Hand Carved Tea Trolley.html"

    },
    {
        img :"images/diningroom/Trollyes/Wooden-tea trolleys/Maharaj Hand Carved Tea Trolley.jpg"  ,
        title : "MAHARAJ HAND CARVED TEA TROLLEY ",
        price1: 'PKR:32,000',
        price2: '25,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 422,
        location:"Maharaj Hand Carved Tea Trolley.html"

    },
    {
        img :"images/diningroom/Trollyes/Wooden-tea trolleys/Pebblo hand carved tea trolley.jpg"  ,
        title : "PEBBLO HAND CARVED TEA TROLLEY ",
        price1: 'PKR:28,000',
        price2: '21,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 422,
        location:"Pebblo hand carved tea trolley.html"

    },
    {
        img :"images/diningroom/Trollyes/Wooden-tea trolleys/Solid wood handcarved tea trolley.jpg"  ,
        title : "SOLID WOOD HAND CARVED TEA TROLLEY ",
        price1: 'PKR:32,000',
        price2: 'PKR:26,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 211,
        location:"Solid wood handcarved tea trolley.html"

    },
    {
        img :"images/diningroom/Trollyes/Wooden-tea trolleys/Solid Wood Mesh Tea Trolley.jpg"  ,
        title : "SOLID WOOD MESH TEA TROLLEY ",
        price1: 'PKR:34,000',
        price2: '29,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 354,
        location:"Solid Wood Mesh Tea Trolley.html"

    },
    {
        img :"images/diningroom/Trollyes/Wooden-tea trolleys/Tia Mesh 3 Tier Tea Trolley.jpg"  ,
        title : "TIA MESH 3 TIER TEA TROLLEY ",
        price1: 'PKR:23,000',
        price2: '18,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 276,
        location:"Tia Mesh 3 Tier Tea Trolley.html"

    },
]









// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = dining.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let diningchairs = document.getElementById('wooden-teatrolley')
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
    
      woodenteatrolley.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let woodenteatrolley = document.getElementById('wooden-teatrolley')
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
    woodenteatrolley.innerHTML = data
    });
    },500)
    
    })






let woodenteatrolley = document.getElementById('wooden-teatrolley')
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

    woodenteatrolley.innerHTML = data
});