import { createRouter, createWebHistory } from "vue-router";
import Home from "./../Views/Home.vue";
import MealsByName from "./../Views/MealsByName.vue";
import MealsByLetter from "./../Views/MealsByLetter.vue";
import Ingredients from "./../Views/Ingredients.vue";
import MealsByIngredient from "./../Views/MealsByIngredient.vue";
import DefaultLayout from "./../components/DefaultLayout.vue";
import GuestLayout from "./../components/GuestLayout.vue";
import MealDetails from "./../components/MealDetails.vue";
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/by-ingredient",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
