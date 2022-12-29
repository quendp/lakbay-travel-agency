const mainHeroSection = document.getElementById("mHeroSection"); 
const mainHeroSectionMain = document.getElementById("mHeroSectionMain");
const mainHeroTitleBot = document.getElementById("mHeroTitleBot");
const mainHeroButton = document.getElementById("mHeroButton");

const mainHeroImage1 = document.getElementById("mHeroImage1");
const mainHeroImage2 = document.getElementById("mHeroImage2");
const mainHeroImage3 = document.getElementById("mHeroImage3");
const mainHeroImage4 = document.getElementById("mHeroImage4");
const mainHeroImage5 = document.getElementById("mHeroImage5");

const mainHeroImageSrc1 = document.getElementById("mHeroImageSrc1");
const mainHeroImageSrc2 = document.getElementById("mHeroImageSrc2");
const mainHeroImageSrc3 = document.getElementById("mHeroImageSrc3");
const mainHeroImageSrc4 = document.getElementById("mHeroImageSrc4");
const mainHeroImageSrc5 = document.getElementById("mHeroImageSrc5");

const mainHeroCarouselPrev = document.getElementById("mHeroCarouselPrev");
const mainHeroCarouselNext = document.getElementById("mHeroCarouselNext");

const mainIndicator1 = document.getElementById("mIndicator1");
const mainIndicator2 = document.getElementById("mIndicator2");
const mainIndicator3 = document.getElementById("mIndicator3");
const mainIndicator4 = document.getElementById("mIndicator4");
const mainIndicator5 = document.getElementById("mIndicator5");

const carouselItems = [
    {
        category : "The Cosmopolitan Lights",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, suscipit! Doloremque assumenda illo cumque sed.",
        color : "var(--clr-accent-lights)",
        background : "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(255, 157, 0, 0.3) 100%)",
        url : "url(./images/cosmopolitan-lights/manila-city-skyline-david-milmont-3WX60TlLIdw-unsplash.jpg)"
    },
    {
        category : "The Wonders of the Sea",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, suscipit! Doloremque assumenda illo cumque sed.",
        color : "var(--clr-accent-water-100)",
        background: "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,156,0.3) 100%)",
        url : "url(./images/dive-under-water/el-nido-eibner-saliba-3T9dDY0WqDI-unsplash.jpg)"
    },
    {
        category : "The Sky on Mountain Peaks",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, suscipit! Doloremque assumenda illo cumque sed.",
        background: "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(85,85,85,0.3) 100%)",
        color : "var(--clr-accent-summit-100)",
        url : "url(./images/explore-the-summit/mount-pulag-joanne-caselyn-kCGhXLU32Bg-unsplash.jpg)"
    },
    {
        category : "The Remnants of the Past",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, suscipit! Doloremque assumenda illo cumque sed.",
        background: "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(81,64,38,0.3) 100%)",
        color : "var(--clr-accent-history-100)",
        url : "url(./images/look-back-in-history/calle-crisologo-593843_1920.jpg)"
    },
    {
        category : "The Native Culture and Nature",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, suscipit! Doloremque assumenda illo cumque sed.",
        background: "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(20,56,39,0.3) 100%)",
        color : "var(--clr-accent-culture-100)",
        url : "url(./images/nature-and-culture/ifugao-ar-2FsniOcLPj8-unsplash.jpg)"
    }
];

// const carouselItem1 = carouselItems[0];
// const carouselItem2 = carouselItems[1];
// const carouselItem3 = carouselItems[2];
// const carouselItem4 = carouselItems[3];
// const carouselItem5 = carouselItems[4];

let slideCounter = 0;

mainHeroCarouselNext.addEventListener("click", () => {carouselNext()})
mainHeroCarouselPrev.addEventListener("click", () => {carouselPrev()})

const carouselNext = () =>{
    slideCounter++;
    mainHeroSection.style.backgroundImage = carouselItems[slideCounter].url;
    mainHeroSectionMain.style.background = carouselItems[slideCounter].background;
    mainHeroTitleBot.textContent = carouselItems[slideCounter].category;
    mainHeroTitleBot.style.color = carouselItems[slideCounter].color;
    mainHeroTitleBot.style.textShadow = carouselItems[slideCounter].color;
    mainHeroButton.style.backgroundColor = carouselItems[slideCounter].color;
    mainHeroButton.style.boxShadow = "0 0 30px " + carouselItems[slideCounter].color;
    if(slideCounter >= 4) {
    
    slideCounter = -1;
    } else if (slideCounter == 3) {

    } else if (slideCounter == 2) {

    } else if (slideCounter == 1) {

    } else {        
        
    }

    
}

const carouselPrev = () => {
    slideCounter--;
    mainHeroSection.style.backgroundImage = carouselItems[slideCounter].url;
    mainHeroSectionMain.style.background = carouselItems[slideCounter].background;
    mainHeroTitleBot.textContent = carouselItems[slideCounter].category;
    mainHeroTitleBot.style.color = carouselItems[slideCounter].color;
    mainHeroTitleBot.style.textShadow = carouselItems[slideCounter].color;
    mainHeroButton.style.backgroundColor = carouselItems[slideCounter].color;
    mainHeroButton.style.boxShadow = "0 0 30px " + carouselItems[slideCounter].color;
    if(slideCounter == 4) {

    } else if (slideCounter == 3) {

    } else if (slideCounter == 2) {

    } else if (slideCounter == 1) {

    } else {        

        slideCounter = 4;
    }

    
}