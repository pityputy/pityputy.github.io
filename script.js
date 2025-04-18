// Get the current page's URL
const currentPage = window.location.pathname.split("/").pop();
// Get all navigation links
const navLinks = document.querySelectorAll(".navbar a.nav-link");
// Loop through the links and add the 'active' class to the matching link
navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});