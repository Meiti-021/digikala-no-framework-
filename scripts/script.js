const slider = document.querySelectorAll('.item');
const dots = document.querySelector('.dots')

let flag = 1;

for(i of slider) {
    dots.innerHTML += '<div class="dot"></div>'
}


const dot = document.querySelectorAll('.dot')

dot[0].classList.add('active-dot')

setInterval(() => {
    if(flag === slider.length){
        flag = 1;
        slider.forEach((pic , index)=>{
            pic.classList.remove('active');
        })
        dot.forEach((element)=>{
            element.classList.remove('active-dot')
        })
        dot[0].classList.add('active-dot')
    } else {
        slider[flag].classList.add('active');
        dot.forEach((element)=>{
            element.classList.remove('active-dot')
        })
        dot[flag].classList.add('active-dot');
        flag ++;
    }
}, 5000);

