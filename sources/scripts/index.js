const mHeroBg = document.getElementById("mHeroBg");
const mHeroRight = document.getElementById("mHeroRight");
const mHeroSec = document.getElementById("mHeroSection");
const mThumbDesc = document.getElementById("mThumbDesc");

const mHeroThumbCity = document.getElementById("mHeroThumb1");
const mHeroThumbWater = document.getElementById("mHeroThumb2");
const mHeroThumbMountain = document.getElementById("mHeroThumb3");
const mHeroThumbHistory = document.getElementById("mHeroThumb4");
const mHeroThumbNature = document.getElementById("mHeroThumb5");

const mHeroCircle = document.getElementById("mHeroCircle");
const mCircleNext = document.getElementById("mCircleNext");
const mCirclePrev = document.getElementById("mCirclePrev");
const mContinueRotation = document.getElementById("mContinueRotation");
const mCircleText = document.getElementById("mCircleText");
const mCircleImage1 = document.getElementById("mCircleImage1");
const mCircleImage2 = document.getElementById("mCircleImage2");
const mCircleImage3 = document.getElementById("mCircleImage3");
const mCircleImage4 = document.getElementById("mCircleImage4");
const mCircleImage5 = document.getElementById("mCircleImage5");
const mCircleImage6 = document.getElementById("mCircleImage6");

