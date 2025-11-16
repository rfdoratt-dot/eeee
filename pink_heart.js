const canvas = document.getElementById('pinkboard');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function drawHeart(x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y + size / 4);
    ctx.quadraticCurveTo(x, y, x - size / 2, y);
    ctx.quadraticCurveTo(x - size, y, x - size, y + size / 2);
    ctx.quadraticCurveTo(x - size, y + size, x - size / 2, y + size * 1.3);
    ctx.quadraticCurveTo(x, y + size * 1.6, x + size / 2, y + size * 1.3);
    ctx.quadraticCurveTo(x + size, y + size, x + size, y + size / 2);
    ctx.quadraticCurveTo(x + size, y, x + size / 2, y);
    ctx.quadraticCurveTo(x, y, x, y + size / 4);
    ctx.fillStyle = '#ff9ebe';
    ctx.fill();
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHeart(canvas.width / 2, canvas.height / 2 - 50, 150);
    requestAnimationFrame(loop);
}
loop();
