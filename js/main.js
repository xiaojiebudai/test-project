// 上融科技企业官网 JS
document.addEventListener('DOMContentLoaded', function() {

  // 导航滚动效果
  const navbar = document.querySelector('.navbar');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      backToTop.classList.add('show');
    } else {
      navbar.classList.remove('scrolled');
      backToTop.classList.remove('show');
    }
  });

  // 返回顶部
  backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 数字滚动动画
  var animated = false;
  function animateNumbers() {
    if (animated) return;
    var section = document.getElementById('tech');
    if (!section) return;
    var rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      animated = true;
      document.querySelectorAll('.tech-num').forEach(function(el) {
        var target = parseInt(el.getAttribute('data-target'));
        var count = 0;
        var step = Math.ceil(target / 50);
        var timer = setInterval(function() {
          count += step;
          if (count >= target) { count = target; clearInterval(timer); }
          el.textContent = count;
        }, 30);
      });
    }
  }
  window.addEventListener('scroll', animateNumbers);
  animateNumbers();

  // 表单提交
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = form.querySelector('.btn-submit');
      var original = btn.textContent;
      btn.textContent = '提交成功!';
      btn.style.background = '#059669';
      setTimeout(function() {
        btn.textContent = original;
        btn.style.background = '';
        form.reset();
      }, 2000);
    });
  }

});
