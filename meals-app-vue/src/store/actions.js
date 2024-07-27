import api from "./../axiosconfig";
export async function searchMeals({ commit }, keyword) {
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
    commit("setSearchedMeals", data.meals);
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.log(err);
    }
  }
}

export function searchMealsByLetter({ commit }, letter) {
  api.get(`search.php?f=${letter}`).then(({ data }) => {
    commit("setMealsByLetter", data.meals);
  });
}

export function searchMealsByIngredient({ commit }, ingredient) {
  api.get(`filter.php?i=${ingredient}`).then(({ data }) => {
    commit("setMealsByIngredient", data.meals);
  });
}
