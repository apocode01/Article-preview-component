const shareBtnOff = document.querySelectorAll(`.shareBtnOff`)[0];
const shareBtnOn = document.querySelectorAll(`.shareBtnOn`)[0];
const profile = document.querySelectorAll(`.profile`)[0];
const shareState = document.querySelectorAll(`.shareState`)[0];

shareBtnOff.addEventListener(`click`, event => {
    //profile.style.display = "none";
    //shareState.style.display = "flex";
    profile.style.opacity = "0";
    profile.style.height = "0";
    profile.style.padding = "0 2rem";
    profile.style.pointerEvents = "none";
    shareState.style.opacity = "1";
    shareState.style.height = "64px";
    shareState.style.padding = "1rem 2rem";
    shareState.style.pointerEvents = "all";
})

shareBtnOn.addEventListener(`click`, event => {
    //profile.style.display = "flex";
    //shareState.style.display = "none";
    profile.style.opacity = "1";
    profile.style.height = "64px";
    profile.style.padding = "1rem 2rem";
    profile.style.pointerEvents = "all";
    shareState.style.opacity = "0";
    shareState.style.height = "0";
    shareState.style.padding = "0 2rem";
    shareState.style.pointerEvents = "none";
})