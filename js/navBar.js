// Navigation Bar JS is here...
function activeNav(position) {
  const allNavLinks = document.querySelectorAll(".nav__link");
  const allBtns = document.querySelectorAll(".btns");

  allNavLinks.forEach((navLink, index) => {
    navLink.classList.toggle("nav__link--selected", index === position);
    allBtns[index].style.display = index === position ? "flex" : "none";
  });
}