const mCategories = [
    {
        category : "cosmopolitan lights",
        backgroundUrl : "./sources/videos/city.mp4",
        poster : "./sources/images/hero-section-thumbnails/city-poster.jpg",
        accent: "var(--clr-accent-lights)",
        accentLight: "var(--clr-accent-lights-100",
        circleImage : [
            "./sources/images/cosmopolitan-lights/star-city.webp", 
            "./sources/images/cosmopolitan-lights/chinatown.jpg",
            "./sources/images/cosmopolitan-lights/mall-of-asia.jpg",
            "./sources/images/cosmopolitan-lights/manila-ocean-park.jpg",
            "./sources/images/cosmopolitan-lights/solaire.jpg",
            "./sources/images/cosmopolitan-lights/ccp.webp"
        ],
        circleText : [
            "Star City Amusement Park in Pasay",
            "Chinatown in Binondo Manila",
            "Mall of Asia in Pasay City",
            "Manila Ocean Park",
            "Solaire Resort & Casino Manila",
            "Cultural Center of the Philippines in Pasay City"
        ]
    }, {
        category : "dive under water",
        backgroundUrl : "./sources/videos/water.mp4",
        poster : "./sources/images/hero-section-thumbnails/water-poster.jpg",
        accent: "var(--clr-accent-water)",
        accentLight: "var(--clr-accent-water-100",
        circleImage : [
            "./sources/images/dive-under-water/el-nido-eibner-saliba-3T9dDY0WqDI-unsplash.jpg", 
            "./sources/images/dive-under-water/el-nido-eibner-saliba-3T9dDY0WqDI-unsplash.jpg",
            "./sources/images/dive-under-water/el-nido-eibner-saliba-3T9dDY0WqDI-unsplash.jpg",
            "./sources/images/dive-under-water/el-nido-eibner-saliba-3T9dDY0WqDI-unsplash.jpg",
            "./sources/images/dive-under-water/el-nido-eibner-saliba-3T9dDY0WqDI-unsplash.jpg",
            "./sources/images/dive-under-water/el-nido-eibner-saliba-3T9dDY0WqDI-unsplash.jpg"
        ],
        circleText : [
            "dive under water",
            "dive under water",
            "dive under water",
            "dive under water",
            "dive under water",
            "dive under water"
        ]
    }, {
        category : "explore the summit",
        backgroundUrl : "./sources/videos/mountain.mp4",
        poster : "./sources/images/hero-section-thumbnails/mountain-poster.jpg",
        accent: "var(--clr-accent-summit)",
        accentLight: "var(--clr-accent-summit-100",
        circleImage : [
            "./sources/images/explore-the-summit/mount-pulag-joanne-caselyn-kCGhXLU32Bg-unsplash.jpg", 
            "./sources/images/explore-the-summit/mount-pulag-joanne-caselyn-kCGhXLU32Bg-unsplash.jpg",
            "./sources/images/explore-the-summit/mount-pulag-joanne-caselyn-kCGhXLU32Bg-unsplash.jpg",
            "./sources/images/explore-the-summit/mount-pulag-joanne-caselyn-kCGhXLU32Bg-unsplash.jpg",
            "./sources/images/explore-the-summit/mount-pulag-joanne-caselyn-kCGhXLU32Bg-unsplash.jpg",
            "./sources/images/explore-the-summit/mount-pulag-joanne-caselyn-kCGhXLU32Bg-unsplash.jpg"
        ],
        circleText : [
            "explore the summit",
            "explore the summit",
            "explore the summit",
            "explore the summit",
            "explore the summit",
            "explore the summit"
        ]
    }, {
        category : "look back in history",
        backgroundUrl : "./sources/videos/history.mp4",
        poster : "./sources/images/hero-section-thumbnails/history-poster.jpg",
        accent: "var(--clr-accent-history)",
        accentLight: "var(--clr-accent-history-100",
        circleImage : [
            "./sources/images/look-back-in-history/calle-crisologo-593843_1920.jpg", 
            "./sources/images/look-back-in-history/calle-crisologo-593843_1920.jpg",
            "./sources/images/look-back-in-history/calle-crisologo-593843_1920.jpg",
            "./sources/images/look-back-in-history/calle-crisologo-593843_1920.jpg",
            "./sources/images/look-back-in-history/calle-crisologo-593843_1920.jpg",
            "./sources/images/look-back-in-history/calle-crisologo-593843_1920.jpg"
        ],
        circleText : [
            "look back in history",
            "look back in history",
            "look back in history",
            "look back in history",
            "look back in history",
            "look back in history"
        ]
    }, {
        category : "nature and culture",
        backgroundUrl : "./sources/videos/nature.mp4",
        poster : "./sources/images/hero-section-thumbnails/nature-poster.jpg",
        accent: "var(--clr-accent-culture)",
        accentLight: "var(--clr-accent-culture-100",
        circleImage : [
            "./sources/images/nature-and-culture/ifugao-ar-2FsniOcLPj8-unsplash.jpg", 
            "./sources/images/nature-and-culture/ifugao-ar-2FsniOcLPj8-unsplash.jpg",
            "./sources/images/nature-and-culture/ifugao-ar-2FsniOcLPj8-unsplash.jpg",
            "./sources/images/nature-and-culture/ifugao-ar-2FsniOcLPj8-unsplash.jpg",
            "./sources/images/nature-and-culture/ifugao-ar-2FsniOcLPj8-unsplash.jpg",
            "./sources/images/nature-and-culture/ifugao-ar-2FsniOcLPj8-unsplash.jpg"
        ],
        circleText : [
            "nature and culture",
            "nature and culture",
            "nature and culture",
            "nature and culture",
            "nature and culture",
            "nature and culture"
        ]
    }
];

let lastClickedThumb = mCategories[0];

// Hero thumbnail events
window.addEventListener("scroll", () => {
    if (window.scrollY >= mHeroSec.offsetHeight) {
        mHeroBg.pause();
    } else {
        mHeroBg.play( );
    };
});

mHeroThumbCity.addEventListener("click", () => {
    updateHero(mCategories[0], mHeroThumbCity);
});
mHeroThumbWater.addEventListener("click", () => {
    updateHero(mCategories[1], mHeroThumbWater);
});
mHeroThumbMountain.addEventListener("click", () => {
    updateHero(mCategories[2], mHeroThumbMountain);
});
mHeroThumbHistory.addEventListener("click", () => {
    updateHero(mCategories[3], mHeroThumbHistory);
});
mHeroThumbNature.addEventListener("click", () => {
    updateHero(mCategories[4], mHeroThumbNature);
});

