function menu(){
    const menu = document.querySelectorAll("#menu");
    const nav = document.querySelector(".nav2");
    const header = document.querySelector("header");
  
    menu.forEach((index)=>{
        index.addEventListener("click", ()=>{
            index.classList.toggle("active");
            nav.classList.toggle("active");
            header.classList.toggle("active");
         
        })
    })

   
}

menu();