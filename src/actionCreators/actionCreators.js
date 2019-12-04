import {
  SET_FILTER,
  SET_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  REMOVE_ALL,
  COMPLETE_STATUS,
  SHOW_NOTIFICATION
} from "../actions/actions";

export function setFilter(newFilter) {
  return { type: SET_FILTER, activeFilter: newFilter };
}

export function setTodos(todos) {
  return { type: SET_TODOS, todos };
}

export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}

export function removeTodo(id) {
  return { type: REMOVE_TODO, id };
}

export function removeAll(todos) {
  return { type: REMOVE_ALL, todos };
}

export function completeStatus(id) {
  return { type: COMPLETE_STATUS, id };
}

export function showNotification(value) {
  return { type: SHOW_NOTIFICATION, value }
}

