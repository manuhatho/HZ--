
 
 function menus(){
    const menu2 = document.querySelector(".menu2");
    const menu = document.querySelector(".menu");
    const menuLink = document.querySelectorAll("#link_menu");
    const nav = document.querySelector(".nav2");
    const navLeft = document.getElementById("left");
    const navRight = document.getElementById("right");
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
            navLeft.classList.toggle("active");
            navRight.classList.toggle("active");

         
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

function  initSlider () {
    const boxes = document.querySelector('.boxes');
    const arrowBtns = document.querySelectorAll('.rooms .arrow-scroll');
    const firstCardWidth = boxes.querySelector('.box').offsetWidth;
 
    let isDragging = false, startX, startScrollLeft;
 
    // Add event Listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach(btn => {
     btn.addEventListener("click", () => {
        boxes.scrollLeft += btn.id === "previous" ? -firstCardWidth : firstCardWidth;
     })
    })
 
    const dragStart = (e) => {
     isDragging = true;
     boxes.classList.add("dragging");
     // Records the initial cursor and scroll position of the carousel
     startX = e.pageX;
     startScrollLeft = boxes.scrollLeft;
    }
 
    const dragging = (e) => {
 
     if(!isDragging) return;  // if isDragging is false return from here
     // Updates the scroll postion of the carousel based on the cursor movement
     boxes.scrollLeft = startScrollLeft - (e.pageX - startX);
    }
 
    const dragStopt = () => {
     isDragging = false;
     boxes.classList.remove("dragging");
    }
 
    boxes.addEventListener("mousedown", dragStart);
    boxes.addEventListener("mouseup", dragStopt);
    boxes.addEventListener("mousemove", dragging);
}
initSlider();



    function arrowTop(){

        const arrowUp = document.querySelector(".arrow-up");

        arrowUp.addEventListener('click', ()=>{
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        document.addEventListener("scroll", ()=>{
            if(window.scrollY > 1000){
                arrowUp.classList.add("active")
            } else {
                arrowUp.classList.remove("active")
            }
        })
    }

    arrowTop();


    