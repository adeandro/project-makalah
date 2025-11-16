/* ==========================================================
   PARTICLES
========================================================== */
const parallax = document.getElementById("parallax");
for (let i = 0; i < 45; i++) {
  const p = document.createElement("div");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "%";
  p.style.animationDuration = 10 + Math.random() * 12 + "s";
  parallax.appendChild(p);
}

/* ==========================================================
   DATA BAB
========================================================== */
const data = [
  {
    title: "BAB I - PENDAHULUAN",
    thumb: "media/wall6.jpg",
    preview: "Pengantar penelitian & tujuan.",
    content:
      "Sidik jari merupakan hasil reproduksi dari kulit permukaan jari, baik yang disengaja diambil atau hasil pengecapan dengan tinta maupun bekas yang ditinggalkan pada benda. Bentuk pokok sidik jari ditentukan oleh lapisan epidermal kulit, dimana apabila terjadi kerusakan pada lapisan ini akan bersifat sementara. Sidik jari yang ada pada seseorang adalah permanen dan unik, dan bentuknya terjaga dari lahir sampai mati. Pada saat ini, sidik jari banyak digunakan sebagai bukti identitas individu di berbagai area kehidupan mulai dari verifikasi sidik jari untuk sistem presensi kantor, sistem keamanan komputer, sistem keamanan di paspor serta berbagai sistem keamanan  lainnya. Oleh karena itu, diperlukan suatu sistem yang dapat mengenali sidik jari dengan akurat dan cepat. Sistem pengenalan sidik jari (fingerprint recognition system) adalah sistem yang digunakan untuk mengenali atau memverifikasi identitas seseorang berdasarkan pola sidik jarinya. Sistem ini biasanya terdiri dari beberapa tahap, yaitu akuisisi citra sidik jari, pra-pemrosesan citra, ekstraksi fitur, dan pencocokan pola. Dalam penelitian ini, akan dibahas mengenai metode-metode yang digunakan dalam sistem pengenalan sidik jari serta tantangan-tantangan yang dihadapi dalam implementasinya.",
  },
  {
    title: "BAB II - LANDASAN TEORI",
    thumb: "media/wall2.jpg",
    preview: "Dasar teori & konsep.",
    content:
      "Di Inggris tahun 1860, sidik jari pertama kali dikembangkan untuk pembuatan identitas rakyat Inggris. Akan tetapi, penggunaan sidik jari untuk untuk menangkap pelaku kejahatan pertama kali dilakukan di Argentina. Penggunaan sidik jari yang dilakukan seperti sekarang ini  adalah berkat ilmuwan asal Inggris  yang bernama Henry Faulds. Melalui penelitiannya dia mengungkapkan fakta bahwa setiap manusia memiliki sidik jari yang berbeda dan tidak akan berubah. Sidik jari terbentuk pada saat janin berusia 3-4 bulan dalam kandungan. Pola sidik jari ini terbentuk akibat interaksi antara faktor genetik dan lingkungan di dalam rahim. Pola sidik jari terdiri dari garis-garis yang disebut papila dermal, yang membentuk pola-pola unik seperti lengkungan, lingkaran, dan pusaran. Setiap individu memiliki pola sidik jari yang berbeda, bahkan pada kembar identik sekalipun. Oleh karena itu, sidik jari sering digunakan sebagai alat identifikasi yang andal dalam berbagai bidang, termasuk keamanan, forensik, dan biometrik.",
  },
  {
    title: "BAB III - METODOLOGI",
    thumb: "media/wall3.jpg",
    preview: "Langkah-langkah penelitian.",
    content:
      "Data yang diperlukan dalam penelitian ini sebagai sample adalah dengan pengecapan ibu jari dengan tinta pada kertas, kemudian di-scan ke dalam komputer menggunakan scanner. Kemudian citra sidik jari diaplikasikan ke dalam komputer, agar komputer mengetahui input-an citra tersebut dan mampu mengenali pemilik sidik jari secara benar. Sampel sidik jari yang digunakan oleh peneliti sebanyak 75 sidik jari dari 15 orang yang berbeda. Data tersebut terbagi menjadi dua kelompok, yaitu satu kelompok sidik jari digunakan pelatihan sidik jari (15 citra sidik jari) dan satu kelompok lainnya digunakan untuk pengujian (60 citra sidik jari). Proses pengolahan citra sidik jari dilakukan dengan beberapa tahapan, yaitu: 1. Akuisisi Citra Sidik Jari: Citra sidik jari diperoleh dari database citra sidik jari yang telah tersedia. 2. Pra-pemrosesan Citra: Tahap ini meliputi beberapa proses seperti konversi citra ke grayscale, peningkatan kontras, dan penghilangan noise untuk mempersiapkan citra agar siap untuk ekstraksi fitur. 3. Ekstraksi Fitur: Pada tahap ini, fitur-fitur penting dari citra sidik jari diekstraksi menggunakan metode tertentu, seperti deteksi minutiae atau transformasi gelombang. 4. Pelatihan Jaringan Syaraf Tiruan: Fitur-fitur yang telah diekstraksi digunakan untuk melatih jaringan syaraf tiruan agar dapat mengenali pola-pola pada citra sidik jari. 5. Pengujian: Setelah pelatihan selesai, jaringan syaraf tiruan diuji dengan menggunakan citra sidik jari yang belum pernah dilihat sebelumnya untuk mengevaluasi kinerjanya. 6. Analisis Hasil: Hasil dari pengujian dianalisis untuk menentukan tingkat akurasi dan efektivitas sistem pengenalan sidik jari yang telah dibuat.",
  },
  {
    title: "BAB IV - ANALISIS",
    thumb: "media/wall4.jpg",
    preview: "Analisis data & perancangan.",
    content:
      "Program pengolahan citra untuk pengenalan jenis wortel ini dibuat menggunakan program MATLAB 2009 dan Adobe Photoshop CS3 untuk prapengolahan citra. Tahapan proses pada pengolahan citra pengenalan sidik jari adalah sebagai berikut: 1. Akuisisi Citra Sidik Jari: Citra sidik jari diperoleh dari database citra sidik jari yang telah tersedia. 2. Pra-pemrosesan Citra: Tahap ini meliputi beberapa proses seperti konversi citra ke grayscale, peningkatan kontras, dan penghilangan noise untuk mempersiapkan citra agar siap untuk ekstraksi fitur. 3. Ekstraksi Fitur: Pada tahap ini, fitur-fitur penting dari citra sidik jari diekstraksi menggunakan metode tertentu, seperti deteksi minutiae atau transformasi gelombang. 4. Pelatihan Jaringan Syaraf Tiruan: Fitur-fitur yang telah diekstraksi digunakan untuk melatih jaringan syaraf tiruan agar dapat mengenali pola-pola pada citra sidik jari. 5. Pengujian: Setelah pelatihan selesai, jaringan syaraf tiruan diuji dengan menggunakan citra sidik jari yang belum pernah dilihat sebelumnya untuk mengevaluasi kinerjanya. 6. Analisis Hasil: Hasil dari pengujian dianalisis untuk menentukan tingkat akurasi dan efektivitas sistem pengenalan sidik jari yang telah dibuat.",
  },
  {
    title: "BAB V - IMPLEMENTASI",
    thumb: "media/wall5.jpg",
    preview: "Implementasi & hasil.",
    content:
      "Aplikasi untuk pengenalan citra sidik jari diimplementasikan dengan menggunakan GUI (Grapic User Interface) Matlab untuk proses pengolahan citra digital, sedangkan untuk pelatihan dan pengujian data citra dengan jaringan syaraf tiruan masih menggunakan command window. Tampilan (interface) untuk pengolahan citra digital dalam pengenalan citra sidik jari dibuat menjadi 5 bagian, yaitu bagian halaman menu utama, halaman olah citra, halaman pelatihan, pengujian citra dan halaman tentang, serta halaman keluar. Pada halaman menu utama terdapat beberapa tombol pilihan yang dapat digunakan untuk mengakses halaman-halaman lainnya. Pada halaman olah citra, terdapat tombol untuk memilih citra sidik jari yang akan diolah, menampilkan citra asli, melakukan pra-pemrosesan citra, mengekstraksi fitur, dan menampilkan hasil ekstraksi fitur. Pada halaman pelatihan, terdapat tombol untuk memulai proses pelatihan jaringan syaraf tiruan dengan menggunakan data citra sidik jari yang telah diekstraksi fiturnya. Pada halaman pengujian citra, terdapat tombol untuk memilih citra sidik jari yang akan diuji, menampilkan citra asli, melakukan pra-pemrosesan citra, mengekstraksi fitur, dan menampilkan hasil pengujian citra. Pada halaman tentang, terdapat informasi mengenai aplikasi dan pembuatnya. Terakhir, pada halaman keluar terdapat tombol untuk menutup aplikasi.",
  },
];

