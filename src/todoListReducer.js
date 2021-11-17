
//actions for reducer function
const actionsTodoListReducer = {
    init: "TODO_INIT",
    fetchSuccess: "FETCH_TODO_SUCCESS", 
    fetchFail: "FETCH_TODO_FAILURE",
    removeTodo: "REMOVE_TODO",
    addTodo: "ADD_TODO",
    updateTodoStatus: "APDATE_STATUS"
}

const todoListReducer = (state, action) => {
  console.log(state)
  console.log(action)
    switch (action.type) {
      /* case actionsTodoListReducer.init:
        return {
          ...state,
          isLoading: true,
          isError: false,
        }; */
      case actionsTodoListReducer.fetchSuccess:
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case actionsTodoListReducer.fetchFail:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case actionsTodoListReducer.removeTodo:
        
        return {
          ...state,
          data: state.data.filter((todo) => todo.id !== action.payload),
        };
      case actionsTodoListReducer.addTodo:
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      case actionsTodoListReducer.updateTodoStatus:
        return {
          ...state,
          data: action.payload,
        }
      default:
        throw new Error();
    }
  };

 
  export default todoListReducer 
  export {actionsTodoListReducer as actions}
  