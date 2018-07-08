var allGalleryImgs = document.querySelectorAll('.flexbin img');
var enlargedSelectedImage = document.querySelector('.selected-img img');
var containerForSelectedImg = document.querySelector('.selected-img');;
var deselectImgBtn = document.querySelector('#deselect-img-btn');
var opaqueBg = document.querySelector('.opaque-bg');

deselectImgBtn.addEventListener('click', function () {
    containerForSelectedImg.style.height = '0';
    containerForSelectedImg.classList.remove('show');
    opaqueBg.style.height = '0';
})

allGalleryImgs.forEach(function (img) {
    img.addEventListener('click', function () {
        // updating img file with crisp img
        // var new_src = img.src.split('/');
        // new_src[5] = 'astra-gallery-crisp';
        // new_src= new_src.join('/')
        // img.src = new_src;
        // showing the enlarged img
        containerForSelectedImg.style.height = '100%';
        enlargedSelectedImage.src = img.src;
        containerForSelectedImg.classList.add('show');
        opaqueBg.style.height = '100%';
    });
})

