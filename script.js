// =========================
// TYPING EFFECT
// =========================

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

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const observer = new IntersectionObserver(

(entries) => {

```
entries.forEach(entry => {

    if (entry.isIntersecting) {
        entry.target.classList.add("show");
    }

});
```

},
{
threshold: 0.15
}

);

document.querySelectorAll(
".section, .stat-card, .skill-card, .project-card, .timeline-item"
).forEach((el) => {

```
observer.observe(el);
```

});

// =========================
// MOBILE MENU
// =========================

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

```
navLinks.classList.toggle("active");
```

});

// =========================
// ACTIVE NAVIGATION LINK
// =========================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

```
let current = "";

sections.forEach(section => {

    const sectionTop =
    section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
    }

});

navItems.forEach(link => {

    link.classList.remove("active-link");

    if (
        link.getAttribute("href")
        .includes(current)
    ) {
        link.classList.add("active-link");
    }

});
```

});

// =========================
// HERO FADE-IN
// =========================

window.addEventListener("load", () => {

```
const hero =
document.querySelector(".hero-content");

hero.style.opacity = "0";
hero.style.transform = "translateY(30px)";

setTimeout(() => {

    hero.style.transition =
    "all 1.2s ease";

    hero.style.opacity = "1";
    hero.style.transform =
    "translateY(0px)";

}, 300);
```

});

// =========================
// COUNTER ANIMATION
// =========================

const counters =
document.querySelectorAll(".stat-card h3");

function runCounter(counter) {

```
const target =
counter.innerText.replace(/\D/g, "");

if (!target) return;

let current = 0;

const increment =
target / 50;

const updateCounter = () => {

    current += increment;

    if (current < target) {

        counter.innerText =
        Math.ceil(current) +
        counter.innerText.replace(/[0-9]/g, "");

        requestAnimationFrame(updateCounter);

    } else {

        const original =
        counter.getAttribute("data-original");

        if (original) {
            counter.innerText = original;
        }
    }
};

updateCounter();
```

}

counters.forEach(counter => {

```
counter.setAttribute(
    "data-original",
    counter.innerText
);
```

});

const counterObserver =
new IntersectionObserver(entries => {

```
entries.forEach(entry => {

    if (entry.isIntersecting) {

        const counter =
        entry.target.querySelector("h3");

        if (counter) {
            runCounter(counter);
        }

    }

});
```

},
{
threshold: 0.5
});

document
.querySelectorAll(".stat-card")
.forEach(card => {

```
counterObserver.observe(card);
```

});

// =========================
// CURRENT YEAR FOOTER
// =========================

const footer =
document.querySelector("footer p");

if (footer) {

```
footer.innerHTML =
`© ${new Date().getFullYear()} Felix Kwabena Asare | Software Quality Assurance Engineer`;
```

}

// =========================
// CONSOLE MESSAGE
// =========================

console.log(
"Felix Asare Portfolio Loaded Successfully 🚀"
);
