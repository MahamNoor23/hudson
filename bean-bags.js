let livingroom=[
    {
        img :"images/livingroom/Chairs/Bean bags/Classic Bean Bag Chair.png" ,
        title : "CLASSIC BEAN BAG CHAIR",
        price1: 'PKR:23,000',
        price2: '16,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 422,
location:"Classic Bean Bag Chair.html"
    },
    {
        img :"images/livingroom/Chairs/Bean bags/Classic Refillable Bean Bag Chair.png" ,
        title : "CLASSIC REFILLABLE BEAN BAG CHAIR",
        price1: 'PKR:28,000',
        price2: '21,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 354,
location:"Classic Refillable Bean Bag Chair.html"
    },
    {
        img :"images/livingroom/Chairs/Bean bags/Imperial Bean Bag.png" ,
        title : "IMPERIAL BEAN BAG CHAIR",
        price1: 'PKR:23,999',
        price2: '16,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 422,
location:"Imperial Bean Bag.png.html"
    },
    {
        img :"images/livingroom/Chairs/Bean bags/Intex Classic Beanless Bag Chair.png",
        title : "INTEX CLASSIC BEAN BAG CHAIR",
        price1: 'PKR:26,500',
        price2: '19,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 455,
location:"Intex Classic Beanless Bag Chair.html"
    },
    {
        img :"images/livingroom/Chairs/Bean bags/Large Bean Bag Chair.png" ,
        title : "LARGE BEAN BAG CHAIR",
        price1: 'PKR:29,999',
        price2: '24,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 233,
location:"Large Bean Bag Chair.png.html"
    },
    {
        img :"images/livingroom/Chairs/Bean bags/Milano Bean Bag Chair.png" ,
        title : "MILANO BEAN BAG CHAIR",
        price1: 'PKR:24,000',
        price2: '17,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 145,
location:"Milano Bean Bag Chair.html"
    },
    {
        img :"images/livingroom/Chairs/Bean bags/Milano Super Soft Faux Fur Bean Bag Chair.png" ,
        title : "SUPER SOFT FAUR FUR BEAN BAG CHAIR",
        price1: 'PKR:28,999',
        price2: '22,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 321,
location:"Milano Super Soft Faux Fur Bean Bag Chair.html"
    },
    {
        img :"images/livingroom/Chairs/Bean bags/Milano Vegan Leather Bean Bag.png"  ,
        title : "VEGAN LEATHER BEAN BAG CHAIR",
        price1: 'PKR:27,999',
        price2: '20,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 244,
location:"Milano Vegan Leather Bean Bag.html"
    },
    {
        img :"images/livingroom/Chairs/Bean bags/Standard Classic Bean Bag.png" ,
        title : " STANDARD CLASSIC BEAN BAG CHAIR",
        price1: 'PKR:23,000',
        price2: '15,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 322,
location:"Standard Classic Bean Bag.html"
    },
    {
        img :"images/livingroom/Chairs/Bean bags/Teddy Faux Fur Bean Bag Chair.png" ,
        title : "TEDDY FAUR FUR BEAN BAG CHAIR",
        price1: 'PKR:30,000',
        price2: '24,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 122,
location:"Teddy Faux Fur Bean Bag Chair.html"
    },
    {
        img :"images/livingroom/Chairs/Bean bags/Vinyl Outdoor Bean Bag chair.png" ,
        title : "VINYL  BEAN BAG CHAIR",
        price1: 'PKR:23,999',
        price2: '17,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 522,
location:"Vinyl Outdoor Bean Bag chair.html"
    },
 
]

// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = livingroom.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let beanbags = document.getElementById('bean-bags')
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
              <i class="${e.s2}"></i>
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
    
      beanbags.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let beanbags = document.getElementById('bean-bags')
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
            <i class="${e.s2}"></i>
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
    
    beanbags.innerHTML = data
    });
    },500)
    
    })
    








let beanbags = document.getElementById('bean-bags')
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
            <i class="${e.s2}"></i>
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

    beanbags.innerHTML = data
});