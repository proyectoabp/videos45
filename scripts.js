// Seleccionar los elementos
const video = document.getElementById("video");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const volumeSlider = document.getElementById("volumeSlider");
const progressBar = document.getElementById("progressBar");
const fullscreenButton = document.getElementById("fullscreenButton");

// Reproducir el video
playButton.addEventListener("click", () => {
  video.play();
  playButton.style.display = "none";
  pauseButton.style.display = "inline-block";
});

// Pausar el video
pauseButton.addEventListener("click", () => {
  video.pause();
  playButton.style.display = "inline-block";
  pauseButton.style.display = "none";
});

// Actualizar la barra de progreso en tiempo real
video.addEventListener("timeupdate", () => {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.value = progress;
});

// Saltar a una parte específica del video
progressBar.addEventListener("input", (e) => {
  const seekTime = (e.target.value / 100) * video.duration;
  video.currentTime = seekTime;
});

// Cambiar el volumen
volumeSlider.addEventListener("input", (e) => {
  video.volume = e.target.value;
});

// Alternar pantalla completa
fullscreenButton.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});