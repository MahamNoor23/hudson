let storage=[
    {
        img : "images/bedroom/storage/dressin-table/BELEK- Dresser.png" ,
        title : "BELEK  DRESSING TABLE ",
        price1: 'PKR:86,000',
        price2: 'PKR:70,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 350,
        location:"BELEK.html"

    },
    
    {
        img : "images/bedroom/storage/dressin-table/DECO - Dresser.png" ,
        title : "DECO DRESSING TABLE ",
        price1: 'PKR:87,000',
        price2: 'PKR:72,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 310,
        location:"DECO.html"

    },
    {
        img : "images/bedroom/storage/dressin-table/EMİRGAN - Dresser.png" ,
        title : "EMIRGAN DRESSING TABLE ",
        price1: 'PKR:95,000',
        price2: 'PKR:77,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 243,
        location:"EMİRGAN.html"

    },
    {
        img : "images/bedroom/storage/dressin-table/FLORYA - Dresser.png" ,
        title : "FLORYA DRESSING TABLE ",
        price1: 'PKR:80,000',
        price2: 'PKR:65,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 350,
        location:"FLORYA.html"

    },
    {
        img : "images/bedroom/storage/dressin-table/Lİzbon - Dresser.png" ,
        title : "LIZBON DRESSING TABLE ",
        price1: 'PKR:95,000',
        price2: 'PKR:75,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 130,
        location:"Lİzbon.html"

    },
    {
        img : "images/bedroom/storage/dressin-table/NIRVANA - Dresser.png" ,
        title : "NIRVANA DRESSING TABLE ",
        price1: 'PKR:80,000',
        price2: 'PKR:65,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 250,
        location:"NIRVANA.html"

    },
  
    {
        img : "images/bedroom/storage/dressin-table/ZIRKON - Dresser.png" ,
        title : "ZIRKON DRESSING TABLE ",
        price1: 'PKR:80,000',
        price2: 'PKR:50,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 550,
        location:"ZIRKON.html"

    },
]




// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = storage.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let  dressingtable = document.getElementById(' dressing-table')
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
    
      dressingtable.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let  dressingtable= document.getElementById(' dressing-table')
    let data =''
    storage.forEach(e => {
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
    
    dressingtable.innerHTML = data
    });
    },500)
    
    })
    
    
    
    
    // Original 
    let  dressingtable = document.getElementById(' dressing-table')
    let data =''
    storage.forEach(e => {
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
    
      dressingtable.innerHTML = data
    });