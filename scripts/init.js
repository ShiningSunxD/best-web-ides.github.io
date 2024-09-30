window.onload = function(){

    sticky_header();   
    fill_navigation(); // функкция для заполнения сайдбара
}



function fill_navigation(){  
    let main = document.querySelector("main");
    let h1_list = main.querySelectorAll("h1");
    
    let aside = document.querySelector("aside");

    let row = document.getElementById("row");
    aside.style.top = row.clientHeight + 50 + "px";

    let random_id = "random_id_";
    let random_id_enum = 1;

    // каждому хедеру в main'е задаю уникальный id
    // чтобы сайдбар мог на них скроллить страницу


    for (let h1 of h1_list){

        // задаю рандомный id
        random_id = random_id + random_id_enum++; 
        h1.setAttribute("id", random_id);

        let a = document.createElement("a");
        let br = document.createElement("br");


        a.setAttribute("href", "#" + random_id);
        a.textContent = h1.textContent;


        aside.appendChild(a);
        aside.appendChild(br);
    }
    return;
}

function sticky_header(){
    let main = document.getElementById("main");
    let row = document.getElementById("row");
    let h = main.offsetTop;




    // если экран скроллится ниже хедера,
    // то ему ставится position: fixed
    document.onscroll = function () {

        let scroll = window.scrollY;
        if (scroll > h){
        row.classList.add("fixed");
        main.style.paddingTop = h + "px";
        }
        else{
            row.classList.remove("fixed");
            main.style.paddingTop = 3 + "rem";
        }

    }
    return; 
}



