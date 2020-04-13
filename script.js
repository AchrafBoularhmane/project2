function toggle(){
    var menu = document.getElementById("Menu")
    var menuoverlay = document.getElementById("menu-overlay")
    menu.classList.toggle('active')
    menuoverlay.classList.toggle('active')
}

var slider = document.getElementById("slider")
var images = slider.getElementsByTagName("img")
var temp = 0;
function nextImg(){
    images[temp].classList.remove('active');
    temp = (temp+1)% images.length;
    images[temp].classList.add('active')
}
function PrevImg(){
    images[temp].classList.remove('active');
    temp = (temp-1+images.length)% images.length;
    images[temp].classList.add('active')
}