mHeroThumbCity.addEventListener("mouseover", () => {
    hoverThumb(mCategories[0]);
});
mHeroThumbWater.addEventListener("mouseover", () => {
    hoverThumb(mCategories[1]);
});
mHeroThumbMountain.addEventListener("mouseover", () => {
    hoverThumb(mCategories[2]);
});
mHeroThumbHistory.addEventListener("mouseover", () => {
    hoverThumb(mCategories[3]);
});
mHeroThumbNature.addEventListener("mouseover", () => {
    hoverThumb(mCategories[4]);
});

mHeroThumbCity.addEventListener("mouseout", () => {
    hoverOutThumb();
});
mHeroThumbWater.addEventListener("mouseout", () => {
    hoverOutThumb();
});
mHeroThumbMountain.addEventListener("mouseout", () => {
    hoverOutThumb();
});
mHeroThumbHistory.addEventListener("mouseout", () => {
    hoverOutThumb();
});
mHeroThumbNature.addEventListener("mouseout", () => {
    hoverOutThumb();
});


const updateHero = (categoryIndex, thumb) => {
    lastClickedThumb = categoryIndex;
    mCircleText.style.opacity = "0";
    mHeroBg.style.opacity = "0";
    setTimeout(() => {
        mHeroBg.setAttribute("src", categoryIndex.backgroundUrl);
        mHeroBg.setAttribute("poster", categoryIndex.poster);
    }, 300);
    setTimeout(() => {
        mHeroBg.style.opacity = "1";
    }, 1000);
    mHeroThumbCity.style.border = "none";
    mHeroThumbWater.style.border = "none";
    mHeroThumbMountain.style.border = "none";
    mHeroThumbHistory.style.border = "none";
    mHeroThumbNature.style.border = "none";
    thumb.style.border = "3px solid var(--clr-secondary-100)";
    mThumbDesc.style.transform = "translateY(3rem)";
    setTimeout(() => {
        mThumbDesc.textContent = categoryIndex.category;
        mThumbDesc.style.transform = "translateY(0)";
        mCircleText.style.color = lastClickedThumb.accentLight;
    }, 400);
    mHeroRight.style.transform = "translate(100%, 100%)";
    setTimeout(() => {
        mHeroRight.style.transform = "translate(0, 0)";
        mCircleImage1.setAttribute("src", categoryIndex.circleImage[0]);
        mCircleImage2.setAttribute("src", categoryIndex.circleImage[1]);
        mCircleImage3.setAttribute("src", categoryIndex.circleImage[2]);
        mCircleImage4.setAttribute("src", categoryIndex.circleImage[3]);
        mCircleImage5.setAttribute("src", categoryIndex.circleImage[4]);
        mCircleImage6.setAttribute("src", categoryIndex.circleImage[5]);
    }, 1000);
};

const hoverThumb = (categoryIndex) => {
    mThumbDesc.style.transform = "translateY(3rem)";
    setTimeout(() => {
        mThumbDesc.textContent = categoryIndex.category;
        mThumbDesc.style.transform = "translateY(0)";
    }, 400);
};

const hoverOutThumb = () => {
    mThumbDesc.style.transform = "translateY(3rem)";
    setTimeout(() => {
        mThumbDesc.textContent = lastClickedThumb.category;
        mThumbDesc.style.transform = "translateY(0)";
    }, 400);
};

// Hero section circle events
let currentRotation = 15;
let rotationContinue = true;
const circleArray = [mCircleImage1, mCircleImage2, mCircleImage3, mCircleImage4, mCircleImage5, mCircleImage6]
let currentCircle = 0;

