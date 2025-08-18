const shareBtnOff = document.querySelectorAll(`.shareBtnOff`)[0];
const shareBtnOffIcon = document.querySelectorAll(`.shareBtnOff i`)[0];
const shareBtnOn = document.querySelectorAll(`.shareBtnOn`)[0];
const profile = document.querySelectorAll(`.profile`)[0];
const shareState = document.querySelectorAll(`.shareState`)[0];
const shareDesktop = document.querySelectorAll(`.shareDesktop`)[0];
const triangle = document.querySelectorAll(`.triangle`)[0];
const mq = window.matchMedia("(min-width: 800px)");
let shareStateDesktop = false;

shareBtnOff.addEventListener(`click`, event => {
    if (mq.matches) {
        if (shareStateDesktop) {
            shareDesktop.style.opacity = "0";
            shareDesktop.style.pointerEvents = "none";
            triangle.style.opacity = "0";
            triangle.style.pointerEvents = "none";
            shareBtnOff.style.backgroundColor = "var(--lightGrayishBlue)";
            shareBtnOffIcon.style.color = "var(--desaturatedDarkBlue)";
            shareStateDesktop = false;
        }
        else {
            shareDesktop.style.opacity = "1";
            shareDesktop.style.pointerEvents = "all";
            triangle.style.opacity = "1";
            triangle.style.pointerEvents = "all";
            shareBtnOff.style.backgroundColor = "var(--desaturatedDarkBlue)";
            shareBtnOffIcon.style.color = "white";
            shareStateDesktop = true;
        }
    }
    else {
        profile.style.opacity = "0";
        profile.style.height = "0";
        profile.style.padding = "0 2rem";
        profile.style.pointerEvents = "none";
        shareState.style.opacity = "1";
        shareState.style.height = "64px";
        shareState.style.padding = "1rem 2rem";
        shareState.style.pointerEvents = "all";  
    }
})

shareBtnOn.addEventListener(`click`, event => {
    profile.style.opacity = "1";
    profile.style.height = "64px";
    profile.style.padding = "1rem 2rem";
    profile.style.pointerEvents = "all";
    shareState.style.opacity = "0";
    shareState.style.height = "0";
    shareState.style.padding = "0 2rem";
    shareState.style.pointerEvents = "none";
})

mq.addEventListener("change", event => {
    if (event.matches) {
        profile.style.opacity = "1";
        profile.style.height = "64px";
        profile.style.padding = "1rem 2rem";
        profile.style.pointerEvents = "all";
        shareState.style.opacity = "0";
        shareState.style.height = "0";
        shareState.style.padding = "0 2rem";
        shareState.style.pointerEvents = "none";
    }
    else {
        shareDesktop.style.opacity = "0";
        shareDesktop.style.pointerEvents = "none";
        triangle.style.opacity = "0";
        triangle.style.pointerEvents = "none";
        shareBtnOff.style.backgroundColor = "var(--lightGrayishBlue)";
        shareBtnOffIcon.style.color = "var(--desaturatedDarkBlue)";
        shareStateDesktop = false;
    }
});