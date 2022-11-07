const moveableDiv = document.getElementById('moveable'),
    movableWrapper = document.getElementsByClassName('moving__container-wrapper');
const l1 = document.getElementById('level_1'),
    l2 = document.getElementById('level_2'),
    l3 = document.getElementById('level_3');

window.onmousemove = e => {

    const mouseX = e.clientX,
        mouseY = e.clientY;


    const xPos = (mouseX - (window.innerWidth / 2)),
        yPos = (mouseY - (window.innerHeight / 2));

    l1.animate({
        transform: `translate(${xPos / 5}px, ${yPos / 5}px)`
    }, {
        duration: 8000,
        fill: "forwards",
        easing: "ease"
    })

    l2.animate({
        transform: `translate(${xPos / 7.5}px, ${yPos / 7.5}px)`
    }, {
        duration: 8000,
        fill: "forwards",
        easing: "ease"
    })

    l3.animate({
        transform: `translate(${xPos / 10}px, ${yPos / 10}px)`
    }, {
        duration: 8000,
        fill: "forwards",
        easing: "ease"
    })
}