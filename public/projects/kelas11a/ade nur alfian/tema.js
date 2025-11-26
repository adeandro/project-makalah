
document.querySelector(".tema-btn").addEventListener("click", () => {
    document.querySelector(".tema-menu").classList.toggle("active");
});


const audio = new Audio();
audio.loop = true;     
audio.volume = 1;


const imageList = {
    gambar1: "assets/bgnaruto.jpg",
    gambar2: "assets/bgstoneisland.jpg",
    gambar3: "assets/bgonepiece.jpg"
};


const videoList = {
    video1: "assets/bgvdbmw.mp4",
    video2: "assets/bgvdfreiren.mp4",
    video3: "assets/bgvdjjk.mp4"
};


const musicList = {
    default: "",
    gambar1: "assets/orange.mp3",
    gambar2: "assets/musikstoneisland.mp3",
    gambar3: "assets/onepiece.mp3",
    video1: "assets/musikbmw.mp3",
    video2: "assets/musikfreiren.mp3",
    video3: "assets/musikjjk.mp3"
};


function removeVideo() {
    const v = document.querySelector(".bg-video");
    if (v) v.remove();
}


document.querySelectorAll(".tema-item").forEach(item => {
    item.addEventListener("click", () => {

        const theme = item.dataset.theme;

       
        document.querySelector(".tema-menu").classList.remove("active");

        
        removeVideo();

        
        document.body.style.background = "";
        
    
        audio.pause();

        
        if (theme === "default") {
            return;
        }

        
        if (imageList[theme]) {
            document.body.style.background = 
                `url('${imageList[theme]}') center/cover no-repeat fixed`;

            audio.src = musicList[theme];
            audio.play();

            return;
        }

        
        if (videoList[theme]) {

            const vid = document.createElement("video");
            vid.className = "bg-video";
            vid.src = videoList[theme];
            vid.autoplay = true;
            vid.loop = true;
            vid.muted = true;       
            vid.playsInline = true;

            document.body.appendChild(vid);

            
            audio.src = musicList[theme];
            audio.play();

            return;
        }

    });
});