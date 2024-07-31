let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    // Debugging output
    console.log('Total slides:', slides.length);
    console.log('Current slide index:', slideIndex);

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        console.log('Slide', i, 'set to display:none');
    }
    slides[slideIndex].style.display = "flex";
    console.log('Slide', slideIndex, 'set to display:flex');

    // Check the structure of the slide
    const currentSlide = slides[slideIndex];
    const imageRows = currentSlide.getElementsByClassName('image-row');
    console.log('Number of image rows in current slide:', imageRows.length);

    for (i = 0; i < imageRows.length; i++) {
        const images = imageRows[i].getElementsByTagName('img');
        console.log('Number of images in row', i, ':', images.length);
        for (let j = 0; j < images.length; j++) {
            console.log('Image', j, 'src:', images[j].src);
        }
    }
}
