import { TODOS_ACTIONS, VISIBILITY_FILTERS } from '../constants';

const defaultState = { todos: [], visibilityFilter: VISIBILITY_FILTERS.ALL, todoSearch: '' };

export function todosReducer(state = defaultState, action) {
  switch (action.type) {
    case TODOS_ACTIONS.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { ...action.payload, done: false }],
      };
    case TODOS_ACTIONS.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              done: !todo.done,
            };
          }
          return todo;
        }),
      };
    case TODOS_ACTIONS.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case TODOS_ACTIONS.SEARCH_TODO:
      return {
        ...state,
        todoSearch: action.payload.searchText,
      };
    case VISIBILITY_FILTERS.CHANGE:
      return {
        ...state,
        visibilityFilter: action.payload.filter,
      };
    default:
      return state;
  }
}
