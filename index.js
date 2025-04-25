document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        contents.forEach(c => c.classList.remove("active"));
        contents[index].classList.add("active");
      });
    });
  });