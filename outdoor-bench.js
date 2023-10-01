let outdoor=[
    {
        img :"images/outdoor/Seating&tables/benches/Amelia Outdoor Bench.png" ,
        title : "AMELIA OUTDOOR BENCH",
        price1: 'PKR:55,000',
        price2: 'PKR:42,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 422,

    },
    {
        img :"images/outdoor/Seating&tables/benches/Byington Acacia Outdoor Bench.png",
        title : "BYINGTON ACACIA OUTDOOR BENCH",
        price1: 'PKR:49,000',
        price2: 'PKR:39,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 521,

    },
    {
        img :"images/outdoor/Seating&tables/benches/Caryn Metal Outdoor Bench.png" ,
        title : "CARYN METAL OUTDOOR BENCH",
        price1: 'PKR:39,000',
        price2: 'PKR:30,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 231,

    },
    {
        img :"images/outdoor/Seating&tables/benches/Etchison Metal Outdoor Bench.png" ,
        title : "ETCHISON METAL OUTDOOR BENCH",
        price1: 'PKR:42,000',
        price2: 'PKR:36,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 367,

    },
    {
        img :"images/outdoor/Seating&tables/benches/Eucalyptus Outdoor Bench.jpg"  ,
        title : "EUCALYPTUS OUTDOOR BENCH",
        price1: 'PKR:52,000',
        price2: 'PKR:44,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 133,

    },
    {
        img :"images/outdoor/Seating&tables/benches/Lundberg Metal Outdoor Bench.png" ,
        title : "LUNDBERG METAL OUTDOOR BENCH",
        price1: 'PKR:38,000',
        price2: 'PKR:30,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 356,

    },
    {
        img :"images/outdoor/Seating&tables/benches/Metal Outdoor Bench.png" ,
        title : "METAL OUTDOOR BENCH",
        price1: 'PKR:39,900',
        price2: 'PKR:30,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 223,

    },
    {
        img :"images/outdoor/Seating&tables/benches/Olmstead Fir Outdoor Bench.png" ,
        title : "OLMSTEAD FIR OUTDOOR BENCH",
        price1: 'PKR:42,000',
        price2: 'PKR:34,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 256,

    },
    {
        img :"images/outdoor/Seating&tables/benches/Pettit Metal Outdoor Bench.png" ,
        title : "PETTIT METAL OUTDOOR BENCH",
        price1: 'PKR:45,000',
        price2: 'PKR:37,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 345,

    },
    {
        img :"images/outdoor/Seating&tables/benches/Schank Teak Outdoor Bench.png" ,
        title : "SCHANK TEAK OUTDOOR BENCH",
        price1: 'PKR:49,000',
        price2: 'PKR:40,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 278,

    },
    {
        img :"images/outdoor/Seating&tables/benches/Yacht Club Outdoor Bench.png" ,
        title : "YACHT CLUB OUTDOOR BENCH",
        price1: 'PKR:52,000',
        price2: 'PKR:44,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 433,

    },
]








let outdoorbench = document.getElementById('outdoor-bench')
let data =''
outdoor.forEach(e => {
    data += `
    
    <div class="col-lg-4 col-md-6 d-flex justify-content-center  text-center mt-5 ">
    <a href="" class='anchor'>
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
          <a href="" class='anchor'>ADD TO CART</a>
        </div>
      </div>
    </a>
    </div>
    `

    outdoorbench.innerHTML = data
});