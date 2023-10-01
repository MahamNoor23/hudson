let decor=[
    {
        img : "images/bedroom/decor/Wall mirrors/Afrasian Round Mirror.png" ,
        title : "AFRASIAN ROUND MIRROR ",
        price1: 'PKR:10,000',
        price2: 'PKR:8,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 50,
        location:"Afrasian.html"

    },
    {
        img : "images/bedroom/decor/Wall mirrors/Azure Mirror.png" ,
        title : "AZURE MIRROR ",
        price1: 'PKR:12,000',
        price2: 'PKR:9,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 350,
        location:"Azure.html"

    },
    {
        img : "images/bedroom/decor/Wall mirrors/Bedroom Wall Mirror.png" ,
        title : "BEDROOM WALL MIRROR ",
        price1: 'PKR:11,999',
        price2: 'PKR:8,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 380,
        location:"BedroomWall.html"

    },
    {
        img : "images/bedroom/decor/Wall mirrors/Beveled Wall Mirror.png"  ,
        title : "BEVELED WALL MIRROR ",
        price1: 'PKR:10,000',
        price2: 'PKR:7,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 330,
        location:"Beveled.html"

    },
    {
        img : "images/bedroom/decor/Wall mirrors/Elegant Wall Mirror.png",
        title : "ELEGANT WALL MIRROR ",
        price1: 'PKR:11,599',
        price2: 'PKR:8,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 132,
        location:"Elegantwall.html"

    },
    {
        img : "images/bedroom/decor/Wall mirrors/Fin Mirror.png" ,
        title : "FIN MIRROR ",
        price1: 'PKR:13,999',
        price2: 'PKR:9,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 123,
        location:"Finmirror.html "

    },
    {
        img : "images/bedroom/decor/Wall mirrors/Hudigo Wall Mirror.png" ,
        title : "HUDIGO WALL MIRROR ",
        price1: 'PKR:11,999',
        price2: 'PKR:8,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 230,
        location:"wallmirrorhudigo.html "

    },
    {
        img : "images/bedroom/decor/Wall mirrors/Labirinto Wall Mirror.png" ,
        title : "LABIRINTO WALL MIRROR ",
        price1: 'PKR:10,999',
        price2: 'PKR:7,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 330,
        location:"Labirinto.html"

    },
    {
        img : "images/bedroom/decor/Wall mirrors/Mural Wall Mirror.png" ,
        title : "MURAL WALL MIRROR ",
        price1: 'PKR:12,599',
        price2: 'PKR:9,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 50,
        location:"MuralWall.html"

    },
    {
        img : "images/bedroom/decor/Wall mirrors/Rosario Vanity Wall Mirror.png" ,
        title : "ROSARIO VANITY MIRROR ",
        price1: 'PKR:13,999',
        price2: 'PKR:10,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 320,
        location:"Rosario.html"

    },
    {
        img : "images/bedroom/decor/Wall mirrors/Royal  Mirror.png" ,
        title : "ROYAL MIRROR ",
        price1: 'PKR:12,999',
        price2: 'PKR:9,999',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 134,
        location:"Royalmirror.html "

    },
    {
        img : "images/bedroom/decor/Wall mirrors/Royal Cocoa Mirror.png" ,
        title : "ROYAL COCOA MIRROR ",
        price1: 'PKR:12,599',
        price2: 'PKR:9,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 420,
        location:"Cocoamirror.html"

    },
    {
        img : "images/bedroom/decor/Wall mirrors/Sunburst Hanging Mirro.png" ,
        title : "SUNBURST HANGING MIRROR ",
        price1: 'PKR:10,999',
        price2: 'PKR:8,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 234,
        location:"Sunburst.html"

    },
    {
        img : "images/bedroom/decor/Wall mirrors/Sydney Mirror.png" ,
        title : "SYDNEY MIRROR ",
        price1: 'PKR:11,999',
        price2: 'PKR:9,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 230,
        location:"Sydneymirror.html"

    },
    {
        img : "images/bedroom/decor/Wall mirrors/Verge Mirror.png" ,
        title : "VERGE MIRROR ",
        price1: 'PKR:12,999',
        price2: 'PKR:9,000',
        s1: "fa-solid fa-star",
        s2: "fa-solid fa-star-half-stroke",
        s3:'fa-regular fa-star',
        reviews: 356,
        location:"Vergemirror.html"

    },


]






let wallmirrors = document.getElementById('wall-mirrors')
let data =''
decor.forEach(e => {
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

    wallmirrors.innerHTML = data
});