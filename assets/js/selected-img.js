var galleryImgs = document.querySelectorAll('.flexbin img');
var selectedImg = document.querySelector('.selected-img img');
var displaySelectedImg = document.querySelector('.selected-img');;
var deselectImgBtn = document.querySelector('#deselect-img-btn');

deselectImgBtn.addEventListener('click', function(){
    displaySelectedImg.style.height = '0';
    selectedImg.style.scale = '0';        
    selectedImg.style.opacity = '1';        
})

galleryImgs.forEach(function(img) {
    img.addEventListener('click', function () {
        displaySelectedImg.style.height = '100%';
        selectedImg.style.scale = '1';        
        selectedImg.style.opacity = '1';        
        selectedImg.src = img.src;
    });
})