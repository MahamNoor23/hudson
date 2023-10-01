let dining=[
    {
        img :"images/diningroom/4 persons-ds/Affinity.png" ,
        title : "AFFINITY DINING SET ",
        price1: 'PKR:75,000',
        price2: '60,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 533,
        location:"Affinity 4dt.html"

    },
    {
        img :"images/diningroom/4 persons-ds/Allscore diningset.png" ,
        title : "ALLSCORE DINING SET ",
        price1: 'PKR:69,000',
        price2: '55,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 445,
        location:"Allscore 4diningset.html"

    },
    {
        img :"images/diningroom/4 persons-ds/Amelia Dining Set.png" ,
        title : "AMELIA DINING SET ",
        price1: 'PKR:65,000',
        price2: '52,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 533,
        location:"Amelia 4Dining Set.html"

    },
    {
        img :"images/diningroom/4 persons-ds/Amy diningset.png" ,
        title : "AMY DINING SET ",
        price1: 'PKR:75,000',
        price2: '67,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 321,
        location:"Amy 4diningset.html"

    },
    {
        img :"images/diningroom/4 persons-ds/Barlow Extendable Dining Set.png" ,
        title : "BARLOW EXTENDABLE DINING SET ",
        price1: 'PKR:85,000',
        price2: '76,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 245,
        location:"Barlow Extendable Dining Set.html"

    },
    {
        img :"images/diningroom/4 persons-ds/High Gloss and Chrome Metal Rectangle Dining Table Set.jpg",
        title : "HIGH GLOSS DINING SET ",
        price1: 'PKR:82,000',
        price2: '75,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 155,
        location:"High Gloss and Chrome Metal Rectangle Dining Table Set.html"

    },
    {
        img :"images/diningroom/4 persons-ds/Nassau Street Dining Set.jpg" ,
        title : "NASSAU STREET DINING SET ",
        price1: 'PKR:69,000',
        price2: '62,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 333,
        location:"Nassau Street 4Dining Set.html"

    },
    {
        img :"images/diningroom/4 persons-ds/Poe Extendable Dining Set.jpg" ,
        title : "POE EXTENDABLE DINING SET ",
        price1: 'PKR:75,000',
        price2: '67,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 345,
        location:"Poe Extendable Dining Set.html"

    },
    {
        img :"images/diningroom/4 persons-ds/Privett dining set.jpg",
        title : "PRIVETT DINING SET ",
        price1: 'PKR:75,000',
        price2: '62,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 444,
        location:"Privett 4dining set.html"

    },
    {
        img :"images/diningroom/4 persons-ds/Stoneburner Extendable Dining Set.jpg" ,
        title : "STONEBURNER EXTENDABLE DINING SET ",
        price1: 'PKR:70,000',
        price2: '61,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 245,
        location:"Stoneburner Extendable 4Dining Set.html "

    },
]



// Search 
document.getElementById('search').addEventListener('click',()=>{
    const filter = dining.filter((item) => item.price2.replace(/,/g, '') >= range.value);
    setTimeout(()=>{
    let fourperson = document.getElementById('4person-dt')
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
    
      fourperson.innerHTML = data
    });
    },2900)
    
    
    })
    
    
    // Reset 
    document.getElementById('reset').addEventListener('click',()=>{
    setTimeout(()=>{
    
    let fourperson = document.getElementById('4person-dt')
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
    fourperson.innerHTML = data
    });
    },500)
    
    })






let fourperson = document.getElementById('4person-dt')
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

    fourperson.innerHTML = data
});