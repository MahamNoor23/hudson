let bed=[
    {
        img : "images/bedroom/Weddingsets/Amelia  Set/Amelia Bedroom Set.png",
        title : "AMELIA BEDROOM SET",
        price1: 'PKR:350,000',
        price2: '310,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 250,
        location:"Amelia Bedroom Set.html"       

    },
    {
        img : "images/bedroom/Weddingsets/Belinda Bedroom Set/Belinda Bedroom Set.png",
        title : "BELINDA BEDROOM SET",
        price1: 'PKR:380,000',
        price2: '350,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 300,
        location:"Belinda Bedroom Set.html"        

    },
    {
        img : "images/bedroom/Weddingsets/Blanche set/Blanche  Bedroom Set.png",
        title : "BLANCHE BEDROOM SET",
        price1: 'PKR:280,000',
        price2: '200,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 450,
        location:"Blanche  Bedroom Set.html"       

    },
  
    {
        img : "images/bedroom/Weddingsets/Lancer  Set/Lancer  Bedroom Set.png",
        title : "LANCER BEDROOM SET",
        price1: 'PKR:350,000',
        price2: '250,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 290,
        location:"Lancer  Bedroom Set.html"       

    },
    
    {
        img : "images/bedroom/Weddingsets/Tranquil Bedroom Set/Tranquil Bedroom Set.png",
        title : "TRANQUIL BEDROOM SET",
        price1: 'PKR:300,000',
        price2: '240,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 120,
        location:"Tranquil Bedroom Set.html",
                

    },

    {
        img : "images/bedroom/Weddingsets/Victoria set/Victoria Bedroom Set.png",
        title : "VICTORIA BEDROOM SET",
        price1: 'PKR:380,000',
        price2: '300,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 345,
        location:"Victoria Bedroom Set.html" ,
              

    },
    {
        img : "images/bedroom/Weddingsets/Whimsical set/Whimsical  Bedroom Set.png",
        title : "WHIMSICAL BEDROOM SET",
        price1: 'PKR:410,000',
        price2: '350,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 560,
        location:"Whimsical  Bedroom Set.html"

    },
]







// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = bed.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let weddingset = document.getElementById('wedding-set')
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
    
      weddingset.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let weddingset = document.getElementById('wedding-set')
    let data =''
   bed.forEach(e => {
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
    
    weddingset.innerHTML = data
    });
    },500)
    
    })






let weddingset = document.getElementById('wedding-set')
let data =''
bed.forEach(e => {
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

    weddingset.innerHTML = data
});