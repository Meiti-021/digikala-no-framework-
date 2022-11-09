const slid = document.querySelectorAll('.item');
const dots = document.querySelector('.dots')

let flag = 1;

for(i of slid) {
    dots.innerHTML += '<div class="dot"></div>'
}


const dot = document.querySelectorAll('.dot')

dot[0].classList.add('active-dot')

setInterval(() => {
    if(flag === slid.length){
        flag = 1;
        slid.forEach((pic , index)=>{
            pic.classList.remove('active');
        })
        dot.forEach((element)=>{
            element.classList.remove('active-dot')
        })
        dot[0].classList.add('active-dot')
    } else {
        slid[flag].classList.add('active');
        dot.forEach((element)=>{
            element.classList.remove('active-dot')
        })
        dot[flag].classList.add('active-dot');
        flag ++;
    }
}, 5000);

