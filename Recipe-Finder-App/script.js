// =========================================
// Select HTML Elements
// =========================================

const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-btn");
const recipesContainer = document.querySelector(".recipes-container");

// =========================================
// API URL
// =========================================

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

// =========================================
// Event Listeners
// =========================================

// Search Button
searchButton.addEventListener("click", () => {

    const recipeName = searchInput.value.trim();

    if (recipeName === "") {

        alert("Please enter a recipe name.");

        return;

    }

    getRecipes(recipeName);

});

// Press Enter
searchInput.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {

        searchButton.click();

    }

});

// =========================================
// Fetch Recipes
// =========================================

async function getRecipes(recipeName) {

    try {

        recipesContainer.innerHTML = "<h2>Loading Recipes...</h2>";

        const response = await fetch(API_URL + recipeName);

        const data = await response.json();

        if (!data.meals) {

            recipesContainer.innerHTML = "<h2>No Recipes Found</h2>";

            return;

        }

        displayRecipes(data.meals);

    }

    catch (error) {

        recipesContainer.innerHTML = "<h2>Something went wrong!</h2>";

        console.error(error);

    }

}

//part-2
// =========================================
// Display Recipes
// =========================================

function displayRecipes(meals) {

    recipesContainer.innerHTML = "";

    let cards = "";

    meals.forEach((meal) => {

        cards += `

        <div class="recipe-card">

            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">

            <h2>${meal.strMeal}</h2>

            <p><strong>Category:</strong> ${meal.strCategory}</p>

            <p><strong>Area:</strong> ${meal.strArea}</p>

            <button
                class="view-btn"
                data-id="${meal.idMeal}">
                View Recipe
            </button>

        </div>

        `;

    });

    recipesContainer.innerHTML = cards;

    const buttons = document.querySelectorAll(".view-btn");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const recipeId = button.dataset.id;

            getRecipeDetails(recipeId);

        });

    });

}

//part3
// =========================================
// Popup Elements
// =========================================

const popup = document.getElementById("recipePopup");
const popupDetails = document.getElementById("popupDetails");
const closeButton = document.querySelector(".close-btn");

// =========================================
// Get Recipe Details
// =========================================

async function getRecipeDetails(id){

    try{

        popupDetails.innerHTML="<h2>Loading...</h2>";

        popup.style.display="block";

        const response=await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        const data=await response.json();

        showRecipePopup(data.meals[0]);

    }

    catch(error){

        popupDetails.innerHTML="<h2>Failed to load recipe.</h2>";

        console.error(error);

    }

}
//part4
// =========================================
// Show Recipe Popup
// =========================================

function showRecipePopup(meal) {

    let ingredients = "";

    for (let i = 1; i <= 20; i++) {

        if (meal[`strIngredient${i}`] && meal[`strIngredient${i}`].trim() !== "") {

            ingredients += `
                <li>
                    ${meal[`strIngredient${i}`]} -
                    ${meal[`strMeasure${i}`]}
                </li>
            `;

        }

    }

    popupDetails.innerHTML = `
         <div style="margin-top:20px;"></div>

         <h1>${meal.strMeal}</h1>

         <img src="${meal.strMealThumb}" alt="${meal.strMeal}">

        <h3>Category : ${meal.strCategory}</h3>

        <h3>Area : ${meal.strArea}</h3>

        <h2>Ingredients</h2>

        <ul>
            ${ingredients}
        </ul>

        <h2>Instructions</h2>

        <p>${meal.strInstructions}</p>

    `;

}
// =========================================
// Close Popup
// =========================================

closeButton.addEventListener("click",()=>{

    popup.style.display="none";

});

// Close when clicking outside popup

window.addEventListener("click",(event)=>{

    if(event.target===popup){

        popup.style.display="none";

    }

});