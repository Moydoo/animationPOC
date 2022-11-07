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

    let xPos_l1 = xPos / 5,
        yPos_l1 = yPos / 5,
        xPos_l2 = xPos / 7.5,
        yPos_l2 = yPos / 7.5,
        xPos_l3 = xPos / 10,
        yPos_l3 = yPos / 10;

    l1.animate({
        transform: `translate(${xPos_l1}px, ${yPos_l1}px)`
    }, {
        duration: 7000,
        fill: "forwards",
        easing: "ease"
    })

    l2.animate({
        transform: `translate(${xPos_l2}px, ${yPos_l2}px)`
    }, {
        duration: 7000,
        fill: "forwards",
        easing: "ease"
    })

    l3.animate({
        transform: `translate(${xPos_l3}px, ${yPos_l3}px)`
    }, {
        duration: 7000,
        fill: "forwards",
        easing: "ease"
    })
}