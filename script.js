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
// let seeMore = document.querySelector("#see-more");
// let currentItem = 2;
// seeMore.onclick = () => {
//   let boxes = [...document.querySelectorAll(".project-tile")];
//   for (var i = currentItem; i < currentItem + 2; i++) {
//     if (i >= boxes.length) {
//       seeMore.innerText = "See me";
//       break;
//     }
//     boxes[i].style.display = "inline-block";
//     console.log(i);
//   }
//   if (currentItem < boxes.length) {
//     currentItem += 2;
//   }
//   console.log(currentItem);
//   if (currentItem >= boxes.length) {
//     seeMore.innerText = "See less";
//     seeMore.onclick = (currentItem) => {
//       const boxes2 = document.querySelectorAll(".project-tile");
//       const boxesArray = Array.from(boxes2);
//       const remainingElements = boxesArray.slice(2);
//       remainingElements.forEach((boxes2) => {
//         boxes2.style.display = "none";
//       });
//       seeMore.innerText = "See More";
//       currentItem = 2;
//     };
//   }
// };

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
    seeMore.innerText =
      seeMore.innerText === "See More" ? "See less" : "See More";
  }
  if (currentItem >= boxes.length + 2) {
    toggleSeeMore();
    seeMore.innerText = "See More";
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
