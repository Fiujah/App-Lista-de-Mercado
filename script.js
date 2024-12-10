let currentImageIndex = 2; // Inicia com a imagem do meio
const images = [
    'imagens/1.png',
    'imagens/2.png',
    'imagens/3.png',
    'imagens/4.png',
    'imagens/5.png'
];

function highlightImage(index) {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumbnail, i) => {
        if (i === index) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
}

function expandImage(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = images[index];
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = images[currentImageIndex];
}

function copiarPix() {
    const chavePix = document.getElementById('chave_pix').textContent.trim();
    navigator.clipboard.writeText(chavePix).then(() => {
        const mensagem = document.getElementById('mensagem');
        mensagem.style.display = 'block';
        setTimeout(() => {
            mensagem.style.display = 'none';
        }, 3000); // Oculta a mensagem após 3 segundos
    }).catch(err => {
        console.error('Erro ao copiar chave Pix: ', err);
    });
}
  
