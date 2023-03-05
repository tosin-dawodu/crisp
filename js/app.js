let seeAll = document.querySelector(".see-all");
let rightArrow = document.getElementById("see-arrow");
seeAll.addEventListener("mouseover", (event) => {
  rightArrow.setAttribute("src", "/styles/images/black-see-arrow.svg");
});
seeAll.addEventListener("mouseleave", (event) => {
  rightArrow.setAttribute("src", "/styles/images/see-arrow.svg");
});
