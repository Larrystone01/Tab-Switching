const content = document.querySelectorAll(".tab-container");
const tabs = document.querySelectorAll(".tap");
const backGround = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => tab.classList.remove("a"));
    content.forEach((container) => container.classList.remove("active"));
    e.target.classList.add("a");
    const nextContent = e.target.nextElementSibling;
    if (nextContent && nextContent.classList.contains("tab-container")) {
      nextContent.classList.add("active");
    }

    backGround.forEach((bg) => {
      if (bg.classList.contains("ii")) {
        bg.style.backgroundColor = "blue";
      } else if (bg.classList.contains("iii")) {
        bg.style.backgroundColor = "green";
      } else if (bg.classList.contains("iv")) {
        bg.style.backgroundColor = "pink";
      }
    });

    e.preventDefault();
  });
});
