function reveal() {
  var r = document.querySelectorAll(".reveal");


  for (var i = 0; i < r.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = r[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      r[i].classList.add("active");
    } else {
      r[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
