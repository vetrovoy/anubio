const dropdown = document.querySelectorAll(".side-menu__item-list");


for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {

    dropdown[i].classList.toggle("dropdown-show");

    const dropdownContent = dropdown[i].nextElementSibling;
    const arrowToggle = dropdown[i].childNodes[1];

    if (dropdownContent.style.display === "block") {

      arrowToggle.classList.toggle("arrow_toggle");
      dropdownContent.style.display = "none";
    } else {

      arrowToggle.classList.toggle("arrow_toggle");
      dropdownContent.style.display = "block";
    }
  });
}
