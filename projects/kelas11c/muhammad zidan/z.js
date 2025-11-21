const makalahOverlay = document.getElementById('makalah-overlay');
const allMakalahPages = document.querySelectorAll('.makalah-content-page');
const backgroundVideo = document.getElementById('background-video'); 
const backgroundMusic = document.getElementById('background-music'); 

const musicPlayerContainer = document.getElementById('music-player-container');
const musicPopoverToggleBtn = document.getElementById('music-popover-toggle-btn');
const musicPopover = document.getElementById('music-popover');
const playPauseBtn = document.getElementById('play-pause-btn');
const currentSongStatus = document.getElementById('current-song-status');
const currentSongInfo = document.getElementById('current-song-info');
const playlistElement = document.getElementById('playlist');
const albumArtPreview = document.getElementById('album-art-preview'); 

const body = document.body;
const themeSwitchInput = document.getElementById('theme-switch'); 

const DARK_VIDEO_SRC = 'frii.mp4'; 
const LIGHT_VIDEO_SRC = 'fri00.mp4'; 

const GALLERY_IMAGE_MAP = {
    'thorfinn': {
        light: 'fri1.jpg', 
        dark: 'frii1.jpg' 
    },
    'musashi': {
        light: 'fri2.jpg', 
        dark: 'frii2.jpg'
    },
    'guts': {
        light: 'fri3.jpg', 
        dark: 'frii3.jpg'
    },
};


const playlistData = [
    { title: "Message in the bottle", src: "mitb.mp3", artist: "Taylor Swift x Ariana Grande", albumArt: "tsag.jpg" },
    { title: "Blue", src: "blue.mp3", artist: "Yung Kai", albumArt: "yung.jpg" },
    { title: "Love", src: "love.mp3", artist: "Wave to Earth", albumArt: "w2e.jpg" },
];

let currentSongIndex = -1;
let isPlaying = false; 
let wasPlayingOnLoad = false; 


function updateGalleryImages(isDark) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const mode = isDark ? 'dark' : 'light';

    galleryItems.forEach(item => {
        const characterId = item.getAttribute('data-character');
        if (characterId && GALLERY_IMAGE_MAP[characterId]) {
            const imagePath = GALLERY_IMAGE_MAP[characterId][mode];
            item.style.backgroundImage = `url('${imagePath}')`;
        }
    });
}


function applyTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        if (backgroundVideo) { backgroundVideo.src = DARK_VIDEO_SRC; backgroundVideo.load(); backgroundVideo.play(); }
        localStorage.setItem('theme', 'dark');
        updateGalleryImages(true); 
    } else {
        body.classList.remove('dark-mode');
        if (backgroundVideo) { backgroundVideo.src = LIGHT_VIDEO_SRC; backgroundVideo.load(); backgroundVideo.play(); }
        localStorage.setItem('theme', 'light');
        updateGalleryImages(false); 
    }
}

function handleThemeChange() {
    const isChecked = themeSwitchInput.checked; 
    applyTheme(isChecked);
}


function renderPlaylist() {
    playlistElement.innerHTML = ''; 
    playlistData.forEach((song, index) => {
        const li = document.createElement('li');
        li.className = 'playlist-item';
        li.textContent = song.title + ' - ' + song.artist; 
        li.dataset.index = index;
        li.dataset.album = song.albumArt;
        
        li.onclick = (e) => {
             e.stopPropagation();
             playSong(index);
        };
        
        li.onmouseover = () => {
            albumArtPreview.style.backgroundImage = `url('${song.albumArt}')`;
            albumArtPreview.style.opacity = '1';
        };
        li.onmouseout = () => {
            albumArtPreview.style.opacity = '0';
        };

        playlistElement.appendChild(li);
    });
}

function playSong(index) {
    if (index === currentSongIndex && isPlaying) {
        return;
    }

    currentSongIndex = index;
    const song = playlistData[index];
    backgroundMusic.src = song.src;
    backgroundMusic.load();
    backgroundMusic.volume = 1.5; 
    backgroundMusic.play().then(() => {
        isPlaying = true;
        updatePlayerUI();
        localStorage.setItem('lastSongIndex', index);
        localStorage.setItem('isPlaying', 'true');
    }).catch(error => {
        currentSongInfo.textContent = `Klik Play untuk memutar: ${song.title}`;
        playPauseBtn.textContent = "Play";
        isPlaying = false;
        localStorage.setItem('isPlaying', 'false');
    });
}

function updatePlayerUI() {
    if (currentSongIndex === -1) {
        currentSongInfo.textContent = "Silent Mode";
        currentSongStatus.textContent = "🎵 Music Player";
        playPauseBtn.textContent = "Play";
        return;
    }

    const song = playlistData[currentSongIndex];
    
    if (isPlaying) {
        currentSongInfo.textContent = `Now Playing: ${song.title}`;
        playPauseBtn.textContent = "Pause";
        currentSongStatus.textContent = `🎶 ${song.title}`;
    } else {
        currentSongInfo.textContent = `Paused: ${song.title}`;
        playPauseBtn.textContent = "Play";
        currentSongStatus.textContent = ` ${song.title}`;
    }
    
    document.querySelectorAll('.playlist-item').forEach(item => {
        item.classList.remove('active-song');
    });
    const activeItem = document.querySelector(`.playlist-item[data-index="${currentSongIndex}"]`);
    if (activeItem) { activeItem.classList.add('active-song'); }
}

