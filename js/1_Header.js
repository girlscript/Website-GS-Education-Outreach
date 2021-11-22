const navLink = document.querySelectorAll('.Header nav ul li');
const sections = document.querySelectorAll("div");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight/10)) {
      current = section.getAttribute("id");
    }
  });
  document.querySelectorAll('.Header nav ul li').forEach((li) => {
	var div_child = li.lastElementChild;
	div_child.style.opacity=0; 
    if (li.classList.contains(current)) {
      div_child.style.opacity=1;
    }
  });
});