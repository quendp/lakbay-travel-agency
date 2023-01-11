const parallaxElement = document.querySelectorAll(".parallax-scroll");
window.addEventListener("scroll", () => {
    const viewportHeight = document.getElementById("mHeroSection").clientHeight;
    for (let i of parallaxElement) {
        const elementHeight = i.clientHeight;
        const elementTop = i.getBoundingClientRect().top;
        const elementCentered = ((viewportHeight - elementHeight)/2)+100;
        const scrolled = (elementTop - elementCentered)*i.dataset.rate;
        if(elementTop <= viewportHeight && elementTop >= elementCentered && i.dataset.direction == "left") {
            i.style.transform = `translate(${-scrolled}px, 0)`;
        } else if (elementTop <= viewportHeight && elementTop >= elementCentered) {
            i.style.transform = `translate(${scrolled}px, 0)`;
        } else {
            i.style.transform = `translate(0, 0)`;
        }
    };
});