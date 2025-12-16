



let journalcard = [
    {
        img: "Projectimges/image4.jpg",
        name: "Classic Leather Journal",
        description: "Premium quality leather journal for daily writing and notes.",
        price: "$15"
    },
    {
        img: "Projectimges/image4.jpg",
        name: "Spiral Notebook",
        description: "Smooth paper spiral notebook perfect for students and office use.",
        price: "$8"
    },
    {
        img: "Projectimges/image4.jpg",
        name: "Hardcover Diary",
        description: "Stylish hardcover diary to keep your personal thoughts safe.",
        price: "$12"
    },
    {
        img: "Projectimges/image4.jpg",
        name: "Minimal Planner",
        description: "Simple and clean planner for organizing your daily tasks.",
        price: "$10"
    },
    {
        img: "Projectimges/image4.jpg",
        name: "Vintage Journal",
        description: "Vintage-style journal with antique design and thick pages.",
        price: "$18"
    },
    {
        img: "Projectimges/image4.jpg",
        name: "Sketch Notebook",
        description: "High-quality sketch notebook for artists and designers.",
        price: "$14"
    },
    {
        img: "Projectimges/image4.jpg",
        name: "Daily Notes Pad",
        description: "Lightweight notes pad for quick ideas and reminders.",
        price: "$6"
    },
    {
        img: "Projectimges/image4.jpg",
        name: "Executive Notebook",
        description: "Professional notebook ideal for meetings and office work.",
        price: "$20"
    },
    {
        img: "Projectimges/image4.jpg",
        name: "Travel Journal",
        description: "Compact travel journal to capture memories on the go.",
        price: "$16"
    },
    {
        img: "Projectimges/image4.jpg",
        name: "Eco Friendly Notebook",
        description: "Made from recycled paper, perfect for eco-conscious users.",
        price: "$11"
    },
    {
        img: "Projectimges/image4.jpg",
        name: "Pocket Size Journal",
        description: "Small and handy journal, easy to carry anywhere.",
        price: "$7"
    },
    {
        img: "Projectimges/image4.jpg",
        name: "Luxury Writing Journal",
        description: "Elegant luxury journal with premium paper quality.",
        price: "$25"
    }
];


let journalContainer = document.getElementById("journalid");
if (journalContainer) {
    for (let i = 0; i < journalcard.length; i++) {
        journalContainer.innerHTML += `
            <div class="card-type-three">
                <a href=""><img src="${journalcard[i].img}" class="img-fluid" alt=""></a>
                <div class="card-body tet-sec-two">
                    <a href="" class="h3 m-0">${journalcard[i].name}</a>
                    <a href="" class="ellip-twwo mb-2">${journalcard[i].description}</a>
                    <div class="rate">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <h2>${journalcard[i].price}</h2>
                </div>
            </div>
        `;
    }
}

// ---------------------------------------------------jurnal---------
let diariescard = [
    {
        name: "Daily Life Diary",
        img: "Projectimges/diaries5.jpg",
        description: "Write your daily memories",
        price: "$12"
    },
    {
        name: "Lock Diary",
        img: "Projectimges/diaries1.webp",
        description: "Secure personal thoughts inside",
        price: "$15"
    },
    {
        name: "Classic Diary",
        img: "Projectimges/diaries7.jpg",
        description: "Simple elegant daily writing",
        price: "$10"
    },
    {
        name: "Floral Cover Diary",
        img: "Projectimges/diaries4.jpg",
        description: "Beautiful design soft pages",
        price: "$14"
    },
    {
        name: "Personal Notes Diary",
        img: "Projectimges/diaries1.jpg",
        description: "Perfect for private notes",
        price: "$11"
    },
    {
        name: "Premium Diary Book",
        img: "Projectimges/diaries2.jpg",
        description: "Luxury feel smooth paper",
        price: "$18"
    },
    {
        name: "Pocket Diary",
        img: "Projectimges/diaries9.jpg",
        description: "Small size carry anywhere",
        price: "$8"
    },
    {
        name: "Hardcover Diary",
        img: "Projectimges/diaries10.jpg",
        description: "Strong durable pages inside",
        price: "$16"
    },
    {
        name: "Travel Diary",
        img: "Projectimges/diaries3.jpg",
        description: "Capture memories on travel",
        price: "$13"
    },
    {
        name: "Artistic Diary",
        img: "Projectimges/diaries8.jpg",
        description: "Colorful cover creative design",
        price: "$17"
    },
    {
        name: "Minimal Diary",
        img: "Projectimges/diaries11.jpg",
        description: "Clean simple design style",
        price: "$12"
    },
    {
        name: "Eco Diary",
        img: "Projectimges/diaries12.jpg",
        description: "Recycled paper eco friendly",
        price: "$9"
    }
];






