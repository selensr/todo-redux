import React, {Component} from 'react';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import RemoveAll from "./RemoveAll";
import "./App.css";
import Filters from "./Filters";
import {connect} from "react-redux";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        _todos: [],
        todos: []
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.removeAllTodos = this.removeAllTodos.bind(this);
    this.toggleCompleteStatus = this.toggleCompleteStatus.bind(this);
  }

  componentDidMount() {
      console.log("GÜncel proplar", this.props);
    // Component oluştuktan sonra gerekli olan datayı localstoragedan geyiriyoruz.
    let localTodos = window.localStorage.getItem("todos");
    if(localTodos){
      localTodos  = JSON.parse(localTodos);
    }
    // Getirdiğimiz datayı state'e kaydediyoruz.
    this.setState({
      _todos: localTodos || [],
      todos:  localTodos || []
    })
  }

  addTodo(newTodo){
      // Parametre olarak inputtan yeni eklenen değeri "newTodo" olarak alıyoruz.
      // State'i mutate etmemek için rest operatörü ile bir kopyalama yapıp yeni todoyu concat ile ekliyoruz.
      this.setState({
        todos: [...this.state.todos].concat([
            { content: newTodo, id: Math.random(), checked: false}
        ])
      }, () => {
          // Todo ekrana eklendikten sonra bunu localstorage'a da ekliyoruz.
        window.localStorage.setItem("todos", JSON.stringify(this.state.todos))
      })
  }

  removeTodo(id){
      // Silinecek todo'nun idsini parametre olarak alıyoruz.
      // State içerisindeki todolardan filter ile bu id'yi çıkarıyoruz.
      // Mutate etmemk için filter kullandık, filter bize yeni bir array döner.
      const newArray = this.state.todos.filter((todo) => {
         return todo.id !== id;
      });
      this.setState({
          todos: newArray
      }, () => {
          window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
      });
  }

  removeAllTodos(){
    this.setState({
        todos: []
    }, () => {
        window.localStorage.removeItem("todos");
    })
  }

  toggleCompleteStatus(id){
      // Map ile mevcut todolar arasında döngüye girip, değiştirmek istediğimi farklı şekilde dönüyorum.
      // Aradığım itemin checked statusunu değiştiriyorum, rest ile kopyalayarak yani mutate etmeden.
      // Diğer elemanları olduğu gibi dönüyorum, "return todo";
      const newArr = this.state.todos.map((todo) => {
          if(id === todo.id){
              let currentTodo = {...todo};
              currentTodo.checked = !currentTodo.checked;
              return currentTodo;
          }else{
              return todo;
          }
      });
      this.setState({
          todos: newArr
      }, () => {
          window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
      });
  }

  filterTodos = (todos, filterType) => {
    if(filterType === "all"){
        return todos;
    }else if (filterType === "completed"){
        return todos.filter((todo) => todo.checked);
    }else{
        return todos.filter((todo) => !todo.checked);
    }
  }

  render(){
    return (
        <div className="App" id="todo">
            <div className="todo-list todo-list-add">
                <h3>Todo Ekle / Sil</h3>
                <div>
                    <AddTodo   onTodoAdd={this.addTodo} />
                    <RemoveAll onRemoveAll={this.removeAllTodos}/>
                    <Filters />
                </div>
            </div>
            <TodoList
                title="Todolist"
                todos={this.filterTodos(this.state.todos, this.props.activeFilter)}
                onTodoRemove={this.removeTodo}
                onCheckedToggle={this.toggleCompleteStatus} />
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeFilter: state.activeFilter
});

export default connect(mapStateToProps)(App);
