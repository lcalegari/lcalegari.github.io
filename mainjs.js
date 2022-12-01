let ind = 1;
show(ind);

function next(n) {
  show(ind += n);
}

function current(n) {
  show(ind = n);
}

function show(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {ind = 1}
  if (n < 1) {ind = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[ind-1].style.display = "block";
  dots[ind-1].className += " active";
}