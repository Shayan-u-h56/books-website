let procard = [
   {
        "bookcate": "FANTASY",
        "boookname": "The Classic Harry Potter Series",
        "imageUrl": "Projectimges/image1.jpg",
        "price": "$11.90"

    },
    {
        "bookcate": "Lock Diary",
        "boookname": "Secure personal thoughts inside",
        "imageUrl": "Projectimges/diaries1.webp",
        "price": "$15"

    },
    {
        "bookcate": "Ruled Notebook",
        "boookname": "Clean lines neat writing",
        "imageUrl": "Projectimges/nb1.jpg",
        "price": "$5.90"

    },
    {
        "bookcate": "COMEDY",
        "boookname": "The Desolations of Devil's Acre",
        "imageUrl": "Projectimges/image11.jpg",
        "price": "$6.00"
        
    },

    
    {
        "bookcate": "Plain Notebook",
        "boookname": "Sketch write anything freely",
        "imageUrl": "Projectimges/nb3.jpg",
        "price": "$8.90"

    },
    {
        "bookcate": "Hardcover Notebook",
        "boookname": "TStrong cover durable pages",
        "imageUrl": "Projectimges/nb10.jpg",
        "price": "$11.90"

    },
  
      {
        "bookcate": "COMEDY",
        "boookname": "The Desolations of Devil's Acre",
        "imageUrl": "Projectimges/image15.jpg",
        "price": "$6.00"

    },
    {
        "bookcate": "Daily Life Diary",
        "boookname": "The DeWrite your daily memories",
        "imageUrl": "Projectimges/diaries5.jpg",
        "price": "$6.00"

    },
]

let productonecon=document.getElementById("product-one")
if(productonecon){
for (let i = 0; i < procard.length; i++) {
   productonecon.innerHTML +=
        `  <div class="card-type-three">
                <a href="product-details.html"><img src="${procard[i].imageUrl}" class="img-fluid" alt=""></a>
                <div class="card-body tet-sec-two">
                    <a href="" class="h3 m-0">${procard[i].bookcate}</a>
                    <a href="product-details.html" class="ellip-twwo mb-2">${procard[i].boookname}</a>
                    <div class="rate ">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <h2>${procard[i].price}</h2>
                </div>
            </div>`

}
}
// ---------------------------------------productsecondpage------------
let producttwo = [
 
      {
        "bookcate": "CRIME",
        "boookname": "The Midnight Library",
        "imageUrl": "Projectimges/image2.jpg",
        "price": "$11.90"

    },
    {
        "bookcate": "COMEDY",
        "boookname": "The Song of Achilles",
        "imageUrl": "Projectimges/image2.jpg",
        "price": "$11.90"
        
    },
    {
        "bookcate": "Pocket Diary",
        "boookname": "Small size carry anywhere",
        "imageUrl": "Projectimges/diaries11.jpg",
        "price": "$11.90"

    },
    {
        "bookcate": "College Notebook",
        "boookname": "Ideal for students notes",
        "imageUrl": "Projectimges/nb7.jpg",
        "price": "$11.90"

    },
    {
        "bookcate": "Diary",
        "boookname": "Small size carry anywhere",
        "imageUrl": "Projectimges/diaries7.jpg",
        "price": "$11.90"

    },
    {
        "bookcate": "COMEDY",
        "boookname": "The Sanatorium",
        "imageUrl": "Projectimges/image5.jpg",
        "price": "$11.90"

    },
    {
        "bookcate": "College Notebook",
        "boookname": "Ideal for students notes",
        "imageUrl": "Projectimges/nb2.jpg",
        "price": "$11.90"

    },
    {
        "bookcate": "COMEDY",
        "boookname": "The Sanatorium",
        "imageUrl": "Projectimges/image16.jpg",
        "price": "$11.90"

    },
]

let productcontainer= document.getElementById("product-two")
if(productcontainer){


for (let i = 0; i < producttwo.length; i++) {
   productcontainer.innerHTML +=
        ` <div class="card-type-three">
                <a href=""><img src="${producttwo[i].imageUrl}"class="img-fluid" alt=""></a>
                <div class="card-body tet-sec-two">
                    <a href="" class="h3 m-0">${producttwo[i].bookcate}</a>
                    <a href="" class="ellip-twwo mb-2">${producttwo[i].boookname}</a>
                    <div class="rate">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <h2>${producttwo[i].price}</h2>
                </div>
            </div>
            `

}

}

