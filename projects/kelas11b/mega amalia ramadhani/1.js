const BACKGROUND_VIDEO_URL = 'cover.mp4'; 
const chapterData = [
  // 0. Cover 
  {
    chapter: 'cover',
    title: 'MAKALAH',
    description: 'TENTANG PENGARUH PENGGUNAAN HANDPHONE BAGI PELAJAR DAN REMAJA',
    body: `
      <div> 
          <div style="margin-top: 10px; margin-bottom: 20px;">
              <img src="zzm.jpg" alt="Logo Sekolah" style="width: 250px; height: auto; display: block; margin: 0 auto;">
          </div>
          <h2 style="text-align: center;">DISUSUN OLEH:</h2>
          <p style="text-align: center;">MEGA AMALIA RAMADHANI: 0089671124</p>
          <p style="text-align: center;">KELAS: 11B</p>
          <p style="margin-top: 30px; text-align: center;">YAYASAN PERSAUDARAAN HAJI AL MABRUR</p>
          <p style="text-align: center;">SMK AL MABRUR PEJAWARAN</p>
          <p style="text-align: center;">BANJARNEGARA</p>
          <p style="text-align: center;">2025</p>
          <div style="margin-top: 10px; margin-bottom: 20px;">
              <img src="sertifikat.jpg" alt="Logo Sekolah" style="width: 300px; height: auto; display: block; margin: 0 auto;">
      </div>
    `,
    visual: 'cover.mp4', 
    bgColor: '#2E4053', 
    visual_type: 'video', 
    bg_video: 'cover.mp4'
  },
  
  // 1. Kata Pengantar
  {
    chapter: 'pengantar',
    title: 'KATA PENGANTAR',
    body: `
      <p style="text-indent: 40px;">Puji syukur penulis ucapkan kehadirat Tuhan Yang Maha Esa karena berkat rahmat-Nya karya tulis ilmiah ini dapat penulis selesaikan sesuai dengan waktu yang telah ditentukan, dalam ini, penkarya tulis ilmiah membahas mengenai “pengaruh penggunaan handphone bagi pelajar dan remaja".</p>
      <p style="text-indent: 40px;">Karya tulis ini dibuat dalam rangka memperdalam pemahaman menganai pengaruh handphone terhadap pelajar,semoga pelajar dapat mengetahui dampak positif dan negative dari handphone,sehingga dapat memanfaatkan handphone secara bijak.Makalah ini dibuat untuk memenuhi tugas penulis dalam bidang study kaarya tulis ilmiah,dalam proses penyusunan makalah ini,tentunya penulis mendapatkan bimbingan,arahan,koreksi,dan saran untuk itu rasa terimakasih yang dalam penulis kepada yang terhormat.</p>
      <p style="text-indent: 40px;">Penulis menyadari bahwa sebagai manusia tidak luput dari kesalahan dan kekurangan sehingga hanya yang demikian saja yang dapat penulis berikan.Penulis juga sangat mengharapkan kritikan dan saran dari para pembaca sehingga penulis dapat memperbaiki kesalahan-kesalahan dalam penyusunan karya tulis ilmiah selanjutnya.</p>
      
      <p style="margin-top: 50px; text-align: right;">Banjarnegara, September 2025</p>
      <p style="text-align: right; margin-top: 10px;">Penulis</p>
    `,
    visual: 'bab1.mp4', 
    bgColor: '#1F618D', 
    visual_type: 'video', 
    bg_video: 'bab1.mp4'
  },
  
  // 2. Daftar Isi
  {
    chapter: 'daftarisi',
    title: 'DAFTAR ISI',
    body: `
      <table style="width: 100%; border-collapse: collapse; color: white;">
        <tr><td style="padding: 5px;">Halaman Judul</td><td style="text-align: right;">1</td></tr>
        <tr><td style="padding: 5px;">Kata Pengantar</td><td style="text-align: right;">2</td></tr>
        <tr><td style="padding: 5px;">Daftar Isi</td><td style="text-align: right;">3</td></tr>
        <tr><td style="padding: 5px;">BAB I PENDAHULUAN</td>
        <tr><td style="padding: 5px; padding-left: 20px;">1.1 Latar Belakang</td><td style="text-align: right;">4</td></tr>
        <tr><td style="padding: 5px; padding-left: 20px;">1.2 Rumusan Masalah</td><td style="text-align: right;">4</td></tr>
        <tr><td style="padding: 5px; padding-left: 20px;">1.3 Tujuan</td><td style="text-align: right;">4</td></tr>
        <tr><td style="padding: 5px; padding-left: 20px;">1.4 Metode Penulisan</td><td style="text-align: right;">4</td></tr>
        <tr><td style="padding: 5px;">BAB II PEMBAHASAN</td>
        <tr><td style="padding: 5px; padding-left: 20px;">2.1 Definisi Handphone</td><td style="text-align: right;">5</td></tr>
        <tr><td style="padding: 5px; padding-left: 20px;">2.2 Peranan Handphone</td><td style="text-align: right;">5</td></tr>
        <tr><td style="padding: 5px; padding-left: 20px;">2.3 Dampak Positif</td><td style="text-align: right;">6</td></tr>
        <tr><td style="padding: 5px; padding-left: 20px;">2.4 Dampak Negatif</td><td style="text-align: right;">6</td></tr>
        <tr><td style="padding: 5px; padding-left: 20px;">2.5 Tindakan Menghindari Penyalahgunaan</td><td style="text-align: right;">7</td></tr>
        <tr><td style="padding: 5px;">BAB III PENUTUP</td>
        <tr><td style="padding: 5px; padding-left: 20px;">3.1 Kesimpulan</td><td style="text-align: right;">8</td></tr>
        <tr><td style="padding: 5px; padding-left: 20px;">3.2 Saran</td><td style="text-align: right;">8</td></tr>
      </table>
    `,
    visual: 'bab2.mp4',
    bgColor: '#990000', 
    visual_type: 'video', 
    bg_video: 'bab2.mp4'
  },
  
  // 3. BAB I
  {
    chapter: 'bab1',
    title: 'BAB I PENDAHULUAN',
    body: `
      <h3 style="margin-top:0; text-align: left;">1.1 LATAR BELAKANG</h3>
      <p style="text-indent: 40px;">Awalnya teknologi dicipakan untuk mempermudah setiap kegiatan manusia.Lahir dari pemikiran manusia yang berusaha untuk mempermudah kegiatan-giatannya yang kemudian diterapkan dalam kehidupan.Kini teknologi telah berkembang pesat dan semakin maju seiring dengan perkembangan zaman sehingga terjadi pengalihan fungsi teknologi.Contohnya pada salah satu fasilitas canggih pada masa ini,yang akan dibahas yaitu mengenai telepon genggam yang lei dikenal dengan sebutan handphone.</p>
      <p style="text-indent: 40px;">Beberapa tahun yang lalu handphone hanya dimiliki oleh kalangan tertentu yang memang benar-benar membutuhkan itu untuk kelancaran pekerjaannya.Seiring berjalannya waktu handphone bisa dimiliki oleh semua kalangan,baik yang sangat membutuhkanmaupun yang kurang membutuhkan.Karena sekarang handphone dilengkapi dengan beberapa fitur yang membuat handphone memiliki beberapa fungsi selain menelpon atau saling berkirim pesan singkat.”handphone kini bukan lagi sekadar alat untuk berkomunikasi,namun juga sebagai gaya hidup,penampilan,trend dan prestise.Di kalangan remaja menggunakan handphone sebagai alat multifungsi  karena multifungsi tersebut para remaja dapat menggunakan secara positif dan negatif tergantung dari tiap individu.</p>

      <h3 style="margin-top:20px; text-align: left;">RUMUSAN MASALAH</h3>
      <ul>
        <li>Apa definisi handphone?</li>
        <li>Apa peranan telepon genggam terhadap kehidupan remaja?</li>
        <li>Apa dampak penggunaan handphone bagi pelajar?</li>
        <li>Bagaimana Tindakan yang harus dihidari dalam penggunaan handphone?</li>
      </ul>

      <h3 style="margin-top:20px; text-align: left;">TUJUAN</h3>
      <p style="text-align: left;">Dapat mengetahui pengaruh dan dampak yang ditimbulkan dari penggunaan handphone bagi remaja/pelajar. </p>
      <p style="text-align: left;">Mengetahui tindakan-tindakan yang harus dihindari dalam penggunaan handphone.</p>
      
      <h3 style="margin-top:20px; text-align: left;">METODE PENULISAN</h3>
      <p style="text-align: left;">Dalam penulisan makalah ini, metode yang kami gunakan adalah metode deskriptif, yaitu dengan cara menjelaskan gambaran keadaan-keadaan yang sesungguhnya sesuai dengan permasalahan dan mengambil sumber dari buku-buku dan internet.</p>
    `,
    visual: 'bab3.mp4', 
    bgColor: '#CC6600', 
    visual_type: 'video', 
    bg_video: 'bab3.mp4'
  },
  
  // 4. BAB II
  {
    chapter: 'bab2',
    title: 'BAB II PEMBAHASAN',
    body: `
      <h3 style="margin-top:0; text-align: left;">2.1 Definisi Handphone</h3>
      <p style="text-indent: 40px;">Telepon genggam atau handphone adalah sebuah perangkat telekomunikasi elektronik yang mempunyai dasar yang sama dengan telepon fixed line sehingga konvensional namun dapat dibawa kemana-mana (portable) dan tidak perlu disambungkan dengan jaringan telepon menggunakan kabel.</p>
      
      <h3 style="margin-top:20px; text-align: left;">2.2 Peranan Handphone Terhadap Kehidupan Pelajar</h3>
      <p style="text-indent: 40px;">Begitu besar pengaruh kemajuan teknologi terhadap nilai-nilai kebudayaan yang dianut masyarakat, baik masyarakat perkotaan maupun pedesaan. Kemajuan teknologi seperti televisi, telepon, dan telepon genggam (HP), bahkan internet bukan hanya melanda masyarakat, namun juga telah dapat dinikmati oleh masyarakat di pelosok-pelosok desa.</p>
      <p style="text-indent: 40px;">Dampak positif dan juga negatif terhadap kehidupan masyarakat terutama kaum remaja yang notabenenya selalu tertarik untuk mencoba hal-hal baru. Saat ini dapat kita lihat betapa kemajuan teknologi telah mempengaruhi gaya hidup dan pola pikir remaja. Entah sebetulnya mereka benar-benar membutuhkan handphone tersebut sebagai alat komunikasi atau tidak, yang jelas bagi remaja handphone merupakan sarana gaul yang mutlak yang mereka miliki.</p>
      
      <h3 style="margin-top:20px; text-align: left;">2.3 Dampak Positif Penggunaan Handphone</h3>
      <ul>
        <li>Mempermudah komunikasi. Misalnya saja ketika orang tua atau pihak keluarga akan menjemput anak ketika pulang sekolah/selesai melakukan kegiatan di luar rumah.</li>
        <li>Menambah pengetahuan tentang perkembangan teknologi.</li>
        <li>Memperluas jaringan persahabatan.</li>
      </ul>
      
      <h3 style="margin-top:20px; text-align: left;">2.4 Dampak Negatif Penggunaan Handphone</h3>
      <ul>
        <li>Mengganggu Perkembangan Anak. Dengan canggihnya fitur-fitur yang tersedia di hand phone (HP) seperti : kamera, permainan (games) akan mengganggu siswa dalam menerima pelajaran di sekolah.</li>
        <li>Efek Radiasi. Penggunaan HP juga berakibat buruk terhadap kesehatan.</li>
        <li>Rawan terhadap tindak kejahatan. Pelajar merupakan salah satu target utama dari pada penjahat.</li>
        <li>Sangat berpotensi mempengaruhi sikap dan perilaku siswa. HP bisa digunakan untuk menyebarkan gambar-gambar yang mengandung unsur pornografi.</li>
        <li>Pemborosan.</li>
        <li>Menciptakan lingkungan pergaulan sosial yang tidak sehat.</li>
        <li>Membentuk sifat hedonisme pada anak.</li>
        <li>Anak akan sulit diawasi, khususnya ketika masa-masa pubertas.</li>
      </ul>
      
      <h3 style="margin-top:20px; text-align: left;">2.5 Tindakan yang Dilakukan untuk Menghindari Penyalahgunaan Handphone</h3>
      <p style="text-indent: 40px;">Handphone yang selalu digunakan oleh para pelajar dapat mempengaruhi prestasi belajar siswa. Tindakan untuk menghindari penyalahgunaan Handphone diantaranya adalah:</p>
      <ul>
        <li>Menolak ajakan teman untuk menyimpan maupun melihat hal-hal yang menyangkut pornoaksi dan pornografi.</li>
        <li>Tidak membawa handphone ke sekolah atau mematikan handphone saat pelajaran berlangsung agar tidak mengganggu konsentrasi belajar.</li>
        <li>Ketika berada di rumah, mengatur waktu sebaik-baiknya antara belajar dan memanfaatkan handphone.</li>
        <li>Membatasi penggunaan handphone.</li>
        <li>Menghindari mengakses situs porno atau mendownload konten-konten porno.</li>
        <li>Memanfaatkan handphone seperlunya.</li>
        <li>Meminta orang tua untuk mengontrol penggunaan handphone.</li>
      </ul>
    `,
    visual: 'bab4.mp4', 
    bgColor: '#17202A', 
    visual_type: 'video', 
    bg_video: 'bab4.mp4' 
  },

  // 5. BAB III
  {
    chapter: 'bab3',
    title: 'BAB III PENUTUP',
    body: `
      <h3 style="margin-top:0; text-align: left;">3.1 Kesimpulan</h3>
      <p style="text-indent: 40px;">Pelajar zaman sekarang sudah tidak asing lagi dengan handphone. Mereka menggunakan handphone untuk komunikasi, internet, game, mendengarkan musik, dan melihat gambar ataupun video. Handphone telah menjadi bagian dari kehidupan pelajar, sehingga keberadaan handphone menyebabkan adanya dampak positif maupun negatif. Dampak positifnya adalah mempermudah dalam pencarian informasi dan komunikasi dan menjadikan pelajar tidak gagap teknologi. Adapun dampak negatifnya, yaitu mengganggu belajar siswa, berakibat buruk pada perilaku, kesehatan, dan sikap siswa, serta mengakibatkan pemborosan.</p>
      
      <h3 style="margin-top:20px; text-align: left;">3.2 Saran</h3>
      <p style="text-indent: 40px;">Diharapkan kepada pelajar untuk menggunakan nalar dan pikirannya dalam memanfaatkan hanphone.</p>
      <p style="text-indent: 40px;">Sebaiknya pelajar menggunakan handphone seperlunya dan penggunaannya sesuai dengan kondisi agar dampak buruk dari handphone tidak terjadi.</p>
      <p style="text-indent: 40px;">Pihak orangtua sebaiknya selalu mengontrol anaknya dalam menggunakan handphone.</p>
      <p style="text-indent: 40px;">Pihak guru sebaiknya tidak mengijinkan muridnya untuk menggunakan Handphone saat jam pelajaran, terkecuali jika diperlukan.</p>
      <p style="text-indent: 40px;">Pihak sekolah hendaknya tidak mengijinkan siswanya menghidupkan Handphone saat jam belajar.</p>
    `,
    visual: 'bab5.mp4', 
    bgColor: '#336633', 
    visual_type: 'video',
    bg_video: 'bab5.mp4'
  }
];