function togglePlayPause() {
    if (currentSongIndex === -1) {
        playSong(0);
        return;
    }

    if (isPlaying) {
        backgroundMusic.pause();
        isPlaying = false;
        updatePlayerUI();
        localStorage.setItem('isPlaying', 'false');
    } else {
        backgroundMusic.play().then(() => {
            isPlaying = true;
            updatePlayerUI();
            localStorage.setItem('isPlaying', 'true');
        }).catch(() => {
             console.log("Autoplay music diblokir. Klik lagi di layar.");
        });
    }
}

function setupMusicControls() {
    playPauseBtn.addEventListener('click', togglePlayPause);
    
    musicPopoverToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        musicPopover.classList.toggle('visible');
    });
    
    document.addEventListener('click', (e) => {
        if (musicPopover.classList.contains('visible') && !musicPlayerContainer.contains(e.target)) {
            musicPopover.classList.remove('visible');
        }
    });

    backgroundMusic.addEventListener('ended', () => {
        const nextIndex = (currentSongIndex + 1) % playlistData.length;
        playSong(nextIndex);
    });
}


window.showMakalahIndex = function() {
    allMakalahPages.forEach(page => {
        page.classList.remove('active');
        if (page.id !== 'makalah-index') {
            page.style.display = 'none'; 
        }
    });
    
    const indexPage = document.getElementById('makalah-index');
    indexPage.style.display = 'block'; 
    
    setTimeout(() => {
        indexPage.classList.add('active'); 
    }, 1);

    makalahOverlay.style.display = 'block'; 
}

window.hideMakalahOverlay = function() {
    makalahOverlay.style.display = 'none';
    allMakalahPages.forEach(page => {
        page.classList.remove('active');
    });
}

window.showMakalahContent = function(targetId) {
    allMakalahPages.forEach(page => {
        page.classList.remove('active');
        if (page.id !== targetId) {

             setTimeout(() => {
                 page.style.display = 'none';
             }, 500);
        }
    });
    
    const targetPage = document.getElementById(targetId);
    if (targetPage) {
        targetPage.style.display = 'block'; 
        makalahOverlay.scrollTop = 0; 

        setTimeout(() => {
            targetPage.classList.add('active'); 
        }, 50); 
    }
    
    makalahOverlay.style.display = 'block'; 
}


document.addEventListener('DOMContentLoaded', () => {
    
    const lastIndex = localStorage.getItem('lastSongIndex');
    wasPlayingOnLoad = localStorage.getItem('isPlaying') === 'true';

    const gateOverlay = document.getElementById('gate-overlay');

    if (gateOverlay) {
        gateOverlay.style.display = 'flex'; 

        gateOverlay.addEventListener('click', () => {
            gateOverlay.classList.add('hidden');
            
            if (wasPlayingOnLoad) {
                 backgroundMusic.play().then(() => {
                    isPlaying = true;
                    updatePlayerUI();
                 }).catch(e => {
                    console.log("Music play prevented after gate close:", e);
                    isPlaying = false;
                    updatePlayerUI();
                 });
            }
        });
    }

    // 2. Theme Setup 
    if (themeSwitchInput) {
        themeSwitchInput.addEventListener('change', handleThemeChange);
        const savedTheme = localStorage.getItem('theme');
        const isDark = savedTheme === 'dark';
        
        themeSwitchInput.checked = isDark;
        applyTheme(isDark); 
    }
    
    // 3. Music Player Setup
    renderPlaylist();
    setupMusicControls();

    if (lastIndex !== null && playlistData[lastIndex]) {
        currentSongIndex = parseInt(lastIndex);
        backgroundMusic.src = playlistData[currentSongIndex].src;
        
        if (wasPlayingOnLoad) {
            isPlaying = true; 
            updatePlayerUI();
        } else {
            isPlaying = false;
            updatePlayerUI();
        }
    } else {
        currentSongIndex = 0; 
        updatePlayerUI();
    }
    
    allMakalahPages.forEach(page => {
        page.classList.remove('active');
        if (page.id !== 'makalah-index') {
            page.style.display = 'none';
        }
    });

    const indexPage = document.getElementById('makalah-index');
    if (indexPage) {
        indexPage.style.display = 'block';
        indexPage.classList.add('active'); 
    }
});


window.addEventListener('load', () => {
    if (backgroundVideo) {
        backgroundVideo.load();
        backgroundVideo.play();
    }
});


function removeSpanMarkers() {
    const makalahPages = document.querySelectorAll('.makalah-content-page');
    
    makalahPages.forEach(page => {
        let content = page.innerHTML;
        
        const regex = /\[span_\d+\]\((start|end)_span\)/g;
        
        content = content.replace(regex, '');
        
        page.innerHTML = content;
    });
}

document.addEventListener('DOMContentLoaded', removeSpanMarkers); 