function removeBlueFunction1() {
    const msg1 = document.getElementById('msg-1')
    const redDot = document.getElementById('red-dot1')
    msg1.classList.remove('blue')
    redDot.classList.add('hidden')
}

function removeBlueFunction2() {
    const msg2 = document.getElementById('msg-2')
    const redDot = document.getElementById('red-dot2')
    msg2.classList.remove('blue')
    redDot.classList.add('hidden')
}

function removeBlueFunction3() {
    const msg3 = document.getElementById('msg-3')
    const redDot = document.getElementById('red-dot3')
    msg3.classList.remove('blue')
    redDot.classList.add('hidden')
}


const cardWrapper = document.getElementsByClassName('message')
const buttons = document.querySelectorAll('.top-right-content button')
const dots = document.querySelectorAll('.dot')

buttons.forEach((button) =>
    button.addEventListener("click", () => {
        for(i = 0; i<cardWrapper.length; i++){
            cardWrapper[i].classList.remove("blue");
        }
        for(i = 0; i<dots.length; i++){
            dots[i].classList.add('hidden');
        }

    counter();
}));




function counter () {
    var parent = document.getElementById("main-cont");
    var nodesSameClass = parent.getElementsByClassName("blue");
    const location = document.querySelector('.counter')
    let num = (nodesSameClass.length);
    location.innerText = num

}
