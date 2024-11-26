$(document).ready(function(){
  $('div.menu').hide();
  $('div.navcenter').hover(function () {
  if ($('> div.menu',this).length > 0) {
      $('> div.menu',this).stop(true,false).slideDown(250);
  }
  },function () {
    if ($('> div.menu',this).length > 0) {
      $('> div.menu',this).stop(true,false).slideUp(250);
    }
  });
  });

  // HAMBURGER MENU
$(document).ready(function() {
  $('#side-menu').click(function () {
      $('#side-menu').toggleClass('open');
      if ($('#side-menu').hasClass('open')) {
          $('.navbar-menu').addClass('open');
          $('body').addClass('lock-scroll');
          $('svg').addClass('svgOpen');
      } else {
          $('.navbar-menu').removeClass('open');
          $('body').removeClass('lock-scroll');
          $('svg').removeClass('svgOpen');
      };

      $('a').click(function() {
        $('#side-menu').removeClass('open');
        $('.navbar-menu').removeClass('open');
        $('body').removeClass('lock-scroll');
        $('svg').removeClass('svgOpen');
    });
  });

});

  
    
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    watchSlidesVisibility: false,
    watchSlidesProgress: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const swiper2 = new Swiper('.swiper2', {
    loop: false,
    autoplay: false,
    spaceBetween: 2,
    watchSlidesVisibility: false,
    watchSlidesProgress: false,
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
    speed: 10,
  });


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));