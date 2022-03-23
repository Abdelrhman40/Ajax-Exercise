
let listRecipes =[];
let recipeType = Array.from(document.querySelectorAll(".navbar .nav-item .nav-link")) // convert from nodeList to array

recipeType.forEach((element)=>{

    let typeOfRecipe = element.getAttribute("recipe");
    element.addEventListener("click",()=>{
        getRecipes(typeOfRecipe)
    })
})

function getRecipes(type="pizza") {
    let myHttp = new XMLHttpRequest();
    myHttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${type}`)
    myHttp.send()
    myHttp.addEventListener("readystatechange",(type)=>{
        if (myHttp.readyState == 4 && myHttp.status == 200) {
            listRecipes = JSON.parse(myHttp.response).recipes;
            //console.log(listRecipes);
            display();
        }
    })
}

function display() {
    let temp =``;
    listRecipes.forEach((element)=>{

        temp+=`
        <div class="col-md-3">
            <img class="w-100" src="${element.image_url}" >
            <h2>${element.title}</h2>
        </div>
        `
    })

    document.getElementById("box").innerHTML =temp;
}

getRecipes();

$(document).ready(function () {
    $("#loading").fadeOut(2000)
})