let diariesContainer = document.getElementById("diariesid");
if (diariesContainer) {
    for (let i = 0; i < diariescard.length; i++) {
        diariesContainer.innerHTML += `
            <div class="card-type-three">
                <a href=""><img src="${diariescard[i].img}" class="img-fluid" alt=""></a>
                <div class="card-body tet-sec-two">
                    <a href="" class="h3 m-0">${diariescard[i].name}</a>
                    <a href="" class="ellip-twwo mb-2">${diariescard[i].description}</a>
                    <div class="rate">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <h2>${diariescard[i].price}</h2>
                </div>
            </div>
        `;
    }
}

// -------------------------------------------------diaries---------------------------

let notebookcard = [
    {
        name: "Spiral Notebook",
        img: "Projectimges/nb1.jpg",
        description: "Fire Ball Notebooks",
        price: "$7"
    },
    {
        name: "College Notebook",
        img: "Projectimges/nb2.jpg",
        description: "Ideal for students notes",
        price: "$6"
    },
    {
        name: "Ruled Notebook",
        img: "Projectimges/nb11.jpg",
        description: "Clean lines neat writing",
        price: "$5"
    },
    {
        name: "Plain Notebook",
        img: "Projectimges/nb7.jpg",
        description: "Sketch write anything freely",
        price: "$8"
    },
    {
        name: "Office Notebook",
        img: "Projectimges/nb5.jpg",
        description: "Professional meetings note taking",
        price: "$9"
    },
    {
        name: "Hardcover Notebook",
        img: "Projectimges/nb10.jpg",
        description: "Strong cover durable pages",
        price: "$11"
    },
    {
        name: "Grid Notebook",
        img: "Projectimges/nb4.jpg",
        description: "Perfect for math notes",
        price: "$6"
    },
    {
        name: "Soft Cover Notebook",
        img: "Projectimges/nb6.jpg",
        description: "Lightweight flexible daily use",
        price: "$7"
    },
    {
        name: "A4 Size Notebook",
        img: "Projectimges/nb9.jpg",
        description: "Large pages comfortable writing",
        price: "$10"
    },
    {
        name: "Pocket Notebook",
        img: "Projectimges/nb8.jpg",
        description: "Small size easy carry",
        price: "$4"
    },
    {
        name: "Eco Paper Notebook",
        img: "Projectimges/nb3.jpg",
        description: "Recycled paper eco friendly",
        price: "$8"
    },
    {
        name: "Designer Notebook",
        img: "Projectimges/nb12.jpg",
        description: "Stylish cover modern look",
        price: "$12"
    }

]

let notebookContainer = document.getElementById("notebookid");
if (notebookContainer ) {
    for (let i = 0; i < notebookcard.length; i++) {
        notebookContainer .innerHTML += `
            <div class="card-type-three">
                <a href=""><img src="${notebookcard[i].img}" class="img-fluid" alt=""></a>
                <div class="card-body tet-sec-two">
                    <a href="" class="h3 m-0">${notebookcard[i].name}</a>
                    <a href="" class="ellip-twwo mb-2">${notebookcard[i].description}</a>
                    <div class="rate">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <h2>${notebookcard[i].price}</h2>
                </div>
            </div>
        `;
    }
}

// ------------------------------book------------------------------------

let bookscard=[
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

let booksContainer = document.getElementById("booksid");
if (booksContainer) {
    for (let i = 0; i < bookscard.length; i++) {
        booksContainer.innerHTML += `
            <div class="card-type-three">
                <a href=""><img src="${bookscard[i].imageUrl}" class="img-fluid" alt=""></a>
                <div class="card-body tet-sec-two">
                    <a href="" class="h3 m-0">${bookscard[i].bookcate}</a>
                    <a href="" class="ellip-twwo mb-2">${bookscard[i].boookname}</a>
                    <div class="rate">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <h2>${bookscard[i].price}</h2>
                </div>
            </div>
        `;
    }
}