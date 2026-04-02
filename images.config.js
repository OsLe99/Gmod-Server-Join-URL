// ============================================================
//  IMAGES CONFIG
//  Edit the values below to change images on the site.
//  Use a local file path like "assets/media/photo.jpg"
//  or a full URL like "https://example.com/image.png".
// ============================================================

// --- Join page -----------------------------------------------
// The image or GIF shown while the server connection loads.
var joinPageImage = "assets/media/MajoraSpin.gif";

// --- Main page: hero banner ----------------------------------
// The large background image behind the main heading.
var heroBannerImage = "https://static-cdn.jtvnw.net/jtv_user_pictures/f839243d-8581-4160-9df4-5a21f1bd6b10-profile_banner-480.png";

// --- Main page: gallery (4 slots) ----------------------------
// Replace each value with a path to your screenshot or image.
var galleryImageA = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4000/ss_af060d0a9aeb6598e154c9704ce250b0e63b2266.1920x1080.jpg?t=1764757984"; // e.g. "assets/media/screenshot1.jpg"
var galleryImageB = "https://gaming-cdn.com/images/products/7119/orig/valheim-pc-mac-game-steam-cover.jpg?v=1706800610"; // e.g. "assets/media/screenshot2.jpg"
var galleryImageC = "assets/media/lunglungcancur.jpg"; // e.g. "assets/media/screenshot3.jpg"
var galleryImageD = "assets/media/AverageBasementDweller.png"; // e.g. "assets/media/screenshot4.jpg"

// ============================================================
//  DO NOT EDIT BELOW — this applies the settings above
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  function setImgSrc(selector, src) {
    var el = document.querySelector(selector);
    if (el && src) el.src = src;
  }

  function setBg(selector, url) {
    var el = document.querySelector(selector);
    if (el && url) el.style.backgroundImage = 'url("' + url + '")';
  }

  setImgSrc(".join-gif", joinPageImage);
  setBg(".hero-copy", heroBannerImage);
  setBg(".gallery-a", galleryImageA);
  setBg(".gallery-b", galleryImageB);
  setBg(".gallery-c", galleryImageC);
  setBg(".gallery-d", galleryImageD);
});
