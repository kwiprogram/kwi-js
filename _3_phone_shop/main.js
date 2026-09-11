import { products } from "./data.js";

document.addEventListener("DOMContentLoaded", ()=>{
    displayProducts(products);
    displayButton();
})

function displayProducts(array){
    const itemContainer = document.querySelector(".item-container");
    itemContainer.innerHTML = array.map( (item)=>{
        return `
            <div class="card" id="pro-${item.id}">
                <div class="image">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <div class="title">
                    <p>${item.title}</p>
                </div>
            </div>
        `;
    }).join("");
}

function displayButton (){
    const categoriesButton = document.querySelector(".categories-button");
    const allButtons = products.map(item => {
        return item.category;
    })
    const setBtn = new Set(allButtons)
    const arrayBtn = ["All", ...setBtn];
    categoriesButton.innerHTML = arrayBtn.map(btn => {
        return `
             <li><button type="button" class="button" data-id="${btn}">${btn}</button></li> 
        `;
    }).join("");

    const allBtn = document.querySelectorAll(".button");
    allBtn.forEach( (button) => {
        button.addEventListener("click", function(){
            const id = this.dataset.id;
            const filtering = products.filter( item => item.category === id);

            if(id === "All"){
                displayProducts(products);
            }else{
                displayProducts(filtering);
            }

            console.log(filtering);
        });
    })
}

