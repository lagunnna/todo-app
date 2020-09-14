import { CATEGORIES_ACTIONS } from '../constants';

const defaultState = { categories: [], currentCategory: '' };

export function categoriesReducer(state = defaultState, action) {
  switch (action.type) {
    case CATEGORIES_ACTIONS.ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, { ...action.payload }],
      };
    case CATEGORIES_ACTIONS.DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter((category) => category.id !== action.payload.id),
      };
    case CATEGORIES_ACTIONS.TOGGLE_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload.text,
      };
    default:
      return state;
  }
}
