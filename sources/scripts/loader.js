const loaderWrapper = document.getElementById("loaderWrapper");
const loaderText1 = document.getElementById("loaderText1");
const loaderText2 = document.getElementById("loaderText2");
const loaderText3 = document.getElementById("loaderText3");
const loaderTextSub = document.getElementById("loaderTextSub");
const loaderBar = document.getElementById("loaderBar");
const loaderPercent = document.getElementById("loaderPercent");
const loaderSub = document.getElementById("loaderSub");
const loaderLogo = document.getElementById("loaderLogo");
const loaderText2Sub = document.getElementById("loaderText2Sub");

let percentValue = 1;
let documentLoaded = false;

window.addEventListener("load", (event) => {
    documentLoaded = true;
});

const isLoaded = () => {
    let loadInterval = setInterval(() => {
    if (documentLoaded){
            exitLoader();
            clearInterval(loadInterval);
        } else if (percentValue < 100) {
            loaderBar.style.width = percentValue + "%";
            loaderPercent.textContent = percentValue;
            percentValue++;
        }
    }, 500);
};

const percentAnimation = (interval, limit) => {
    let percentInterval = setInterval(() => {
        if (percentValue > limit) {
            clearInterval(percentInterval);
        } else {
            loaderBar.style.width = percentValue + "%";
            loaderPercent.textContent = percentValue;
            percentValue++;
        }
    }, interval);
};

function animationDelay(time){
    return new Promise ((resolve) => {
        setTimeout(resolve, time);
    })
}

async function animateLoader() {
    try {
        await animationDelay(0)
        loaderText1.style.transition = "transform 800ms ease-in-out, opacity 800ms ease-in-out"
        loaderText2.style.transition = "transform 800ms ease-in-out, opacity 800ms ease-in-out"
        loaderText3.style.transition = "transform 800ms ease-in-out, opacity 800ms ease-in-out"
        loaderText3.style.textAlign = "right"
        loaderSub.style.transition = "opacity 500ms ease-in-out"
        loaderLogo.style.transition = "opacity 800ms ease-in-out"

        await animationDelay(800)
        loaderText1.style.opacity = "1"
        loaderText1.style.transform = "translateY(0)"

        await animationDelay(200)
        loaderText2.style.opacity = "1"
        loaderText2.style.transform = "translateY(0)"

        await animationDelay(200)
        loaderText3.style.opacity = "1"
        loaderText3.style.transform = "translateY(0)"

        await animationDelay(1000)
        loaderSub.style.opacity = "1"

        await animationDelay(500)
        percentAnimation(30, 75)

        await animationDelay(2300)
        isLoaded()

    } catch(err){
        console.log(err);
    }
}

async function exitLoader () {
    try {
        await animationDelay(0)
        percentAnimation(80, 100)

        await animationDelay(1000)
        loaderText3.style.transform = "translateY(50px)"

        await animationDelay(200)
        loaderText2.style.transform = "translateY(50px)"
        loaderText2.style.opacity = "0"

        await animationDelay(200)
        loaderText1.style.transform = "translateY(50px)"
        loaderText1.style.opacity = "0"

        await animationDelay(800)
        loaderText2Sub.style.overflow = "visible"
        loaderLogo.style.opacity = "1"
        loaderText3.style.textAlign = "center"
        loaderText3.textContent = "L A K B A Y"
        loaderText3.style.fontSize = "clamp(0.6rem, 1.2vw, 1.2rem)"
        loaderText3.style.transform = "translateY(0)"

        await animationDelay(800)
        loaderSub.style.transition = "opacity 500ms ease-in-out"
        loaderSub.style.opacity = "0"
        loaderTextSub.style.transition = "opacity 1000ms ease-in-out, transform 1000ms ease-in-out"
        loaderTextSub.style.transform = "translateY(60px)"

        await animationDelay(2000)
        loaderWrapper.style.clipPath = "circle(100%)"

        await animationDelay(800)
        loaderTextSub.style.opacity = "0"
        document.body.classList.remove("overflow-hidden")
        loaderWrapper.style.transition = "clip-path 1000ms cubic-bezier(0.14, 0.79, 0.18, 0.01)"
        loaderWrapper.style.clipPath = "circle(0%)"

        await animationDelay(1200)
        loaderWrapper.style.display = "none"

    } catch(err) {
        console.log(err)
    }
};

animateLoader();