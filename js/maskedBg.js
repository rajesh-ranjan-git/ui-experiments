window.addEventListener("load", () => {
  const page = document.querySelector(".page1");
  const time = new Date().getTime();
  page.style.setProperty("--mask-url", `url('/assets/mask.gif?${time}')`);
});

function restartMask() {
  const page = document.querySelector(".page1");
  const time = new Date().getTime();
  page.style.setProperty("--mask-url", `url('/assets/mask.gif?${time}')`);
}
