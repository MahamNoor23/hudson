let bed = [
    {
        img : "images/bedroom/beds/Bedsets/AmrozeKingBedroomSet/Amroze King Bedroom Set.png.png",
        title : "AMROZE BED SET",
        price1: 'PKR:250,000',
        price2: '200,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 50,
        location:" amroz-bs.html"

    },
    {
        img :"images/bedroom/beds/Bedsets/Blanche King Bedroom Set/Blanche King Bedroom Set.png.png"
        ,
        title : "BLANCHE KING BED SET",
        price1: 'PKR:250,000',
        price2: '180,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 170,
        location:"Blanche King Bedroom Set.html"
        
        
    },
    
    {
        img :"images/bedroom/beds/Bedsets/Crescent Quest King Size Bed Set/Crescent Quest King Size Bed Set.png.jpg"
        ,
        title : "CRESCENT QUEST BED SET",
        price1: 'PKR:250,000',
        price2: '210,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 90,
        location:"Crescent Quest King Size Bed Set.png.html"
        
    },
    
    {
        img :"images/bedroom/beds/Bedsets/Cresta Grand King Size Bed Set/cresta_bed_set.png.jpg"
        ,
        title : "CRESTA KING BED SET",
        price1: 'PKR:230,000',
        price2: '170,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 150,
        location:"cresta_bed_set.html"
        
    },
    
    {
        img :"images/bedroom/beds/Bedsets/Fresco King Size Bed Set/Fresco King Size Bed Set.png.png"
        ,
        title : "FRESCO KING BED SET",
        price1: 'PKR:240,000',
        price2: '220,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 120,
       location:"Fresco King Size Bed Set.html" 


    },
    {
        img :"images/bedroom/beds/Bedsets/Nelson King Size Bed Set/Nelson King Size Bed Set.png.jpg"
        ,
        title : "NELSON KING BED SET",
        price1: 'PKR:300,000',
        price2: '280,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 200,
      location:"Nelson King Size Bed Set.html"


    },
    {
        img :"images/bedroom/beds/Bedsets/Oliver King Size Bed Set/oliver king size bed.png.jpg"
        ,
        title : "OLIVER KING BED SET",
        price1: 'PKR:280,000',
        price2: '230,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 250,
       location:"oliver king size bed.html" 


    },
    {
        img :"images/bedroom/beds/Bedsets/Savannah King Size Bed Set/Savannah .png.jpg"
        ,
        title : "SAVANNAH KING BED SET",
        price1: 'PKR:350,000',
        price2: '300,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 350,
      location:"Savannah-bed-set.html "


    },
    {
        img :"images/bedroom/beds/Bedsets/Sydney King Size Bed Set/sydney-bed-set.png"
        ,
        title : "SYDNEY KING BED SET",
        price1: 'PKR:300,000',
        price2: '270,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 390,
       
location:"sydney-bed-set.html"

    },
    
    
    

]

// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = bed.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let bedsets = document.getElementById('bed-sets')
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
    
      bedsets.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let bedsets = document.getElementById('bed-sets')
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
    
    bedsets.innerHTML = data
    });
    },500)
    
    })






let bedsets = document.getElementById('bed-sets')
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
            <i class="${e.s2}"></i>
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

    bedsets.innerHTML = data
});