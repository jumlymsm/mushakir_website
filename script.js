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
