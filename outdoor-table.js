let outdoor=[
    {
        img :"images/outdoor/Seating&tables/tables/Anteus Concrete Outdoor Side Table.png" ,
        title : "ANTEUS CONCRETE OUTDOOR SIDE TABLE",
        price1: 'PKR:29,000',
        price2: 'PKR:20,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 133,

    },
    {
        img :"images/outdoor/Seating&tables/tables/Broadi Teak Outdoor Side Table.png"  ,
        title : "BROADI TEAK OUTDOOR SIDE TABLE",
        price1: 'PKR:25,000',
        price2: 'PKR:16,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 233,

    },
    {
        img :"images/outdoor/Seating&tables/tables/Kassiopeia Outdoor Coffee Table.png" ,
        title : "KASSIOPEIA OUTDOOR COFFEE TABLE",
        price1: 'PKR:21,000',
        price2: 'PKR:13,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 311,

    },
    {
        img :"images/outdoor/Seating&tables/tables/Melissus Outdoor Side Table.png" ,
        title : "MELISSUS OUTDOOR SIDE TABLE",
        price1: 'PKR:22,000',
        price2: 'PKR:18,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 243,

    },
    {
        img :"images/outdoor/Seating&tables/tables/Mulkey Teak Outdoor Side Table.png" ,
        title : "MULKEY TEAK OUTDOOR SIDE TABLE",
        price1: 'PKR:23,000',
        price2: 'PKR:16,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 267,

    },
    {
        img :"images/outdoor/Seating&tables/tables/Salvo Outdoor Side Table.png" ,
        title : "SALVO OUTDOOR SIDE TABLE",
        price1: 'PKR:25,000',
        price2: 'PKR:20,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 211,

    },
    {
        img :"images/outdoor/Seating&tables/tables/Voy Metal Outdoor Side Table.png",
        title : "VOY METAL OUTDOOR SIDE TABLE",
        price1: 'PKR:19,000',
        price2: 'PKR:11,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 322,

    },
    {
        img :"images/outdoor/Seating&tables/tables/Wicker Rattan Side Table.png"  ,
        title : "WICKER RATTAN OUTDOOR SIDE TABLE",
        price1: 'PKR:30,000',
        price2: 'PKR:24,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 345,

    },
  
]




let outdoortable = document.getElementById('outdoor-table')
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
            <i class="${e.s3}"></i>
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

    outdoortable.innerHTML = data
});