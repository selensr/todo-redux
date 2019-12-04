import React from "react";
import Todo from "./Todo";
import styled from 'styled-components';
import { Title } from "./sharedStyles";

const Todolist = styled.div`
  width: 50rem;
  align-items: center;
`
const Todotitle = styled(Title)`
  margin-top: 35px;
  font-size: 22px;
`
;
class TodoList extends React.Component {
  render() {
    return (
      <Todolist className="todo-list">

        <Todotitle>
          {this.props.title} ({this.props.todos.length})
        </Todotitle>

        {this.props.todos.map(todo => {
          return (
            <Todo
              {...todo}
              key={todo.id}
            />
          );
        })}
      </Todolist>
    );
  }
}

export default TodoList;
