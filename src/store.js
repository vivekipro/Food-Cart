import { createStore } from "redux";
import mealReducer from "./Redux/Meal/mealReducer";

export const store = createStore(mealReducer)
