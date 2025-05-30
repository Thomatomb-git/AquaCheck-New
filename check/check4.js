const frame    = document.querySelector('.map-container');
const mapInner = frame.querySelector('.map-inner');
const img      = mapInner.querySelector('.map-bg');

// Ukuran container & gambar
const fw = frame.clientWidth,  fh = frame.clientHeight;
const iw = img.naturalWidth,  ih = img.naturalHeight;

// Batas pergeseran (clamp)
const minX = fw - iw, maxX = 0;
const minY = fh - ih, maxY = 0;

// Koordinat main-pin
const pinX = 325;
const pinY = 883;

// Helper untuk clamp
function clamp(v, min, max) {
    return Math.max(min, Math.min(v, max));
}

// Inisialisasi: posisikan peta sehingga main-pin di tengah
let currentX = (fw / 2) - pinX;
let currentY = (fh / 2) - pinY;
currentX = clamp(currentX, minX, maxX);
currentY = clamp(currentY, minY, maxY);
mapInner.style.left = `${currentX}px`;
mapInner.style.top  = `${currentY}px`;

// Fungsi yang menganimasikan centering
function centerOnPin() {
    mapInner.style.transition = 'left 0.4s ease-in-out, top 0.4s ease-in-out';
    const targetX = (fw / 2) - pinX;
    const targetY = (fh / 2) - pinY;
    currentX = clamp(targetX, minX, maxX);
    currentY = clamp(targetY, minY, maxY);
    mapInner.style.left = `${currentX}px`;
    mapInner.style.top  = `${currentY}px`;
    mapInner.addEventListener('transitionend', function handler() {
        mapInner.style.transition = 'none';
        mapInner.removeEventListener('transitionend', handler);
    });
}

// Panggil sekali saat load
centerOnPin();

// --- Drag & pan logic ---
let isDragging = false, startX = 0, startY = 0;
frame.addEventListener('mousedown', e => {
    isDragging = true;
    frame.style.cursor = 'grabbing';
    startX = e.clientX;
    startY = e.clientY;
    mapInner.style.transition = 'none';
});

document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const newX = clamp(currentX + dx, minX, maxX);
    const newY = clamp(currentY + dy, minY, maxY);
    mapInner.style.left = `${newX}px`;
    mapInner.style.top  = `${newY}px`;
});

document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    frame.style.cursor = 'grab';
    currentX = parseInt(mapInner.style.left, 10);
    currentY = parseInt(mapInner.style.top,  10);
});

img.addEventListener('dragstart', e => e.preventDefault());

// Hook tombol center
document.getElementById('center-btn')
    .addEventListener('click', centerOnPin);

// Chat sidebar toggle logic
const csButton = document.getElementById('cs-button');
const overlay  = document.getElementById('overlay');
const sidebar  = document.getElementById('chat-sidebar');
const closeBtn = document.getElementById('close-chat');
if (csButton && overlay && sidebar && closeBtn) {
    csButton.addEventListener('click', () => {
        overlay.classList.add('active');
        sidebar.classList.add('active');
    });
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
        sidebar.classList.remove('active');
    });
    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
        sidebar.classList.remove('active');
    });
}