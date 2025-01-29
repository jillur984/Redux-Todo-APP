import {
  ADD_TODO,
  FILTER_TODOS,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_SEARCHTERM,
} from "./actionTypes";

export const addTodos = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const toggleTodos = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodos = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

// received a filter function as a parametar
export const filteredTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

export const markAllCompleted = () => ({});

export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCHTERM,
  payload: { searchTerm },
});
