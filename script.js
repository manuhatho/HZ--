function menus(){
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav2");
    const header = document.querySelector("header");
  
  
        menu.addEventListener("click", ()=>{
            menu.classList.toggle("active");
            nav.classList.toggle("active");
            header.classList.toggle("active");
         
        })
       

   
}

menus();