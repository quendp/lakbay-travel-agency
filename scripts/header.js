const hCategories = [
    {
        "category" : "lights",
        "title" : "LIVELY CITIES",
        "color" : "var(--clr-accent-lights)",
        "textShadow" : "0 0 1rem var(--clr-accent-lights)",
        "url" : "url(./images/cosmopolitan-lights/manila-city-skyline-david-milmont-3WX60TlLIdw-unsplash.jpg)"
    },
    {
        "category" : "water",
        "title" : "UNDER THE SEA",
        "color" : "var(--clr-accent-water)",
        "textShadow" : "0 0 1rem var(--clr-accent-water)",
        "url" : "url(./images/dive-under-water/el-nido-eibner-saliba-3T9dDY0WqDI-unsplash.jpg)"
    },
    {
        "category" : "summit",
        "title" : "MOUNTAIN PEAKS",
        "color" : "var(--clr-accent-summit)",
        "textShadow" : "0 0 1rem var(--clr-accent-summit)",
        "url" : "url(./images/explore-the-summit/mount-pulag-joanne-caselyn-kCGhXLU32Bg-unsplash.jpg)"
    },
    {
        "category" : "history",
        "title" : "HERITAGE SITES",
        "color" : "var(--clr-accent-history)",
        "textShadow" : "0 0 1rem var(--clr-accent-history)",
        "url" : "url(./images/look-back-in-history/calle-crisologo-593843_1920.jpg)"
    },
    {
        "category" : "culture",
        "title" : "THE BEAUTY OF NATURE",
        "color" : "var(--clr-accent-culture)",
        "textShadow" : "0 0 1rem var(--clr-accent-culture)",
        "url" : "url(./images/nature-and-culture/ifugao-ar-2FsniOcLPj8-unsplash.jpg)"
    }
];

const hLights = hCategories[0];
const hWater = hCategories[1];
const hSummit = hCategories[2];
const hHistory = hCategories[3];
const hCulture = hCategories[4];

function hShowNav(){
    document.getElementById("h-header-wrapper").classList.toggle("h-active");
};

function hShowImage(category) {
    const hPreviewImage = document.getElementById("hPreviewImage");
    const hTitle = document.getElementById("hPreviewImageTitle");

    hTitle.innerText = category.title;
    hTitle.style.color = category.color;
    hTitle.style.textShadow = category.textShadow;
    hTitle.style.fontSize = "5vw";
    hPreviewImage.style.backgroundImage = category.url;
    hPreviewImage.style.backgroundPosition = "bottom";
    hPreviewImage.style.transitionDuration = "3000ms";
};

function hHideImage() {
    const hPreviewImage = document.getElementById("hPreviewImage");
    const hTitle = document.getElementById("hPreviewImageTitle");

    hTitle.innerText = "DISCOVER";
    hTitle.style.color = "var(--clr-secondary-100)";
    hTitle.style.textShadow = "none";
    hTitle.style.fontSize = "18vw";
    hPreviewImage.style.backgroundImage = "";
    hPreviewImage.style.transitionDuration = "10ms";
    hPreviewImage.style.backgroundPosition = "top";
};