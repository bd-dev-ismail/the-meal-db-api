const loadMeals = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayMeals(data.meals));
}
const displayMeals = (meals) =>{
    const mealsContainer = document.getElementById("meals-container");
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
        mealsContainer.appendChild(mealDiv)
    });
}
loadMeals('a');
