const container = document.querySelector(".container");
const btnToggle = document.querySelector(".btnToggle");
const paragraph = document.querySelector(".paragraph");

let isTrue = false;
btnToggle.addEventListener("click", function (){
    if (!isTrue){
        container.style.backgroundColor = "black";
        paragraph.style.color = "white";

        isTrue = true;
    }else{
        container.style.backgroundColor = "white";
        paragraph.style.color = "black";

        isTrue = false;
    }
});
