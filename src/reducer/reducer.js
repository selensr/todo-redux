import {
  SET_FILTER,
  SET_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  REMOVE_ALL,
  COMPLETE_STATUS,
  SHOW_NOTIFICATION,
  
} from "../actions/actions";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

toast.configure()

const rootReducer = function(
  state = {
    filter: "all",
    todos: []
  },
  action
) {

  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.activeFilter
      };
    case SET_TODOS:
      return {
        ...state,
        todos: action.todos
      };
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat([action.todo])
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.id !== action.id;
        })
      };
    case REMOVE_ALL:
      return {
        ...state,
        todos: []
      };
    case COMPLETE_STATUS:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.id === todo.id) {
            let currentTodo = { ...todo };
            currentTodo.checked = !currentTodo.checked;
            return currentTodo;
          } else {
            return todo;
          }
        })
      };
      
      case SHOW_NOTIFICATION:
          toast(action.value, {autoClose: 2000})
        return {
          ...state,
        }
        
    default:
      return state;
  }

  ///action.filter ?????
  // object.assign({}, state, {filter: action.filter})
};

export default rootReducer;

// if (!state) {
//   state = {
//     filter: "all"
//   };
// }
// ES5'teki yazımı böyle ES6da yukarıdaki gibi yapılabilir
// bunları birbirine compile edebilen tool babel rapel
