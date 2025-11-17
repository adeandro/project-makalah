
const musicBtn = document.getElementById('musicBtn');
const musicMenu = document.getElementById('musicMenu');
const bgMusic = document.getElementById('bgMusic');

let isPlaying = false;

// 🎛️ Toggle menu (muncul dengan animasi .show)
musicBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // biar gak nutup sendiri saat diklik
  musicMenu.classList.toggle('show');
});

// 🧹 Klik di luar menu -> nutup otomatis
document.addEventListener('click', (e) => {
  if (!musicMenu.contains(e.target) && e.target !== musicBtn) {
    musicMenu.classList.remove('show');
  }
});

// 🎵 Pilih lagu dari daftar
musicMenu.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', () => {
    const src = item.getAttribute('data-src');
    bgMusic.src = src;
    bgMusic.play();
    fadeInVolume(bgMusic);
    isPlaying = true;
    musicBtn.classList.add('playing');
    musicMenu.classList.remove('show');
  });
});

// ⏯️ Klik dua kali tombol untuk pause / play
musicBtn.addEventListener('dblclick', () => {
  if (isPlaying) {
    bgMusic.pause();
    musicBtn.classList.remove('playing');
  } else {
    bgMusic.play();
    fadeInVolume(bgMusic);
    musicBtn.classList.add('playing');
  }
  isPlaying = !isPlaying;
});

// 🔊 Efek fade-in volume
function fadeInVolume(audio) {
  audio.volume = 0;
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.8) {
      vol += 0.1;
      audio.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);
}
