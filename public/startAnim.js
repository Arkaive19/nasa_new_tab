const startBgAnimation = () => {
  const items = document.querySelectorAll("#bg-anim > li");

  items.forEach((el) => {
    el.style.opacity = "1";
    el.style.animationPlayState = "running";
  });
};

const observer = new MutationObserver(() => {
  const overlayExists = document.querySelector(".overlay");

  if (!overlayExists) {
    startBgAnimation();
    observer.disconnect();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

if (!document.querySelector(".overlay")) {
  startBgAnimation();
}
