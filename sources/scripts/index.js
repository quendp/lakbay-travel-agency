const mHeroBg = document.getElementById("mHeroBg");
const mHeroSec = document.getElementById("mHeroSection");

const mHeroThumbCity = document.getElementById("mHeroThumb1");
const mHeroThumbWater = document.getElementById("mHeroThumb2");
const mHeroThumbMountain = document.getElementById("mHeroThumb3");
const mHeroThumbHistory = document.getElementById("mHeroThumb4");
const mHeroThumbNature = document.getElementById("mHeroThumb5");

window.addEventListener("scroll", () => {
    if (window.scrollY >= mHeroSec.offsetHeight) {
        mHeroBg.pause();
    } else {
        mHeroBg.play( );
    };
});

const mCategories = [
    {
        category : "city",
        backgroundUrl : "./sources/videos/city.mp4",
        accent: "var(--clr-accent-lights)",
        accentLight: "var(--clr-accent-lights-100"
    }, {
        category : "water",
        backgroundUrl : "./sources/videos/water.mp4",
        accent: "var(--clr-accent-water)",
        accentLight: "var(--clr-accent-water-100"
    }, {
        category : "mountain",
        backgroundUrl : "./sources/videos/mountain.mp4",
        accent: "var(--clr-accent-summit)",
        accentLight: "var(--clr-accent-summit-100"
    }, {
        category : "history",
        backgroundUrl : "./sources/videos/history.mp4",
        accent: "var(--clr-accent-history)",
        accentLight: "var(--clr-accent-history-100"
    }, {
        category : "nature",
        backgroundUrl : "./sources/videos/nature.mp4",
        accent: "var(--clr-accent-culture)",
        accentLight: "var(--clr-accent-culture-100"
    }
];

mHeroThumbCity.addEventListener("click", () => {
    updateHero(mCategories[0], mHeroThumbCity);
})
mHeroThumbWater.addEventListener("click", () => {
    updateHero(mCategories[1], mHeroThumbWater);
})
mHeroThumbMountain.addEventListener("click", () => {
    updateHero(mCategories[2], mHeroThumbMountain);
})
mHeroThumbHistory.addEventListener("click", () => {
    updateHero(mCategories[3], mHeroThumbHistory);
})
mHeroThumbNature.addEventListener("click", () => {
    updateHero(mCategories[4], mHeroThumbNature);
})

const updateHero = (categoryIndex, thumb) => {
    mHeroBg.style.opacity = "0";
    setTimeout(() => {
        mHeroBg.setAttribute("src", categoryIndex.backgroundUrl);
        mHeroBg.style.opacity = "1";
    }, 300);
    mHeroThumbCity.style.border = "none";
    mHeroThumbWater.style.border = "none";
    mHeroThumbMountain.style.border = "none";
    mHeroThumbHistory.style.border = "none";
    mHeroThumbNature.style.border = "none";
    thumb.style.border = "3px solid var(--clr-secondary-100)";
};