/* ==========================================================
   AMBIENCE MUSIC LOOP
========================================================== */
const music = new Audio("media/dota2main.mp3");
music.volume = 0.55;
music.loop = true;
music.play();

/* Sounds */
const hoverSound = new Audio("media/pick.mpeg");
const clickSound = new Audio("media/select.mpeg");
const selectSound = new Audio(
  "https://cdn.pixabay.com/download/audio/2021/09/27/audio_4ace35cf25.mp3?filename=game-select-105924.mp3"
);

/* ==========================================================
   RENDER CARDS
========================================================== */
const carousel = document.getElementById("carousel");
const fullscreen = document.getElementById("fullscreen");
const fullTitle = document.getElementById("fullTitle");
const fullContent = document.getElementById("fullContent");
const backBtn = document.getElementById("backBtn");

function createBurst(x, y) {
  for (let i = 0; i < 20; i++) {
    const b = document.createElement("div");
    b.style.position = "fixed";
    b.style.left = x + "px";
    b.style.top = y + "px";
    b.style.width = "6px";
    b.style.height = "6px";
    b.style.background = "#6fc7ff";
    b.style.borderRadius = "50%";
    b.style.pointerEvents = "none";
    b.style.zIndex = 9999;

    const angle = Math.random() * 360;
    const dist = 40 + Math.random() * 60;
    b.style.transform = `translate(${Math.cos(angle) * dist}px,${
      Math.sin(angle) * dist
    }px)`;
    b.style.opacity = "1";
    b.style.transition = "1s ease-out";

    document.body.appendChild(b);

    setTimeout(() => {
      b.style.opacity = "0";
      b.style.transform = `translate(${Math.cos(angle) * dist}px,${
        Math.sin(angle) * dist
      }px) scale(0)`;
    }, 20);

    setTimeout(() => b.remove(), 1200);
  }
}

