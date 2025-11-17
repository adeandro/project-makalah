// script.js
// Mengendalikan musik (autoplay fallback) + tombol play/pause

document.addEventListener("DOMContentLoaded", function(){
  const audio = document.getElementById("musik");
  const btn = document.getElementById("btn-audio");

  // Coba play saat load (bisa diblokir oleh browser)
  function tryPlay(){
    audio.play().then(()=> {
      btn.textContent = "⏸ Musik";
      btn.setAttribute("aria-pressed","true");
    }).catch(()=> {
      // autoplay diblokir; tampilkan state play (user harus klik tombol)
      btn.textContent = "▶︎ Musik";
      btn.setAttribute("aria-pressed","false");
    });
  }

  tryPlay();

  // Tombol toggling
  btn.addEventListener("click", function(e){
    if(audio.paused){
      audio.play();
      btn.textContent = "⏸ Musik";
      btn.setAttribute("aria-pressed","true");
    } else {
      audio.pause();
      btn.textContent = "▶︎ Musik";
      btn.setAttribute("aria-pressed","false");
    }
  });

  // Juga play saat user klik di mana saja (fallback untuk mobile)
  window.addEventListener("click", function onFirstClick(){
    if(audio.paused){
      audio.play().catch(()=>{/* ignore */});
      btn.textContent = "⏸ Musik";
      btn.setAttribute("aria-pressed","true");
    }
    // lepas listener agar tidak mengulang
    window.removeEventListener("click", onFirstClick);
  }, { once: true });

});