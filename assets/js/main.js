const API_KEY = "563492ad6f9170000100000164c0d4b534464babb8fe96b32f30d937";
// const API_KEY = '563492ad6f91700001000001dbe8d0b185924c8e8abf3d72ff177d29';

const input = document.querySelector(".search_input");
const searchBtn = document.querySelector(".search_btn");
const name = document.querySelector("p");
const alert = document.querySelector(".alert");
const back = document.querySelector(".back");
const next = document.querySelector(".next");

let searchText = "";
let search = false;



// https://api.pexels.com/v1/curated

// Default Photos

async function defaultPhotos() {
    const data = await fetch(`https://api.pexels.com/v1/curated?per_page=20`, {
    // const data = await fetch(`https://api.pexels.com/v1/curated/?page=2&per_page=21`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: API_KEY,
        }
    })
    const response = await data.json()
    // console.log(response);
    displayImages(response);
}

function displayImages(response) {
    response.photos.forEach((image) => {
        const photoDiv = document.createElement("div");
        // photoDiv.classList.add("karimov__fadeIn");
        photoDiv.innerHTML = `
        <div class="image ">
            <a href="${image.url}" class=" " target="_blank">
                <img src="${image.src.large}" class="" alt="">        
            </a>
        </div>
        `;
        document.querySelector(".main").appendChild(photoDiv)
    });
}

{
    /* <div class="content">
                            <div class="flex">
                                <a href="${image.photographer_url}" class="profile">
                                    <img src="${image.url}" alt="">
                                    <p>${image.photographer}</p>
                                </a>
                            </div>
                            <a href="${image.src.large}" download>
                               <div class="icon">
                                   <i class="uil uil-import"></i>
                                </div>
                            </a>
                        </div> */
}

// Search Photos

async function searchPhotos(query) {
    // https://api.pexels.com/v1/search?query=nature&per_page=1
    const data = await fetch(`https://api.pexels.com/v1/search?query=${query}&page=1&per_page=80`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: API_KEY,
        }
    })
    const response = await data.json()
    displayImages(response);

}


input.addEventListener('change', (e) => {
    e.preventDefault();
    searchText = e.target.value;
    // console.log(searchText);
    // search = true;
    localStorage.setItem("user", searchText);
    let storedUser = localStorage.getItem("user");
    searchPhotos(storedUser)
    clear()
    console.log(storedUser);
})

searchBtn.addEventListener('click', () => {
    if (input.value === "") {
        input.style.background = "red";
        setInterval(() => {
            input.style.background = "#fff";
        }, 2000);
    } else {
        clear()
        alert.style.display = "none";
        search = true;
        searchPhotos(searchText)
    }
})

function clear() {
    document.querySelector(".main").innerHTML = "";
}



defaultPhotos();

window.addEventListener("scroll", () => {
    document.querySelector(".header").classList.toggle("fixed", window.scrollY > 0);
});

// let user = {name: "John Doe", age: 30};
// console.log(storedUser);

const obderver1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('karimov__fadeIn__css');
        } else {
            entry.target.classList.remove('karimov__fadeIn__css');
        }
    });
});

const hiddenElements1 = document.querySelectorAll('.karimov__fadeIn');
hiddenElements1.forEach((el) => obderver1.observe(el));