let position = 0;

const prevSlide = function (){
    const imageSlider2 = document.getElementById('imageSlider2');
    position += 300;
    
    imageSlider2.style.transform = `translateX(${position}px)`;
}

const nextSlide = function () {
    const imageSlider2 = document.getElementById('imageSlider2');

    position -= 300;
    if (position <=-600){
        position = 0
    }

    imageSlider2.style.transform = `translateX(${position}px)`;
}