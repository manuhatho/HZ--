

function scrollBtns(){

    const carousel1 = document.querySelector(".carousel-1");
    const carousel2 = document.querySelector(".carousel-2");
    const carousel3 = document.querySelector(".carousel-3");
    const carousel4 = document.querySelector(".carousel-4");
    
    const arrowBtns = document.querySelectorAll('.card1');
    const arrowBtns2 = document.querySelectorAll('.card2');
    const arrowBtns3 = document.querySelectorAll('.card3');
    const arrowBtns4 = document.querySelectorAll('.card4');
    
    
    const firstDiapoWidth =  document.querySelector('.carousel-1').offsetWidth;
    const firstDiapoWidth2 =  document.querySelector('.carousel-2').offsetWidth;
    const firstDiapoWidth3 =  document.querySelector('.carousel-3').offsetWidth;
    const firstDiapoWidth4 =  document.querySelector('.carousel-4').offsetWidth;
    
    
    arrowBtns.forEach(btn =>{
    
       btn.addEventListener("click", ()=>{
        
        console.log('click');
        carousel1.scrollLeft += btn.id === "previous" ? -firstDiapoWidth : firstDiapoWidth;
    
       })
    
    })
    arrowBtns2.forEach(btn =>{
    
       btn.addEventListener("click", ()=>{
        
        console.log('click');
        carousel2.scrollLeft += btn.id === "previous" ? -firstDiapoWidth : firstDiapoWidth2;
    
       })
    
    })
    arrowBtns3.forEach(btn =>{
    
       btn.addEventListener("click", ()=>{
        
        console.log('click');
        carousel3.scrollLeft += btn.id === "previous" ? -firstDiapoWidth : firstDiapoWidth3;
    
       })
    
    })
    arrowBtns4.forEach(btn =>{
    
       btn.addEventListener("click", ()=>{
        
        console.log('click');
        carousel4.scrollLeft += btn.id === "previous" ? -firstDiapoWidth : firstDiapoWidth4;
    
       })

      
    
    })

    
    
    }
    scrollBtns();