const $skuloadAbout = document.querySelector(".content-about");
// Loading finished
setTimeout(() => {
    $skuloadAbout.classList.remove("skeleton");
    $skuloadAbout.querySelectorAll(".hide-about")
        .forEach(
            (skuloadAbout) => skuloadAbout.classList.remove("hide-about")
        );
}, 3500);

const $skuloadSkills = document.querySelector(".content-skills");
// Loading finished
setTimeout(() => {
    $skuloadSkills.classList.remove("skeleton");
    $skuloadSkills.querySelectorAll(".hide-skills")
        .forEach(
            (skuloadSkills) => skuloadSkills.classList.remove("hide-skills")
        );
}, 3500);

const $skuloadPorto = document.querySelector(".content-porto");
// Loading finished
setTimeout(() => {
    $skuloadPorto.classList.remove("skeleton");
    $skuloadPorto.querySelectorAll(".hide-porto")
        .forEach(
            (skuloadPorto) => skuloadPorto.classList.remove("hide-porto")
        );
}, 3500);

const $skuloadContact= document.querySelector(".content-contact");
// Loading finished
setTimeout(() => {
    $skuloadContact.classList.remove("skeleton");
    $skuloadContact.querySelectorAll(".hide-contact")
        .forEach(
            (skuloadContact) => skuloadContact.classList.remove("hide-contact")
        );
}, 3500);