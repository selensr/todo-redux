import React, { Component } from "react";
import { connect } from "react-redux";
import { setTodos } from "./actionCreators/actionCreators";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import RemoveAll from "./RemoveAll";
import Filter from "./Filter";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import 'materialize-css/dist/css/materialize.min.css'
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import { Title } from "./sharedStyles";
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Sulphur+Point&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Cantarell');
  
  body {
    display: flex;
    justify-content: center;
    align-items: center
    font-family: 'Sulphur Point', sans-serif;
    font-weight: light;
    letter-spacing: 2px;
    font-size: 22px;
    font-size: 100%;
    line-height: 1.5;
  }
`

toast.configure()

const Wrapper = styled.div`
  width: 100%;
  heigh: 98vh;
`



class App extends Component {

  componentDidMount() {
    // Component oluştuktan sonra gerekli olan datayı localstoragedan geyiriyoruz.
    let localTodos = window.localStorage.getItem("todos");
    if (localTodos) {
      localTodos = JSON.parse(localTodos);
    }
    // Getirdiğimiz datayı state'e kaydediyoruz.
    this.props.setTodos(localTodos || []);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (JSON.stringify(prevProps.todos) !== JSON.stringify(this.props.todos)) {
      window.localStorage.setItem("todos", JSON.stringify(this.props.todos));
    }
  }

  filterTodos = (todos, filterType) => {
    if (filterType === "all") {
      return todos;
    } else if (filterType === "completed") {
      return todos.filter(todo => todo.checked);
    } else {
      return todos.filter(todo => !todo.checked);
    }
  };
  


  render() {
    return (
      <Wrapper className="App" id="todo">
        <GlobalStyles />
        <div className="todo-list todo-list-add">
          <Title>To-do's</Title>
            <AddTodo  />
            <RemoveAll />
            <Filter />
        </div>

        <TodoList
          title="TodoList"
          todos={this.filterTodos(this.props.todos, this.props.activeFilter)}
          
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeFilter: state.filter,
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => ({
  setTodos: todos => {
    dispatch(setTodos(todos));
  },
 
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

/* <TodoList
  title="Tamamlanmamış Todolar"
  todos={this.state.todos.filter(todo =>
  {
    return !todo.checked;
  })}
  onTodoRemove={this.removeTodo}
  onCheckedToggle={this.toggleCompleteStatus}
/>

  <TodoList
    title="Tamamlanmış Todolar"
    todos={this.state.todos.filter(todo =>
    {
      return todo.checked;
    })}
    onTodoRemove={this.removeTodo}
    onCheckedToggle={this.toggleCompleteStatus}
  /> */

//todolist presentational component
// app container component
