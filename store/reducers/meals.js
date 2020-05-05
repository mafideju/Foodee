import { MEALS } from '../../data/mockData';
import { TOGGLE_FAVORITE } from '../types';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const index = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if (index >= 0) {
                const newFavs = [...state.favoriteMeals];
                newFavs.splice(index, 1);
                return { ...state, favoriteMeals: newFavs };
            } else {
                const meals = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meals) };
            }
        default:
            return state;
    };
};

export default mealsReducer;