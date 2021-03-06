const openSideBarBtn = document.querySelector("#hamburger");
const closeSideBarBtn = document.querySelector("#sidebar_close");

const sidebar = document.querySelector(".sidebar");

openSideBarBtn.addEventListener("click", () => {
  sidebar.style.display = "block";
});

closeSideBarBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});
