import uniqid from 'uniqid';
import { TODOS_ACTIONS, CATEGORIES_ACTIONS, VISIBILITY_FILTERS } from '../constants';

export const addTodo = (text, category) => ({
  type: TODOS_ACTIONS.ADD_TODO,
  payload: {
    text,
    category,
    id: uniqid.time(),
  },
});

export const deleteTodo = (id) => ({
  type: TODOS_ACTIONS.DELETE_TODO,
  payload: {
    id,
  },
});

export const toggleTodo = (id) => ({
  type: TODOS_ACTIONS.TOGGLE_TODO,
  payload: {
    id,
  },
});

export const searchTodo = (searchText) => ({
  type: TODOS_ACTIONS.SEARCH_TODO,
  payload: {
    searchText,
  },
});

export const addCategory = (text) => ({
  type: CATEGORIES_ACTIONS.ADD_CATEGORY,
  payload: {
    text,
    id: uniqid.time(),
  },
});

export const deleteCategory = (id) => ({
  type: CATEGORIES_ACTIONS.DELETE_CATEGORY,
  payload: {
    id,
  },
});

export const changeVisibilityFilter = (filter) => ({
  type: VISIBILITY_FILTERS.CHANGE,
  payload: {
    filter,
  },
});

export const toggleCategory = (currentCategory) => ({
  type: CATEGORIES_ACTIONS.TOGGLE_CATEGORY,
  payload: {
    currentCategory,
  },
});
