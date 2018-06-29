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
        containerForSelectedImg.style.height = '100%';
        enlargedSelectedImage.src = img.src;
        containerForSelectedImg.classList.add('show');
        opaqueBg.style.height = '100%';
    });
})

console.log(containerForSelectedImg.classList);
