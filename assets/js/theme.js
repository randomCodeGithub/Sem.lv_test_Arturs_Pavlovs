let anchorLink = document.getElementById("anchor-link");

//SCROLL TO TOP 

anchorLink.addEventListener("click", function () {
  window.scrollTo(0, 0);
});



let timer = null;
// IF NOT SCROLLING EVENT LISTENER
window.addEventListener(
  "scroll",
  function () {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      if (
        !(window.innerHeight + window.scrollY >= document.body.offsetHeight)
      ) {
        anchorLink.style.display = "none";
      } else {
        anchorLink.style.display = "flex";
      }
    }, 1000);
  },
  false
);

// IF NOT SCROLLING EVENT LISTENER
window.addEventListener(
  "scroll",
  function () {
    anchorLink.style.display = "flex";
    if (window.scrollY == 0) {
      anchorLink.style.display = "none";
    }
  },
  true
);

// OPEN OVERLAY NAVIGATION
function openNav() {
  document.getElementById("overlay").style.width = "100%";
  document.getElementById("overlay").style.height = "100%";
}

// CLOSE OVERLAY NAVIGATION
function closeNav() {
  document.getElementById("overlay").style.removeProperty("width");
  document.getElementById("overlay").style.removeProperty("height");
}

//SCROLL TO SECTION 
function scrollToId(ElementId) {
  let id = document.getElementById(ElementId).offsetTop;
  window.scrollTo(0, id - 80);
}
