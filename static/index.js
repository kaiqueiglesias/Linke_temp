//animação,animation 
const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", ()=>{
  animeScroll();
})
//menu
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var menu = document.getElementById("menu_frontal");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}
let g = 1;
function qrcode(){
  let qr = document.getElementById('qrcode_img')
  g++;
  if(g %2 == 0 ){
    qr.innerHTML = ""
  }else{
    qr.innerHTML = "<img class='img_frame' src='img/frame.png'>"
  }
}
