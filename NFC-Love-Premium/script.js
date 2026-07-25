// ===========================
// NFC LOVE PREMIUM
// ===========================

// Birlikte olunan tarih
const startDate = new Date("2025-01-01");

const today = new Date();

const diff = today - startDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

const dayElement = document.getElementById("days");

if (dayElement) {
    dayElement.innerText = days;
}

// ===========================
// MEKTUP POPUP
// ===========================

const popup = document.getElementById("popup");
const letterBtn = document.getElementById("letterBtn");
const closeBtn = document.querySelector(".close");

if (letterBtn) {
    letterBtn.onclick = () => {
        popup.style.display = "flex";
    };
}

if (closeBtn) {
    closeBtn.onclick = () => {
        popup.style.display = "none";
    };
}

// ===========================
// SÜRPRİZ POPUP
// ===========================

const giftPopup = document.getElementById("giftPopup");
const giftBtn = document.getElementById("giftBtn");
const giftClose = document.querySelector(".giftClose");

if (giftBtn) {
    giftBtn.onclick = () => {
        giftPopup.style.display = "flex";
    };
}

if (giftClose) {
    giftClose.onclick = () => {
        giftPopup.style.display = "none";
    };
}

// Popup dışına tıklayınca kapansın
window.onclick = function(e){

    if(e.target === popup){
        popup.style.display="none";
    }

    if(e.target === giftPopup){
        giftPopup.style.display="none";
    }

};// ===========================
// FOTOĞRAF LIGHTBOX
// ===========================

const photos = document.querySelectorAll(".photo");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = photo.src;

    });

});

if(closeLightbox){

    closeLightbox.onclick = () => {

        lightbox.style.display = "none";

    }

}

// ===========================
// MÜZİK
// ===========================

const musicBtn = document.getElementById("musicBtn");
const player = document.getElementById("player");

let playing = false;

if(musicBtn){

musicBtn.onclick = ()=>{

if(!player) return;

if(playing){

player.pause();
musicBtn.innerHTML="🎵 Şarkımız";

}else{

player.play();
musicBtn.innerHTML="⏸ Müziği Durdur";

}

playing=!playing;

};

}

// ===========================
// VİDEO
// ===========================

const videoBtn = document.getElementById("videoBtn");
const videoPlayer = document.getElementById("videoPlayer");

if(videoBtn){

videoBtn.onclick=()=>{

if(videoPlayer.style.display==="block"){

videoPlayer.pause();

videoPlayer.style.display="none";

}else{

videoPlayer.style.display="block";

videoPlayer.play();

videoPlayer.scrollIntoView({
behavior:"smooth"
});

}

};

}

// ===========================
// HAREKETLİ KALPLER
// ===========================

const hearts=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="absolute";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(15+Math.random()*25)+"px";
heart.style.opacity=Math.random();
heart.style.color="#ff4d88";
heart.style.transition="all 8s linear";

hearts.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-120vh)";
heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,500);

// ===========================
// BİTTİ
// ===========================