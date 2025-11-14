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


const socialBtn = document.getElementById("toggleSocial");
const dropdown = document.querySelector(".social-dropdown");

const links = {
  wa: "https://wa.me/6282328457092",
  ig: "https://instagram.com/varel.zenittt",
  tt: "https://tiktok.com/@vareloin"
};

socialBtn.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

document.querySelectorAll(".social-item").forEach(btn => {
  btn.addEventListener("click", () => {
    const app = btn.dataset.app;
    window.location.href = links[app];
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const text = "KOMPUTER DAN PERANNYA DALAM KEHIDUPAN SEHARI-HARI";
  const el = document.querySelector(".type-text");
  let i = 0;

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60);
    } else {
      setTimeout(erase, 1500); // jeda sebelum hapus
    }
  }

  function erase() {
    if (i > 0) {
      el.textContent = text.substring(0, i - 1);
      i--;
      setTimeout(erase, 30);
    } else {
      setTimeout(type, 800); // jeda sebelum mulai lagi
    }
  }

  type();
});