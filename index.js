const shareBtnOff = document.querySelectorAll(`.shareBtnOff`)[0];
const shareBtnOn = document.querySelectorAll(`.shareBtnOn`)[0];
const profile = document.querySelectorAll(`.profile`)[0];
const shareState = document.querySelectorAll(`.shareState`)[0];

shareBtnOff.addEventListener(`click`, event => {
    profile.style.display = "none";
    shareState.style.display = "flex";
})

shareBtnOn.addEventListener(`click`, event => {
    profile.style.display = "flex";
    shareState.style.display = "none";
})