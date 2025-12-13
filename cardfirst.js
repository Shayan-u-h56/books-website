const firstcard = [
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
    {
        "bookcate": "COMEDY",
        "boookname": "The Desolations of Devil's Acre",
        "imageUrl": "Projectimges/image5.jpg",
        "price": "$11.90"

    }
]

for (let i = 0; i < firstcard.length; i++) {
    document.getElementById("repeatone").innerHTML +=

        ` <div class="card">
                <a href=""><img src="${firstcard[i].imageUrl}" alt=""></a>
                <div class="card-body ">
                    <a href="" class="h2 ">${firstcard[i].bookcate}</a>
                    <a href="" class="ellip ">${firstcard[i].boookname}</a>
                    <div class="rate ">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <h2>${firstcard[i].price}</h2>
                </div>
                </div>
                <div class="line"></div>
            
`
}


// -------------------------------------------secondcard--------------------------------------------------------------------------------


const secondcard = [
    {
        "bookcate": "FANTASY",
        "boookname": "The Classic Harry Potter Series",
        "imageUrl": "Projectimges/image1.jpg",
        "price": "$10.00"

    },
    {
        "bookcate": "LITTERATURE",
        "boookname": "They Both Die at the End",
        "imageUrl": "Projectimges/image2.jpg",
        "price": "$5.00"

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
        "price": "$14.00"

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
        "bookcate": "CRIME",
        "boookname": "The Vanishing Half",
        "imageUrl": "Projectimges/image9.jpg",
        "price": "$11.90"

    },
    {
        "bookcate": "CRIME",
        "boookname": "The Splendid and the Vile",
        "imageUrl": "Projectimges/image10.jpg",
        "price": "$21.90"

    },
    {
        "bookcate": "CRIME",
        "boookname": "Dune",
        "imageUrl": "Projectimges/image11.jpg",
        "price": "$9.00"

    },
    {
        "bookcate": "COMEDY",
        "boookname": "The Psychopath: A True Story",
        "imageUrl": "Projectimges/1mage12.jpg",
        "price": "$12.00"

    },
]

for (let i = 0; i < secondcard.length; i++) {
    document.getElementById("repeattwo").innerHTML +=

        ` <div class="card-type-two">
                <a href=""><img src="${secondcard[i].imageUrl}" class="img-fluid"
                        alt=""></a>
                <div class="card-body tet-sec">
                    <a href="" class="h3">${secondcard[i].bookcate}</a>
                    <a href="" class="ellip-two ">${secondcard[i].boookname}</a>
                    <div class="rate ">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <h2>${secondcard[i].price}</h2>
                </div>
                <hr>
            </div>
            
            `
}

// -------------------------------------------------------------thirdcard------------------------------------------


const thirdcard = [
    {
        "bookcate": "FANTASY",
        "boookname": "The Classic Harry Potter Series",
        "imageUrl": "Projectimges/image1.jpg",
        "price": "$10.00"

    },
    {
        "bookcate": "LITTERATURE",
        "boookname": "They Both Die at the End",
        "imageUrl": "Projectimges/image2.jpg",
        "price": "$5.00"

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
        "price": "$14.00"

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

]

for (let i = 0; i < thirdcard.length; i++) {
    document.getElementById("repeatthree").innerHTML +=

        ` <div class="card-type-two">
                <a href=""><img src="${secondcard[i].imageUrl}" class="img-fluid"
                        alt=""></a>
                <div class="card-body tet-sec">
                    <a href="" class="h3">${secondcard[i].bookcate}</a>
                    <a href="" class="ellip-two ">${secondcard[i].boookname}</a>
                    <div class="rate ">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <h2>${secondcard[i].price}</h2>
                </div>
                <hr>
            </div>
            
            `
}


// ------------------------productcardforth--------------------------------------