const mrotationAnimation = (duration) => {
    mHeroCircle.style.transition = `transform ${duration}ms linear`;
    mCircleImage1.style.transition = `transform ${duration}ms linear`;
    mCircleImage2.style.transition = `transform ${duration}ms linear`;
    mCircleImage3.style.transition = `transform ${duration}ms linear`;
    mCircleImage4.style.transition = `transform ${duration}ms linear`;
    mCircleImage5.style.transition = `transform ${duration}ms linear`;
    mCircleImage6.style.transition = `transform ${duration}ms linear`;

    mHeroCircle.style.transform = `translate(-50%,-50%) rotate(${currentRotation}deg)`;
    mCircleImage1.style.transform = `rotate(${-currentRotation}deg)`;
    mCircleImage2.style.transform = `rotate(${-currentRotation}deg)`;
    mCircleImage3.style.transform = `rotate(${-currentRotation}deg)`;
    mCircleImage4.style.transform = `rotate(${-currentRotation}deg)`;
    mCircleImage5.style.transform = `rotate(${-currentRotation}deg)`;
    mCircleImage6.style.transform = `rotate(${-currentRotation}deg)`;
}

const mRotate = () => {
    mContinueRotation.style.display = "none";
    mCircleNext.style.display = "none";
    mCirclePrev.style.display = "none";
    currentRotation -= 60;
    mrotationAnimation(3000);
    if(currentCircle == 5) {
        currentCircle = 0;
    } else {
        currentCircle += 1;
    };
    let mRotateInterval = setInterval(() => {
        if (!rotationContinue) {
            clearInterval(mRotateInterval);
            return;
        } else if (!document.hidden){
            currentRotation -= 60;
            mrotationAnimation();
            if(currentCircle == 5) {
                currentCircle = 0;
            } else {
                currentCircle += 1;
            };
        };
    }, 3000);
};

const mRotateOnce = (direction) => {
    rotationContinue = false;
    if (direction == mCircleNext  && currentCircle == 5) {
        currentCircle = 0;
        currentRotation -= 60;
    } else if (direction == mCircleNext) {
        currentCircle += 1;
        currentRotation -= 60;
    } else if (direction == mCirclePrev && currentCircle == 0){
        currentCircle = 5;
        currentRotation += 60;
    } else {
        currentCircle -= 1;
        currentRotation += 60;
    };
    mContinueRotation.style.display = "none";
    mCircleText.style.opacity = "0";
    direction.style.display = "none";
    setTimeout(() => {
        direction.style.display = "block";
    }, 1000);
    setTimeout(() => {
        mUpdateCircleText();
    }, 1000);
    mrotationAnimation(1000);
};

const mUpdateCircleText = () => {
    if (rotationContinue) {
        setTimeout(() => {
            mContinueRotation.style.display = "block";
        }, 3000);
    } else {
        mContinueRotation.style.display = "block";
    };
    rotationContinue = false;
    setTimeout(() => {
        if(!rotationContinue) {
            mCircleNext.style.display = "block";
            mCirclePrev.style.display = "block";
        }
    }, 1000);
    mCircleText.textContent = lastClickedThumb.circleText[currentCircle];
    mCircleText.style.opacity = "1";
}

mCircleImage1.addEventListener("click", () => {mUpdateCircleText()});
mCircleImage2.addEventListener("click", () => {mUpdateCircleText()});
mCircleImage3.addEventListener("click", () => {mUpdateCircleText()});
mCircleImage4.addEventListener("click", () => {mUpdateCircleText()});
mCircleImage5.addEventListener("click", () => {mUpdateCircleText()});
mCircleImage6.addEventListener("click", () => {mUpdateCircleText()});

mContinueRotation.addEventListener("click", () => {
    mCircleText.style.opacity = "0";
    if(!rotationContinue){
        rotationContinue = true;
        mRotate();
    };
});

mContinueRotation.addEventListener("mouseover", () => {
    mContinueRotation.style.color = lastClickedThumb.accentLight;
    mContinueRotation.style.textShadow = `0 0 5px ${lastClickedThumb.accentLight}`;
});

mContinueRotation.addEventListener("mouseout", () => {
    mContinueRotation.style.color = "var(--clr-secondary-100)";
    mContinueRotation.style.textShadow = "none";
});

mCircleNext.addEventListener("click", () => {mRotateOnce(mCircleNext)});
mCirclePrev.addEventListener("click", () => {mRotateOnce(mCirclePrev)});

mRotate();