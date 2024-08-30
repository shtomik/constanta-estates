
var minMenuBtn = document.querySelector('.min-menu');
minMenuItem = document.querySelectorAll('.min-menu-wrap__item');

window.addEventListener('load', function () {

  setTimeout(function () {
    document.querySelector('.load-wrap').classList.add('animation-fade-out');

    setTimeout(function () {
      document.querySelector('.m-wrap').classList.remove('m-wrap--block-content');
    }, 1300);
  }, 3000);

});

minMenuBtn.addEventListener('click', function () {

  this.classList.toggle('min-menu--close');
  document.querySelector('.min-menu__item').classList.toggle('qw-opacity');
  document.querySelector('.min-menu-wrap').classList.toggle('min-menu-wrap--active');
  document.querySelector('html').classList.toggle('no-overflow');
});

for (var i = 0; i < minMenuItem.length; i++) {
  minMenuItem[i].addEventListener('click', function () {
    document.querySelector('.min-menu').classList.toggle('min-menu--close');
    document.querySelector('.min-menu__item').classList.toggle('qw-opacity');
    document.querySelector('.min-menu-wrap').classList.toggle('min-menu-wrap--active');
    document.querySelector('html').classList.toggle('no-overflow');
  });
}

var linkNav = document.querySelectorAll('[href^="#"]'),
      V = .3;
    for (var i = 0; i < linkNav.length; i++) {
      linkNav[i].addEventListener('click', function (e) {
        e.preventDefault();
        var w = window.pageYOffset,
          hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
          start = null;
        requestAnimationFrame(step);

        function step(time) {
          if (start === null) start = time;
          var progress = time - start,
            r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
          window.scrollTo(0, r);
          if (r != w + t) {
            requestAnimationFrame(step)
          } else {
            location.hash = hash
          }
        }
      }, false);
    };