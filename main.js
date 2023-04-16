let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}
//show/hide faq answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => ( 
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('open')


        //change icon

        const icon = faq.querySelector('.faq_icon i');
        if( icon.className=== 'uil uil-plus'){
            icon.className = 'uil uil-minus'
        }
        else{
            icon.className= 'uil uil-plus'
        }
    })
))

//show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click',()=>{
    menu.style.display="flex";
    closeBtn.style.display="inline-block";
    menuBtn.style.display="none";
})

//close nav menu
const closeNav = ()=>{
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
}
closeBtn.addEventListener('click',closeNav);