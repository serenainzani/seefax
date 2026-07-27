export interface Recipe {
  name: string;
  thumbnail: string;
  instructions: string;
  ingredients: { ingredient: string; measure: string }[];
}

interface RawMeal {
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  [key: `strIngredient${number}`]: string | null | undefined;
  [key: `strMeasure${number}`]: string | null | undefined;
}

export async function fetchRandomRecipe(): Promise<Recipe> {
  const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  if (!response.ok) {
    throw new Error(`TheMealDB request failed: ${response.status}`);
  }
  const data = await response.json();
  const meal: RawMeal = data.meals[0];

  const ingredients: Recipe["ingredients"] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push({ ingredient: ingredient.trim(), measure: (measure ?? "").trim() });
    }
  }

  return {
    name: meal.strMeal,
    thumbnail: meal.strMealThumb,
    instructions: meal.strInstructions,
    ingredients,
  };
}
