import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actions";

export const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      state.push(action.payload);
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
  }
  return state;
};
