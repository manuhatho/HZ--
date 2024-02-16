
 function menus(){
    const menu2 = document.querySelector(".menu2");
    const menu = document.querySelector(".menu");
    const menuLink = document.querySelectorAll("#link_menu");
    const nav = document.querySelector(".nav2");
    const header = document.querySelector("header");
    const sect1 = document.querySelector(".section-1");
    const sect3 = document.querySelector(".section-3");
    const sect4 = document.querySelector(".section-4");

  
    menuLink.forEach((link) =>{
        link.addEventListener("click", ()=>{
            menu.classList.toggle("active");
            menu2.classList.toggle("active");
            nav.classList.toggle("active");
            header.classList.toggle("active");
            sect1.classList.toggle("active");
            sect3.classList.toggle("active");
            sect4.classList.toggle("active");
         
        })
    })
       
    
        let prevY = 0;
        
        document.addEventListener('scroll', ()=>{
            let scrollTop = window.scrollY || document.documentElement.scrollTop ;
            
            if(scrollTop > prevY) {
                menu2.style.top = "-100px";
                menu2.style.transform = "translateX(500px)"
                menu2.classList.add('actives');
               
            
            }
            else{
                menu2.style.top = "100px";
                menu2.style.transform = "translateX(0)"
                menu2.classList.remove('actives');
               
              
             
            }
        
            prevY = scrollTop;
        })

        
       

   
}

menus();

function scrollMenuVisibility(){

    const menu2 = document.querySelector(".menu2");
   window.addEventListener("scroll",()=>{
    var scrollPosition = window.scrollY;
    var level = 700;
    if(scrollPosition > level){
        menu2.style.visibility = "visible"
    } else{
        menu2.style.visibility = "hidden"
    }
   
   } )


}
scrollMenuVisibility();

