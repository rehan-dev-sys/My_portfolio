    // Typed text effect
    var roles = [
      'Frontend Developer',
      'Backend Developer (PHP)',
      'Database Manager',
      'BSCS Student @ PMAS Arid'
    ];
    var roleIndex = 0, charIndex = 0, deleting = false;
    var typedEl = document.getElementById('typed-text');

    function typeEffect() {
      var current = roles[roleIndex];
      if (!deleting) {
        typedEl.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(typeEffect, 1600);
          return;
        }
      } else {
        typedEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(typeEffect, deleting ? 45 : 80);
    }
    typeEffect();

    // Scroll reveal
    var revealEls = document.querySelectorAll('.reveal');
    var revealObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.08 });
    revealEls.forEach(function(el) { revealObs.observe(el); });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) { target.scrollIntoView({ behavior: 'smooth' }); }
      });
    });

    // Contact form
    function handleSubmit() {
      var msg = document.getElementById('form-msg');
      msg.style.display = 'block';
      setTimeout(function() { msg.style.display = 'none'; }, 4000);
    }

    // Active nav highlight
    var sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', function() {
      var scrollY = window.scrollY;
      sections.forEach(function(sec) {
        var top = sec.offsetTop - 80;
        var bottom = top + sec.offsetHeight;
        var id = sec.getAttribute('id');
        var link = document.querySelector('nav a[href="#' + id + '"]');
        if (link) {
          if (scrollY >= top && scrollY < bottom) {
            link.style.color = '#2196F3';
          } else {
            link.style.color = '';
          }
        }
      });
    });