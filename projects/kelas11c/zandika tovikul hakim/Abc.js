let isBooted = false;
function toggleContent(id) {
  if (!isBooted) return; 
  
  const el = document.getElementById(id);
  const clickSfx = document.getElementById('click-sfx');
  const babElement = el.previousElementSibling;
  const toggleIcon = babElement.querySelector('.toggle-icon');

  if (navigator.vibrate) {
    navigator.vibrate(50); 
  }

  if (el.style.display === 'block') {
    el.style.display = 'none';
    babElement.classList.remove('active');
    if (toggleIcon) toggleIcon.style.transform = 'rotate(0deg)';
  } else {
    if (clickSfx) {
      clickSfx.currentTime = 0;
      clickSfx.play();
    }
    el.style.display = 'block';
    babElement.classList.add('active');
    if (toggleIcon) toggleIcon.style.transform = 'rotate(180deg)';
  }
}

function toggleMusic() {
  if (!isBooted) return;
  const audio = document.getElementById('bg-music');
  const button = document.getElementById('music-toggle-btn');
  const icon = button.querySelector('i');

  if (audio.paused) {
    audio.play();
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
  } else {
    audio.pause();
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');
  }
}

function handleParallax() {
    if (!isBooted) return;
    const scrolled = window.scrollY;
    
    const parallaxElements = document.querySelectorAll('.card-element[data-parallax-speed]');
    
    parallaxElements.forEach(el => {
        const speed = parseFloat(el.getAttribute('data-parallax-speed'));
        const yPos = scrolled * speed;
        
        el.style.transform = `translateY(${yPos}px)`;
    });
}

function initTilt() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -5; 
            const rotateY = ((x - centerX) / centerX) * 5;
            
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rot ateY(${rotateY}deg)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    });
}

function handleBootUp() {
    const bootScreen = document.getElementById('boot-screen');
    const body = document.body;
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' || event.key === ' ' || event.key === 'A') { 
            if (!isBooted) {
                bootScreen.classList.add('hidden');
                setTimeout(() => {
                    body.classList.add('active');
                    bootScreen.style.display = 'none';
                    isBooted = true;
                    initVisuals();
                }, 1000); 
            }
        }
    });

    bootScreen.addEventListener('click', function() {
        if (!isBooted) {
            document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
        }
    });
}

function initVisuals() {
    handleParallax();
    window.addEventListener('scroll', handleParallax);

    initTilt();

    const audio = document.getElementById('bg-music');
    const musicIcon = document.querySelector('.aesthetic-button i');
    audio.volume = 0.3; 
    
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            musicIcon.classList.remove('fa-volume-mute');
            musicIcon.classList.add('fa-volume-up');
        }).catch(error => {
            console.log("Autoplay music diblokir.");
            musicIcon.classList.remove('fa-volume-up');
            musicIcon.classList.add('fa-volume-mute');
        });
    }
}

window.onload = handleBootUp;