const body = document.body;
const chapterTitle = document.getElementById('chapter-title');
const chapterDescription = document.getElementById('chapter-description');
const contentBody = document.getElementById('content-body'); 
const chapterButtons = document.querySelectorAll('.chapter-btn');
const navItems = document.querySelectorAll('.nav-item');
const scrollContainer = document.getElementById('scrollable-content');
const visualContainer = document.getElementById('main-visual-container');
const backgroundVideo = document.getElementById('background-video');

/**
 * FUNGSI PEMBERSIH FINAL: Menghapus semua teks yang diapit kurung siku [...].
 * Ini akan menghilangkan semua artifak yang berasal dari konversi dokumen Word.
 * @param {string} htmlString - String HTML yang akan dibersihkan.
 * @returns {string} String yang sudah bersih.
 */
function cleanContent(htmlString) {
    const aggressiveRegex = /\[.*?\]/g; 
    let cleanedString = htmlString.replace(aggressiveRegex, '');
    cleanedString = cleanedString.replace(/\s{2,}/g, ' '); 
    return cleanedString;
}


function updateChapter(index) {
  const data = chapterData[index];

  // Ganti Warna Background
  body.style.backgroundColor = data.bgColor;
    
  // Ganti Background Video
  if (backgroundVideo.src.indexOf(data.bg_video) === -1) {
      backgroundVideo.src = data.bg_video;
      backgroundVideo.load(); // Mulai loading/parsing
      backgroundVideo.play(); 
  }

  // Ganti Visual Utama
  let visualHTML = '';
  if (data.visual_type === 'video') {
      visualHTML = `<video src="${data.visual}" autoplay loop muted playsinline></video>`; 
  } else {
      visualHTML = `<img src="${data.visual}" alt="${data.title}">`;
  }
  
  visualContainer.innerHTML = visualHTML; 

  const newVisualVideo = visualContainer.querySelector('video');
  if (newVisualVideo) {
      newVisualVideo.load();
      newVisualVideo.play();
  }

  // Ganti Teks dan Konten (INSTAN)
  chapterTitle.textContent = data.title;
  chapterDescription.textContent = data.description;
  contentBody.innerHTML = cleanContent(data.body); 


  const contentElements = document.querySelectorAll('#content-body *'); 
  contentElements.forEach(el => el.style.opacity = '0'); 
  
  visualContainer.style.transform = 'translateX(50px) scale(0.8)'; 
  visualContainer.style.opacity = '0'; 

  chapterButtons.forEach(btn => btn.classList.remove('active'));
  navItems.forEach(nav => nav.classList.remove('active'));
  if(scrollContainer) scrollContainer.scrollTop = 0;

  if (index === 0) { 
      body.classList.add('center-content');
  } else {
      body.classList.remove('center-content');
  }
  
  document.body.classList.remove('chapter-cover', 'chapter-daftarisi', 'chapter-pengantar', 'chapter-bab1', 'chapter-bab2', 'chapter-bab3');
  document.body.classList.add(`chapter-${data.chapter}`);

  // Reset Transisi Visual
  visualContainer.style.transition = 'none'; 
  visualContainer.style.transform = 'translateX(50px) scale(0.8)'; 
  visualContainer.style.opacity = '0';
  
  void visualContainer.offsetWidth; 

  visualContainer.style.transition = 'transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.3s ease'; 
  visualContainer.style.transform = 'translateX(0) scale(1)'; 
  visualContainer.style.opacity = '1';


  const activeBtn = document.querySelector(`.chapter-btn[data-index="${index}"]`);
  if (activeBtn) activeBtn.classList.add('active');
  
  const activeNav = document.querySelector(`.nav-item[data-chapter="${data.chapter}"]`);
  if (activeNav) activeNav.classList.add('active');

  // Teks muncul (instan/cepat)
  contentElements.forEach(el => el.style.opacity = '1');
  
}

chapterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const index = parseInt(button.dataset.index);
    updateChapter(index);
  });
});

navItems.forEach(navItem => {
  navItem.addEventListener('click', (e) => {
    e.preventDefault(); 
    const chapterName = navItem.dataset.chapter;
    const index = chapterData.findIndex(data => data.chapter === chapterName);
    if (index !== -1) {
        updateChapter(index);
    }
  });
});

const mainAudio = document.getElementById('main-audio');
const musicButtons = document.querySelectorAll('#music-controls .music-btn');
let isPlaying = false; 

function playMusic(src, button) {
    musicButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    mainAudio.src = src;
    mainAudio.play().then(() => {
        isPlaying = true;
    }).catch(error => {
        console.error("Gagal memutar audio:", error);
    });
}

musicButtons.forEach(button => {
    button.addEventListener('click', () => {
        const newSrc = button.dataset.src;
        
        if (button.classList.contains('active') && isPlaying) {
            mainAudio.pause();
            button.classList.remove('active');
            isPlaying = false;
        } else {
            playMusic(newSrc, button);
        }
    });
});

// INISIALISASI
document.addEventListener('DOMContentLoaded', () => {
    updateChapter(0); 
    const defaultButton = document.querySelector('.music-btn.active');
    if (defaultButton) {
        mainAudio.src = defaultButton.dataset.src;
        mainAudio.load();
    }
});