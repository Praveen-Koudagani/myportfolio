const navbar=document.querySelector(".navbar");
const navoffsettop=navbar.offsetTop;
const sections=document.querySelectorAll("section");
const navlinks=document.querySelectorAll(".nav-item");
const skillbar=document.querySelector('.progress-bars-wrapper');
const percents=[50,70,65,50,40];
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>=navoffsettop){
      navbar.classList.add('sticky')  
    }
    else{
        navbar.classList.remove('sticky')
    }
    sections.forEach((section,i)=>{
        if(window.pageYOffset>=section.offsetTop-10){
            navlinks.forEach(navbarlink=>{
                navbarlink.classList.remove('change')
            })
            navlinks[i].classList.add('change');
        }
    })
    if(window.pageYOffset+window.innerHeight>=skillbar.offsetTop){
        document.querySelectorAll('.progress-percent')
        .forEach((el,i)=>{
            el.style.width=`${percents[i]}%`;
        })
    }
})
