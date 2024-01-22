// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//time

var currentTime = document.querySelector("#current-time");
function updateTime(){
    let a = new Date();

    let year = a.getFullYear();
    let hour = a.getHours();
    let minute = a.getMinutes();
    let second = a.getSeconds();

    currentTime.innerHTML = `${year}&copy    ${hour}:${minute}:${second}`;
}

setInterval(updateTime,1000);
updateTime();