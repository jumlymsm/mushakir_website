let current = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');
let timer;

// Build dots
slides.forEach((_, i) => {
  const d = document.createElement('button');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.onclick = () => goTo(i);
  dotsContainer.appendChild(d);
});

function updateSlider() {
  slides.forEach((s, i) => s.classList.toggle('active', i === current));
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
}

function changeSlide(dir) {
  current = (current + dir + slides.length) % slides.length;
  updateSlider();
  resetTimer();
}

function goTo(index) {
  current = index;
  updateSlider();
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(() => changeSlide(1), 5000);
}

timer = setInterval(() => changeSlide(1), 5000);

function handleSubmit(e) {
  e.preventDefault();
  alert('Thank you! We will contact you shortly to confirm your appointment.');
  e.target.reset();
}

// Fallback for broken brand logo urls
window.addEventListener('load', () => {
  document.querySelectorAll('.brand-logo-box img').forEach(img => {
    img.onerror = () => {
      img.onerror = null;
      img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iODAiIHJ4PSIxMiIgZmlsbD0iI0U4RTlGMiIvPgogIDx0ZXh0IHg9IjQwIiB5PSI0NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMTMyMjUyIj5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+Cjwvc3ZnPg==';
      img.alt = 'No logo';
    };
  });
});
