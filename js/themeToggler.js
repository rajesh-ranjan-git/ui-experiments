const body = document.querySelector("body");
const toggleBtn = document.querySelector("input");

// Default Theme (light)
body.classList.add("light");

toggleBtn.addEventListener("click", (e) => {
  if (e.target.checked) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
});
