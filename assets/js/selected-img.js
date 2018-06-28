var selectedImg = document.querySelector('.selected-img img');
var imgBox = document.querySelector('.selected-img');;
var galleryImgs = document.querySelectorAll('.flexbin img');
var deselectImgBtn = document.querySelector('#deselect-img-btn');

deselectImgBtn.addEventListener('click', function(){
    imgBox.style.display = 'none';
})

galleryImgs.forEach(function(img) {
    img.addEventListener('click', function () {
        console.log(img.src);
        selectedImg.src = img.src;
        selectedImg.style.display = 'block';
    });
})

galleryImgs.onclick = (event) => {
    console.log(event);
}