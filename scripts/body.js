const mHeroSection = document.getElementById("mHeroSection"); 
const mHeroSectionMain = document.getElementById("mHeroSectionMain");
const mHeroTitleBot = document.getElementById("mHeroTitleBot");
const mHeroButton = document.getElementById("mHeroButton");

const mHeroImage1 = document.getElementById("mHeroImage1");
const mHeroImage2 = document.getElementById("mHeroImage2");
const mHeroImage3 = document.getElementById("mHeroImage3");
const mHeroImage4 = document.getElementById("mHeroImage4");
const mHeroImage5 = document.getElementById("mHeroImage5");

const mHeroImageSrc1 = document.getElementById("mHeroImageSrc1");
const mHeroImageSrc2 = document.getElementById("mHeroImageSrc2");
const mHeroImageSrc3 = document.getElementById("mHeroImageSrc3");
const mHeroImageSrc4 = document.getElementById("mHeroImageSrc4");
const mHeroImageSrc5 = document.getElementById("mHeroImageSrc5");

const mHeroCarouselPrev = document.getElementById("mHeroCarouselPrev");
const mHeroCarouselNext = document.getElementById("mHeroCarouselNext");

const mIndicator1 = document.getElementById("mIndicator1");
const mIndicator2 = document.getElementById("mIndicator2");
const mIndicator3 = document.getElementById("mIndicator3");
const mIndicator4 = document.getElementById("mIndicator4");
const mIndicator5 = document.getElementById("mIndicator5");

const carouselItems = [
    {
        "category" : "The Cosmopolitan Lights",
        "description" : "THE LIVELY MODERN CITIES",
        "color" : "var(--clr-accent-lights-100)",
        "url" : "url(./images/cosmopolitan-lights/manila-city-skyline-david-milmont-3WX60TlLIdw-unsplash.jpg)"
    },
    {
        "category" : "water",
        "description" : "THE WONDERS OF THE SEA",
        "color" : "var(--clr-accent-water-100)",
        "url" : "url(./images/dive-under-water/el-nido-eibner-saliba-3T9dDY0WqDI-unsplash.jpg)"
    },
    {
        "category" : "summit",
        "description" : "THE SKY ON MOUNTAIN PEAKS",
        "color" : "var(--clr-accent-summit-100)",
        "url" : "url(./images/explore-the-summit/mount-pulag-joanne-caselyn-kCGhXLU32Bg-unsplash.jpg)"
    },
    {
        "category" : "history",
        "description" : "THE REMNANTS OF THE PAST",
        "color" : "var(--clr-accent-history-100)",
        "url" : "url(./images/look-back-in-history/calle-crisologo-593843_1920.jpg)"
    },
    {
        "category" : "culture",
        "description" : "THE BREATH OF FRESH AIR",
        "color" : "var(--clr-accent-culture-100)",
        "url" : "url(./images/nature-and-culture/ifugao-ar-2FsniOcLPj8-unsplash.jpg)"
    }
];

let currentSlide = 1;
mHeroCarouselNext.addEventListener("click", () => {carouselNext()})
const carouselNext = () => {

}