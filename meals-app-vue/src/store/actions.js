import api from "./../axiosconfig";
export function searchMeals({ commit }, keyword) {
  api.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}
