const slideroner = document.querySelectorAll('.crausel-container');



slideroner.forEach((slider)=>{
    let pressed = false;
    let startX;
    let scrollLeft;

    slider.scrollLeft = slider.scrollWidth;
    slider.addEventListener('mousedown', (e) => {
        pressed = true;
        startX = e.pageX - slider.offsetLeft; 
        scrollLeft = slider.scrollLeft;
    })
    slider.addEventListener('mouseleave', () => {
        pressed = false;
    })
    slider.addEventListener('mouseup', () => {
        pressed = false;
    })
    slider.addEventListener('mousemove', (e) => {
        if(!pressed) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = x - startX;
        slider.scrollLeft = scrollLeft - walk;
        console.log(slider.scrollLeft);
    })
})




