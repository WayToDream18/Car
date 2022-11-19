const burgerMenu = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
if (burgerMenu) {
  const menuBody = document.querySelector(".menu__list");
  burgerMenu.addEventListener("click", (e) => {
    document.body.classList.toggle("lock");
    burgerMenu.classList.toggle("active");
    headerMenu.classList.toggle("active");
  });
}
if (headerMenu.classList.contains("active")) {
  document.body.classList.remove("lock");
  burgerMenu.classList.remove("active");
  headerMenu.classList.remove("active");
}

const header = document.querySelector('.header');
window.addEventListener('scroll',()=>{
  let scrollPos = scrollY;
  if(scrollPos > 0){
    header.classList.add('scrolled');
  }else{
    header.classList.remove('scrolled');
  }

})