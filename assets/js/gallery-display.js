var gallery = $('#gallery')
for(var i=1; i<=34; i++) {
    var gallery_pic =  `
        <img class='img-fluid' src='assets/img/astra-gallery-300/${i}.jpg'>
    `
    // gallery[0].append(gallery_pic)
    gallery[0].innerHTML += gallery_pic
}
console.log(gallery);