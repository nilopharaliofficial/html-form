// Toggle Sidebar
const toggleBtn = document.querySelector(".toggle-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

// Toggle Submenu
document.querySelectorAll(".has-submenu").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    item.classList.toggle("open");
  });
});

// Set Active Menu Item
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    document
      .querySelectorAll(".menu-item")
      .forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});
