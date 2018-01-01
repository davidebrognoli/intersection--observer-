function calculateTranslation(position) {
  switch (position) {
    case 0:
      prev.style.display = 'none';
      next.style.display = 'block';
      break;
    case maxLength:
      prev.style.display = 'block';
      next.style.display = 'none';
      break;
    default:
      prev.style.display = 'block';
      next.style.display = 'block';
  }

  const translate = position * -100;
  document.getElementById('carousel').style.transform = "translateX(" + translate + "%)";
}

let position = 0;
const prev = document.getElementById('nav-prev');
const items = document.querySelectorAll('.carousel-item').length;
const maxLength = items - 1;

prev.addEventListener('click', function (evt) {
  evt.preventDefault();
  position = position == 0 ? 0 : position - 1;
  calculateTranslation(position);
});

const next = document.getElementById('nav-next');
next.addEventListener('click', function (evt) {
  evt.preventDefault();
  position = position == maxLength ? maxLength : position + 1;
  calculateTranslation(position);
});

calculateTranslation(0);
