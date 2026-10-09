const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("visible"));
}

const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");
const label = document.getElementById("musicLabel");
toggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      toggle.classList.add("playing");
      label.textContent = "Pause our song";
    } catch (error) {
      label.textContent = "Add assets/song.mp3";
    }
  } else {
    music.pause();
    toggle.classList.remove("playing");
    label.textContent = "Play our song";
  }
});
