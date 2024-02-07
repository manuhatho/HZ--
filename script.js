function menu(){
    const menu = document.querySelectorAll("#menu");
    const nav = document.querySelector(".nav2");
  
    menu.forEach((index)=>{
        index.addEventListener("click", ()=>{
            index.classList.toggle("active");
            nav.classList.toggle("active");
         
        })
    })

   
}

menu();