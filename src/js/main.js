$(document).ready(function () {
  // scroll menu navbar
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.nav-bar').addClass('sticky');
    } else {
      $('.nav-bar').removeClass('sticky');
    }
  });

  // toggle menu/nav-bar
  $('.menu-btn').click(function () {
    $('.nav-bar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  // owl carousel
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },

      600: {
        items: 2,
        nav: false,
      },

      1000: {
        items: 2,
        nav: false,
      },
    },
  });
});


//PORTFOLIO SWIPER
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

$(document).ready(function () {
  $(".carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });
});


// SHOW SCROLL UP
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  if (this.scrollY >= 1000)
    scrollUp.classList.add('show-scroll')
  else
    scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp);

const counters = document.querySelectorAll('.counter-number');

counters.forEach((counter) => {
  const target = counter.getAttribute('data-target');
  let currentCount = 0;

  setInterval(() => {
    if (currentCount < target) {
      currentCount++;
      counter.textContent = currentCount;
    }
  }, 10);
});

function toggleSound() {
  var video = document.getElementById("video");
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
}
