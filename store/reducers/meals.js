import { MEALS } from '../../data/mockData';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'typeName':
            return { ...state, ...payload };
        default:
            return state;
    };
};

export default mealsReducer;