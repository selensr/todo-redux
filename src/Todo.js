import React from "react";
import { connect } from "react-redux";
import { removeTodo, completeStatus, showNotification } from "./actionCreators/actionCreators";
import styled from 'styled-components';

//text-decoration: ${props => !props.checked ? 'line-through' : null } onClickle senkronize olduğu için mi çalışmadı

const Todos = styled.div`
  display: block;
  padding: 5px;
  border-bottom: 1px solid green;
  cursor: pointer;
  margin-bottom: 10px;
`
const Span = styled.span`
  float: right;
`
function Todo(props) {
  const { content, id, checked } = props;
  let itemClass = "todo-item";
  if (checked) {
    itemClass += " checked";
  }

  return (
    <Todos
      className={itemClass}
      onClick={() => {
        props.completeStatus(id);
      }}
    >
      {content}
      <Span
        onClick={e => {
          e.stopPropagation();
          props.removeTodo(id);
          props.showNotification("Todo was deleted")
        }
      }
      >
        X
      </Span>
    </Todos>
  );
}



const mapDispatchToProps = dispatch => ({
  removeTodo: todo => {
    dispatch(removeTodo(todo));
  },
  completeStatus: todos => {
    dispatch(completeStatus(todos));
  },
  showNotification: (value) => {
    dispatch(showNotification(value))
  }
});
export default connect(null, mapDispatchToProps)(Todo);
