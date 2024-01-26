const targetElements = document.querySelectorAll("#menu a");
const header = document.querySelector("header");
let timeoutId;

targetElements.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    header.classList.add("extended");
    document.querySelector("body").setAttribute("data-overlay", "true");
    clearTimeout(timeoutId); // Clear any existing timeout
  });

  element.addEventListener("mouseleave", function () {
    // Add a small delay before removing the class
    timeoutId = setTimeout(function () {
      header.classList.remove("extended");
      document.querySelector("body").setAttribute("data-overlay", "false");
    }, 200); // Adjust the delay (in milliseconds) as needed
  });
});
