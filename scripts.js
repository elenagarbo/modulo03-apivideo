let video = document.getElementById("video");
let videoWrapper = document.getElementById("videoWrapper");
var valueVolume = 0.1;

function addVideo() {
  var file = document.getElementById("take-video").files[0];

  if (
    file.type != "video/mp4" &&
    file.type != "video/webm" &&
    file.type != "video/ogg"
  ) {
    alert("Introduce un archivo valido de tipo video");
  } else {
    var url = URL.createObjectURL(file);
    videoWrapper.style.display = "block";

    // Primer frame del video cargado correctamente
    video.addEventListener("loadeddata", () => {
      alert("El video está listo");
    });
    video.src = url;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.File && window.FileReader && window.FileList && window.Blob) {

    // .getAsDataUrl();
    // Agregar video
    document.getElementById("take-video").addEventListener("change", () => {
      addVideo();
    });

    // Iniciar video
    document.getElementById("play").addEventListener("click", () => {
      video.play();
    });

    // Pausar video
    document.getElementById("pause").addEventListener("click", () => {
      video.pause();
    });

    // Subir volumen video
    document.getElementById("up-volume").addEventListener("click", () => {
      if (video.volume < 1) {
        video.volume = Math.min(1, video.volume + valueVolume);
      } else {
        alert("No puedes subir más el volumen");
      }
    });

    // Bajar volumen video
    document.getElementById("down-volume").addEventListener("click", () => {
      if (video.volume <= 0 || video.volume === Number.EPSILON) {
        alert("No puedes bajar más el volumen");
      } else {
        video.volume = Math.max(0, video.volume - valueVolume);
      }
    });
  } else {
    alert("File APIs no están soportadas por este navegador.");
  }
});
