const InputSearch=()=>{
    //Geting the Input Value
    const getInput=document.getElementById('input-button');
   const inputText=getInput.value;
    //Clearing the Input Filed
    getInput.value='';
    // consoleing the Value
   console.log(inputText);
//    geting api from server
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>displayMeals(data.meals))
       
}

const displayMeals=(meals)=>{
//Loping items
const displayMealsItem=document.getElementById('search-items');
    meals.forEach(meal=>{
    const div=document.createElement('div');
        div.classList.add('col')
        //displing intems
        div.innerHTML=`  <div onclick="loadMealDetails('${meal.idMeal}')" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
        </div>
    </div>`  ;
    displayMealsItem.appendChild(div)   

    


    })
}