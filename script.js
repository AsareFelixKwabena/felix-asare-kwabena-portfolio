const typingText = document.getElementById("typing-text");

const titles = [
"Software Quality Assurance Engineer",
"Test Automation Engineer",
"Playwright Automation Specialist",
"Quality Advocate",
"QA Engineer @ Stanbic Bank Ghana"
];

let titleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

```
if (!typingText) return;

const currentTitle = titles[titleIndex];

if (!deleting) {

    typingText.textContent =
        currentTitle.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentTitle.length) {
        deleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }

} else {

    typingText.textContent =
        currentTitle.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
        deleting = false;
        titleIndex++;

        if (titleIndex >= titles.length) {
            titleIndex = 0;
        }
    }

}

setTimeout(typeEffect, deleting ? 50 : 100);
```

}

typeEffect();

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

```
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
```

}

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

```
let current = "";

sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if(window.scrollY >= sectionTop){
        current = section.getAttribute("id");
    }

});

navItems.forEach(link => {

    link.classList.remove("active-link");

    if(link.getAttribute("href").includes(current)){
        link.classList.add("active-link");
    }

});
```

});

window.addEventListener("load", () => {

```
const hero = document.querySelector(".hero-content");

if(hero){

    hero.style.opacity = "0";
    hero.style.transform = "translateY(30px)";

    setTimeout(() => {

        hero.style.transition = "all 1s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0px)";

    }, 300);

}
```

});

const footer = document.querySelector("footer p");

if(footer){

```
footer.innerHTML =
`© ${new Date().getFullYear()} Felix Kwabena Asare | Software Quality Assurance Engineer`;
```

}

console.log("Portfolio Loaded Successfully");
