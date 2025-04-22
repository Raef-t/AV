const circle = document.querySelector(".animated-circle");

// تحريك الدائرة
document.getElementById("products-btn").addEventListener("click", function (e) {
  e.preventDefault();
  circle.classList.add("move-right");
});

document.getElementById("home-btn").addEventListener("click", function (e) {
  e.preventDefault();
  circle.classList.remove("move-right");
});

// تحرك الصورة في الهيرو سكشن
document.getElementById("products-btn").addEventListener("click", function (e) {
  e.preventDefault(); // حتى لا ينتقل الرابط
  const img = document.querySelector(".transition-target");
  img.classList.add("hidden-slide");
});

document.getElementById("home-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const img = document.querySelector(".transition-target");
  img.classList.remove("hidden-slide");
});

// تحرك صورة implantImg مع الشفافية
document.getElementById("products-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const implantImg = document.getElementById("implantImg");
  implantImg.classList.add("animate-down");
});

document.getElementById("home-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const implantImg = document.getElementById("implantImg");
  implantImg.classList.remove("animate-down");
});




const navbarCollapse = document.getElementById('navbarNav');
const circle1 = document.querySelector('.animated-circle');
const implantImg = document.getElementById('implantImg');

// عند فتح الكولابس
navbarCollapse.addEventListener('show.bs.collapse', function () {
  circle1.style.display = 'none';
  implantImg.style.display = 'none';
});

// عند إغلاق الكولابس
navbarCollapse.addEventListener('hide.bs.collapse', function () {
  circle1.style.display = '';
  implantImg.style.display = '';
});

// 
const mainText = document.getElementById("mainText");
const textImplant = document.getElementById("textImplant");

document.getElementById("products-btn").addEventListener("click", function (e) {
  e.preventDefault();
  mainText.classList.add("hidden");
  textImplant.classList.remove("hidden");
  textImplant.classList.add("fade-in");
});

document.getElementById("home-btn").addEventListener("click", function (e) {
  e.preventDefault();
  textImplant.classList.add("hidden");
  mainText.classList.remove("hidden");
  
});
// 

document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.counter');
  let started = false;

  function startCounting() {
    counters.forEach(counter => {
      function updateCount() {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 200;

        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 40);
        } else {
          counter.innerText = target;
        }
      }

      updateCount();
    });
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        startCounting();
        started = true;
      }
    });
  }, {
    threshold: 0.5
  });

  counters.forEach(counter => observer.observe(counter));
});


// 
document.getElementById('home-btn').addEventListener('click', reverseAnimation);
document.getElementById('products-btn').addEventListener('click', triggerAnimation);

function triggerAnimation() {
  const circle = document.getElementById('circleBg');
  const doctor = document.getElementById('doctorImg');
  const implant = document.getElementById('implantImg');
  const textDoctor = document.getElementById('textDoctor');
  const textImplant = document.getElementById('textImplant');
  const hart2 = document.getElementById('hart2');
  const hart1 = document.getElementById('hart1');

  circle.classList.add('right');
  doctor.classList.add('out');
  implant.classList.add('in');

  textDoctor.classList.add('hidden');
  textImplant.classList.remove('hidden');
  hart1.classList.add('fade');
  hart2.classList.remove('fade');
}

function reverseAnimation() {
  const circle = document.getElementById('circleBg');
  const doctor = document.getElementById('doctorImg');
  const implant = document.getElementById('implantImg');
  const textDoctor = document.getElementById('textDoctor');
  const textImplant = document.getElementById('textImplant');
  const hart2 = document.getElementById('hart2');
  const hart1 = document.getElementById('hart1');

  circle.classList.remove('right');
  doctor.classList.remove('out');
  implant.classList.remove('in');

  textDoctor.classList.remove('hidden');
  textImplant.classList.add('hidden');
  hart2.classList.add('fade');
  hart1.classList.remove('fade');
}