data.forEach((item, i) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class='rimlight'></div>
    <div class='tooltip'>${item.preview}</div>
    <div class='thumb' style="background-image:url('${item.thumb}')"></div>
    <div class='card-title'>${item.title}</div>
  `;

  card.addEventListener("mouseenter", () => hoverSound.play());

  card.addEventListener("click", (e) => {
    clickSound.play();
    selectSound.play();
    const rect = card.getBoundingClientRect();
    createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    openFull(i);
  });

  carousel.appendChild(card);
});

/* ==========================================================
   FULLSCREEN PANEL
========================================================== */
function openFull(i) {
  fullTitle.textContent = data[i].title;
  fullContent.textContent = data[i].content;
  fullscreen.style.display = "flex";
  fullscreen.classList.remove("shatter");
  void fullscreen.offsetWidth;
  fullscreen.classList.add("shatter");
  document.getElementById("mainTitle").style.display = "none";
  fullscreen.classList.add("scaleIn");
}
backBtn.onclick = () => {
  clickSound.play();
  fullscreen.style.display = "none";
};

/* ==========================================================
   SCROLL SIDEWAYS + TOUCH
========================================================== */
carousel.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    carousel.scrollLeft += e.deltaY * 1.2;
  },
  { passive: false }
);

let isDown = false,
  startX,
  scrollLeft;
carousel.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.touches[0].pageX;
  scrollLeft = carousel.scrollLeft;
});
carousel.addEventListener("touchend", () => (isDown = false));
carousel.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX;
  carousel.scrollLeft = scrollLeft - (x - startX) * 1.5;
});

/* AUTO SNAP */
let snapTimeout;
carousel.addEventListener("scroll", () => {
  clearTimeout(snapTimeout);
  snapTimeout = setTimeout(() => {
    const cards = [...document.querySelectorAll(".card")];
    let nearest = cards[0],
      min = Infinity;
    const center = carousel.scrollLeft + carousel.clientWidth / 2;
    cards.forEach((c) => {
      const mid = c.offsetLeft + c.offsetWidth / 2;
      const dist = Math.abs(center - mid);
      if (dist < min) {
        min = dist;
        nearest = c;
      }
    });
    nearest.scrollIntoView({ behavior: "smooth", inline: "center" });
  }, 150);
});

/* PARALLAX */
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  parallax.style.transform = `translate(${x}px,${y}px)`;
});
