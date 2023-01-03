const hHeaderWrapper = document.getElementById("hHeaderWrapper");
const hPreviewImage = document.getElementById("hPreviewImage");
const hTitle = document.getElementById("hPreviewImageTitle");
const hNavContainer = document.getElementById("hNavContainer");

const hButtonHam = document.getElementById("hButtonHam");
const hImageLights = document.getElementById("hImageLights");
const hImageWater = document.getElementById("hImageWater");
const hImageSummit = document.getElementById("hImageSummit");
const hImageHistory = document.getElementById("hImageHistory");
const hImageCulture = document.getElementById("hImageCulture");

const hCategories = [
    {
        category : "lights",
        title : "THE LIVELY MODERN CITIES",
        color : "var(--clr-accent-lights-100)",
        textShadow : "0 0 1rem var(--clr-accent-lights-100)",
        url : "url(./sources/images/cosmopolitan-lights/manila-city-skyline-david-milmont-3WX60TlLIdw-unsplash.jpg)"
    },
    {
        category : "water",
        title : "THE WONDERS OF THE SEA",
        color : "var(--clr-accent-water-100)",
        textShadow : "0 0 1rem var(--clr-accent-water-100)",
        url : "url(./sources/images/dive-under-water/el-nido-eibner-saliba-3T9dDY0WqDI-unsplash.jpg)"
    },
    {
        category : "summit",
        title : "THE SKY ON MOUNTAIN PEAKS",
        color : "var(--clr-accent-summit-100)",
        textShadow : "0 0 1rem var(--clr-accent-summit-100)",
        url : "url(./sources/images/explore-the-summit/mount-pulag-joanne-caselyn-kCGhXLU32Bg-unsplash.jpg)"
    },
    {
        category : "history",
        title : "THE REMNANTS OF THE PAST",
        color : "var(--clr-accent-history-100)",
        textShadow : "0 0 1rem var(--clr-accent-history-100)",
        url : "url(./sources/images/look-back-in-history/calle-crisologo-593843_1920.jpg)"
    },
    {
        category : "culture",
        title : "THE BREATH OF FRESH AIR",
        color : "var(--clr-accent-culture-100)",
        textShadow : "0 0 1rem var(--clr-accent-culture-100)",
        url : "url(./sources/images/nature-and-culture/ifugao-ar-2FsniOcLPj8-unsplash.jpg)"
    }
];

const hLights = hCategories[0];
const hWater = hCategories[1];
const hSummit = hCategories[2];
const hHistory = hCategories[3];
const hCulture = hCategories[4];

const mHeroSection = document.getElementById("mHeroSection");
let lastScrollY = window.scrollY;

let hButtonHamMode = false;

// events
window.addEventListener("scroll", () => {
    adjustHeader();
    lastScrollY = window.scrollY;
});

hButtonHam.addEventListener("click", () => {
    hHeaderWrapper.classList.toggle("h-active");
    hNavContainer.classList.toggle("d-none");
    hTitle.classList.toggle("d-none");
    document.body.classList.toggle("h-disable-scroll");
    hHeaderWrapper.style.backgroundColor = "var(--clr-primary-dark)";
    hHeaderWrapper.style.backgroundImage = "url(./sources/images/grain.png)";
    if (hButtonHamMode) {
        hButtonHamMode = false;
        adjustHeader();
    } else {
        hButtonHamMode = true;
    };
})

hImageLights.addEventListener("mouseover", () => {
    hShowImage(hLights);
});
hImageWater.addEventListener("mouseover", () => {
    hShowImage(hWater);
});
hImageSummit.addEventListener("mouseover", () => {
    hShowImage(hSummit);
});
hImageHistory.addEventListener("mouseover", () => {
    hShowImage(hHistory);
});
hImageCulture.addEventListener("mouseover", () => {
    hShowImage(hCulture);
});

hImageLights.addEventListener("mouseout", hHideImage);
hImageWater.addEventListener("mouseout", hHideImage);
hImageSummit.addEventListener("mouseout", hHideImage);
hImageHistory.addEventListener("mouseout", hHideImage);
hImageCulture.addEventListener("mouseout", hHideImage);

const hShowImage = (category) => {
    hTitle.innerText = category.title;
    hTitle.style.color = category.color;
    hTitle.style.textShadow = category.textShadow;
    hTitle.style.display = "block";
    setTimeout(() => (hTitle.style.opacity = "1"), 1);
    hPreviewImage.style.height = "100%";
    hPreviewImage.style.backgroundImage = category.url;
    hPreviewImage.style.backgroundPosition = "bottom";
    hPreviewImage.style.transitionDuration = "500ms, 3000ms";
};

function hHideImage() {
    hTitle.style.display = "none";
    hTitle.style.opacity = "0";
    hPreviewImage.style.height = "0";
    hPreviewImage.style.transitionDuration = "500ms, 10ms";
    hPreviewImage.style.backgroundPosition = "top";
};

// change header on scroll
const adjustHeader = () => {
    if ( window.scrollY == 0){
        hHeaderWrapper.style.backgroundColor = "transparent";
        hHeaderWrapper.style.backgroundImage = "none";
    } else if (lastScrollY < window.scrollY){
        hHeaderWrapper.style.backgroundColor = "transparent";
        hHeaderWrapper.style.transform = " translateY(-10vh)";
    } else {
        hHeaderWrapper.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        hHeaderWrapper.style.backgroundImage = "url(./sources/images/grain.png)";
        hHeaderWrapper.style.transform = " translateY(0)";
    };
}