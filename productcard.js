const procard = [
    {
        "bookcate": "COMEDY",
        "boookname": "The Desolations of Devil's Acre",
        "imageUrl": "Projectimges/image5.jpg",
        "price": "$6.00"

    },
    {
        "bookcate": "COMEDY",
        "boookname": "The Overstory (Pulitzer Prize Winner)",
        "imageUrl": "Projectimges/image6.jpg",
        "price": "$16.90"

    },
    {
        "bookcate": "CRIME",
        "boookname": "The Four Winds",
        "imageUrl": "Projectimges/image7.jpg",
        "price": "$11.90"

    },
    {
        "bookcate": "CRIME",
        "boookname": "The Midnight Library",
        "imageUrl": "Projectimges/image8.jpg",
        "price": "$11.90"

    },
        {
        "bookcate": "COMEDY",
        "boookname": "The Desolations of Devil's Acre",
        "imageUrl": "Projectimges/image5.jpg",
        "price": "$6.00"

    },
    {
        "bookcate": "COMEDY",
        "boookname": "The Overstory (Pulitzer Prize Winner)",
        "imageUrl": "Projectimges/image6.jpg",
        "price": "$16.90"

    },
    {
        "bookcate": "CRIME",
        "boookname": "The Midnight Library",
        "imageUrl": "Projectimges/image8.jpg",
        "price": "$11.90"

    },
        {
        "bookcate": "COMEDY",
        "boookname": "The Desolations of Devil's Acre",
        "imageUrl": "Projectimges/image5.jpg",
        "price": "$6.00"

    },
]


for (let i = 0; i <procard.length; i++) {
document.getElementById("repeatfour").innerHTML +=
`  <div class="card-type-three">
                <a href=""><img src="${procard[i].imageUrl}" class="img-fluid" alt=""></a>
                <div class="card-body tet-sec-two">
                    <a href="" class="h3 m-0">${procard[i].bookcate}</a>
                    <a href="" class="ellip-twwo mb-2">${procard[i].boookname}</a>
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

// ---------------------------------------productsecondpage------------
const producttwo=[
    {
        "bookcate": "FANTASY",
        "boookname": "The Classic Harry Potter Series",
        "imageUrl": "Projectimges/image1.jpg",
        "price": "$11.90"

    },
    {
        "bookcate": "LITTERATURE",
        "boookname": "They Both Die at the End",
        "imageUrl": "Projectimges/image2.jpg",
        "price": "$11.90"

    },
    {
        "bookcate": "COMEDY",
        "boookname": "The Song of Achilles",
        "imageUrl": "Projectimges/image3.jpg",
        "price": "$11.90"

    },
    {
        "bookcate": "COMEDY",
        "boookname": "The Sanatorium",
        "imageUrl": "Projectimges/image4.jpg",
        "price": "$11.90"

    },
]
for (let i = 0; i < producttwo.length; i++) {
document.getElementById("seccardtwo").innerHTML +=
` <div class="card-type-three">
                <a href=""><img src="${producttwo[i].imageUrl}" class="img-fluid" alt=""></a>
                <div class="card-body tet-sec-two">
                    <a href="" class="h3 m-0">${producttwo[i].bookcate}</a>
                    <a href="" class="ellip-twwo mb-2">${producttwo[i].boookname}</a>
                    <div class="rate ">
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



