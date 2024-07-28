import api from "./../axiosconfig";
export async function searchMeals(context, keyword) {
  let abortController = null;
  // Abort the previous request if it's still ongoing
  if (abortController) {
    abortController.abort();
  }
  abortController = new AbortController();
  const signal = abortController.signal;
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`,
      { signal }
    );
    if (!response.ok) {
      throw new Error("Network response not ok");
    }
    const data = await response.json();
    context.commit("setSearchedMeals", data.meals);
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.log(err);
    }
  }
}

export function searchMealsByLetter(context, letter) {
  api.get(`search.php?f=${letter}`).then(({ data }) => {
    context.commit("setMealsByLetter", data.meals);
  });
}

export function searchMealsByIngredient(context, ingredient) {
  api.get(`filter.php?i=${ingredient}`).then(({ data }) => {
    context.commit("setMealsByIngredient", data.meals);
  });
}
