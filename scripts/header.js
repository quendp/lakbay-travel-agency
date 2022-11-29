const hCategories = [
    {
        "category" : "lights",
        "title" : "THE LIVELY CITIES",
        "color" : "var(--clr-accent-lights-100)",
        "textShadow" : "0 0 1rem var(--clr-accent-lights-100)",
        "url" : "url(./images/cosmopolitan-lights/manila-city-skyline-david-milmont-3WX60TlLIdw-unsplash.jpg)"
    },
    {
        "category" : "water",
        "title" : "THE AQUATIC LIFE",
        "color" : "var(--clr-accent-water-100)",
        "textShadow" : "0 0 1rem var(--clr-accent-water-100)",
        "url" : "url(./images/dive-under-water/el-nido-eibner-saliba-3T9dDY0WqDI-unsplash.jpg)"
    },
    {
        "category" : "summit",
        "title" : "THE MOUNTAIN PEAKS",
        "color" : "var(--clr-accent-summit-100)",
        "textShadow" : "0 0 1rem var(--clr-accent-summit-100)",
        "url" : "url(./images/explore-the-summit/mount-pulag-joanne-caselyn-kCGhXLU32Bg-unsplash.jpg)"
    },
    {
        "category" : "history",
        "title" : "THE HERITAGE SITES",
        "color" : "var(--clr-accent-history-100)",
        "textShadow" : "0 0 1rem var(--clr-accent-history-100)",
        "url" : "url(./images/look-back-in-history/calle-crisologo-593843_1920.jpg)"
    },
    {
        "category" : "culture",
        "title" : "THE BEAUTY OF NATURE",
        "color" : "var(--clr-accent-culture-100)",
        "textShadow" : "0 0 1rem var(--clr-accent-culture-100)",
        "url" : "url(./images/nature-and-culture/ifugao-ar-2FsniOcLPj8-unsplash.jpg)"
    }
];

const hLights = hCategories[0];
const hWater = hCategories[1];
const hSummit = hCategories[2];
const hHistory = hCategories[3];
const hCulture = hCategories[4];

const hShowNav = () => {
    document.getElementById("h-header-wrapper").classList.toggle("h-active");
};

const hShowImage = (category) => {
    const hPreviewImage = document.getElementById("hPreviewImage");
    const hTitle = document.getElementById("hPreviewImageTitle");

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

const hHideImage = () => {
    const hPreviewImage = document.getElementById("hPreviewImage");
    const hTitle = document.getElementById("hPreviewImageTitle");

    hTitle.style.display = "none";
    hTitle.style.opacity = "0";

    hPreviewImage.style.height = "0";
    hPreviewImage.style.transitionDuration = "500ms, 10ms";
    hPreviewImage.style.backgroundPosition = "top";
};