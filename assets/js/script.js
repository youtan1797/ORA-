// 🌿 Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// 🔮 Scroll-triggered reveal animation
const revealItems = document.querySelectorAll('.card, .vision-icons li');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, { threshold: 0.1 });
revealItems.forEach(item => observer.observe(item));

// 💧 Ripple effect on CTA buttons
document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  });
});

// 🍔 Hamburger menu toggle with overlay
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("menuOverlay");

  if (toggle && menu && overlay) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.style.overflow = menu.classList.contains("active") ? "hidden" : "auto";
    });

    overlay.addEventListener("click", () => {
      menu.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }
});

// 🌱 Sprout animation
function createSprout() {
  const animationContainer = document.getElementById('sproutAnimation');
  const sprout = document.createElement('div');
  sprout.innerHTML = '🌱';
  sprout.classList.add('sprout');

  const leftPos = Math.random() * 100;
  sprout.style.left = `${leftPos}%`;

  const size = 0.5 + Math.random() * 1;
  sprout.style.fontSize = `${size}rem`;

  const duration = 5 + Math.random() * 5;
  sprout.style.animationDuration = `${duration}s`;

  animationContainer.appendChild(sprout);
  setTimeout(() => sprout.remove(), duration * 1000);
}
setInterval(createSprout, 800);

// 🌕 Moonstone popup reveal
const revealBtn = document.getElementById('revealBtn');
const moonstoneReveal = document.getElementById('moonstoneReveal');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

if (revealBtn && moonstoneReveal && overlay && closeBtn) {
  revealBtn.addEventListener('click', () => {
    moonstoneReveal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

function closeModal() {
  moonstoneReveal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// 🖼️ Subtle parallax background effect
window.addEventListener('scroll', () => {
  const headerBg = document.querySelector('.header-bg');
  const scrollPosition = window.pageYOffset;
  if (headerBg) {
    headerBg.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
  }
});
