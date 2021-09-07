window.onload = function () {
  function myFunction(x) {
    if (x.matches) {
      // If media query matches
      var tooltip = document.getElementsByClassName("tooltip");
      var tooltipContent = document.getElementsByClassName("tooltip__content");

      tooltip[0].onclick = function () {
        tooltipContent[0].classList.toggle("tooltip__content-visible");
      };
    } else {
      var tooltip = document.getElementsByClassName("tooltip");
      var share = document.getElementsByClassName("share");
      var shareMobile = document.getElementsByClassName("share__mobile");
      var shareMobileTooltip = document.getElementsByClassName(
        "share__mobile_tooltip"
      );

      tooltip[0].onclick = function () {
        share[0].classList.toggle("share-blue");
        shareMobile[0].classList.toggle("share__mobile-invisible");
        shareMobileTooltip[0].classList.toggle("share__mobile_tooltip-visible");
      };
    }
  }

  var x = window.matchMedia("(min-width: 769px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes
};
