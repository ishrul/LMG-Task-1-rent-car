document.addEventListener("DOMContentLoaded", function () {
  let banner = document.getElementById("banner");
  let topLayer = document.querySelector(".top");
  let hanlde = document.querySelector(".handle");
  let skew = 0;
  let delta = 0;

  if (banner.className.indexOf("banner") != -1) {
    skew = 1000;
  }
  banner.addEventListener("mousemove", function (e) {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
    hanlde.style.left = e.clientX + delta + "px";
    topLayer.style.width = e.clientX + skew + delta + "px";
  });
});
