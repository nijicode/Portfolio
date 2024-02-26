const tabLinks = document.querySelector(".tab-links");
const skill = document.querySelector("#skill");
const experience = document.querySelector("#experience");
const education = document.querySelector("#education");
const skills = document.querySelector("#skills");
const experiences = document.querySelector("#experiences");
const educations = document.querySelector("#educations");

function activeLink(param) {
  if (param === "experience") {
    skill.classList.remove("active-links");
    education.classList.remove("active-links");
    experience.classList.add("active-links");
    skills.style.display = "none";
    educations.style.display = "none";
    experiences.style.display = "inline";
  } else if (param === "skill") {
    experience.classList.remove("active-links");
    education.classList.remove("active-links");
    skill.classList.add("active-links");
    educations.style.display = "none";
    experiences.style.display = "none";
    skills.style.display = "inline";
  } else if (param === "education") {
    skill.classList.remove("active-links");
    experience.classList.remove("active-links");
    education.classList.add("active-links");
    experiences.style.display = "none";
    skills.style.display = "none";
    educations.style.display = "inline";
  }
}
let seeMore = document.querySelector("#see-more");
let currentItem = 2;
const work = document.querySelector("#projects");
seeMore.onclick = () => {
  const boxes = document.querySelectorAll(".project-tile");

  for (let i = currentItem; i < currentItem + 2; i++) {
    if (i >= boxes.length) {
      break;
    }
    boxes[i].style.display = "inline-block";
    seeMore.scrollIntoView(false);
  }

  currentItem += 2;

  if (currentItem >= boxes.length) {
    seeMore.innerHTML =
      seeMore.innerHTML === `<i class="fa-solid fa-chevron-down"></i>`
        ? `<i class="fa-solid fa-chevron-up"></i>`
        : `<i class="fa-solid fa-chevron-down"></i>`;
  }
  if (currentItem >= boxes.length + 2) {
    toggleSeeMore();
    seeMore.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
  }
};

function toggleSeeMore() {
  const boxes = document.querySelectorAll(".project-tile");
  const remainingElements = Array.from(boxes).slice(2);
  remainingElements.forEach((box) => {
    box.style.display = "none";
  });
  currentItem = 2;
  work.scrollIntoView({ behavior: "smooth" });
  console.log(work.href);
}
const menuBar = document.getElementById("menu-bar");
const exitBar = document.getElementById("exit-bar");
const sideBar = document.getElementById("side-navbar");

menuBar.onclick = function () {
  sideBar.style.right = "0";
};
exitBar.onclick = function () {
  sideBar.style.right = "-280px";
};

function hideElementAbove490px() {
  if (window.innerWidth > 490) {
    sideBar.style.display = "none";
  } else {
    sideBar.style.display = "inline-block";
    sideBar.style.right = "-280px";
  }
}
hideElementAbove490px();
window.addEventListener("resize", hideElementAbove490px);
