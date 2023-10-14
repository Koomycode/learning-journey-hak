const dataArray = [
    {
        date: "October 11, 2023",
        image: "images/coding_4_50.jpg",
        title: "Blog 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maiores nulla. Voluptatum"
    },
    {
        date: "October 11, 2023",
        image: "images/coding_1_50.jpg",
        title: "Blog 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe numquam corrupti tempore beatae provident optio ea rerum dicta dolores, repellendus molestias? Autem."
    },
    {
        date: "October 11, 2023",
        image: "images/coding_7_50.jpg",
        title: "Blog 3",
        text: "Lorem ipsum dolor sit amet sorem ipsum dolor sit amet consectetur adipisicing elit. Et eum nisi laudantium, magni vel id ad?"
    },
    {
        date: "October 11, 2023",
        image: "images/coding_3_50.jpg",
        title: "Blog 4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nesciunt dolores maiores, voluptatibus aut aliquam possimus modi distinctio iure dolorum."
    },
    {
        date: "October 11, 2023",
        image: "images/coding_8_50.jpg",
        title: "Blog 5",
        text: "Lorem ipsum dolor sit amet consectetur. ipsum dolor sit amet consectetur adipisicing elit. Natus maiores nulla. Voluptatum"
    },
    {
        date: "October 11, 2023",
        image: "images/coding_5_50.jpg",
        title: "Blog 6",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus libero voluptas optio ipsum dolor sit amet consectetur adipisicing elit. Natus maiores nulla. Voluptatum"
    },
]

const postsContainer = document.getElementById("posts-container")

if (postsContainer) {
    function createPost(array) {
        return array.map(item => {
            const { date, image, title, text } = item
            return `
            <div class="post">
                <img src="${image}" class="post-img">
    
                <p class="date post-date">
                    ${date}
                </p>
                <h1 class="sub-title post-title">
                    ${title}
                </h1>
                <p class="text post-text">
                    ${text}
                </p>
            </div>
            `
        }).join("")
    }


    function renderPosts() {
        postsContainer.innerHTML = createPost(dataArray)
    }

    renderPosts()
}

// HAmburger Menu JS ----------------------

const menu = document.getElementById("menu")
const mobileLinks = document.getElementById("mobile-links")

menu.addEventListener("click", function () {
    const lines = document.querySelectorAll(".lines")
    lines.forEach(line => {
        line.classList.toggle("open")
    })

    mobileLinks.classList.toggle("open")

    // lets stop scroll when mobile links menu is opened
    if (mobileLinks.classList.contains("open")) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
})


// Image Slider JS -------------------------

// Render slides ------

const slidesContainer = document.getElementById("all-slides")

if (slidesContainer) {
    function createSlide(array) {
        return array.map(item => {
            const { image, title, text } = item

            return `
            <div class="slider ${item === array[0] ? 'active' : ''}">

                    <div class="slide-con">
                        <img src="${image}" class="slide">
                    </div>

                    <div class="slide-mid-con">
                        <img src="${image}" class="slide-mid">
                    </div>

                    <div class="slide-inner-con">
                        <img src="${image}" class="slide-inner">
                    </div>

                    <div class="slider-text-content">
                        <div class="title-container">
                            <h1 class="slider-title">
                                ${title}
                            </h1>
                        </div>
                        <div class="text-container">
                            <p class="slider-text">
                                ${text}
                            </p>
                        </div>
                    </div>                   
            </div>
            `
        }).join("")
    }

    function renderSlides() {
        slidesContainer.innerHTML = `
            ${createSlide(dataArray)}
            <div class="dark-circle"></div>

            <div class="line"></div>

            <button class="rotate-btn" id="button">
                <i class="fa-solid fa-rotate"></i>
            </button>
        `
    }

    renderSlides()
}

// Rotation functionality -----

const rotateBtn = document.getElementById("button")

if (rotateBtn) {
    const sliders = document.querySelectorAll(".slider")
    const totalLength = sliders.length
    let index = 0

    rotateBtn.addEventListener("click", () => {
        sliders.forEach(slide => {
            if (slide.classList.contains("active")) {
                slide.classList.add("after-active")
            } else {
                slide.classList.remove("after-active")
            }
        })

        sliders[index].classList.remove("active")

        index++

        if (index === totalLength) {
            index = 0
        }

        sliders[index].classList.add("active")
    })
}