import React from "react";
import { connect } from "react-redux";
import { addTodo, showNotification } from "./actionCreators/actionCreators";



class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    };
    this.changeInput = this.changeInput.bind(this);
    this.addTodoEvent = this.addTodoEvent.bind(this);
  }

  

  changeInput(e) {
    const newVal = e.target.value;
    this.setState({
      inputVal: newVal
    });
  }
  
  

  addTodo = (newTodo) => {
    this.props.addTodo({
      content: newTodo,
      id: Math.random(),
      checked: false
    });
  }

  addTodoEvent(event) {
    event.preventDefault();
    this.addTodo(this.state.inputVal);
    this.props.showNotification("Todo was added")
    this.setState({
      inputVal: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.addTodoEvent}>
        <div className="input-field" style={{margin: "35px 0 35px 0" }}>
          <input
            type="text"
            value={this.state.inputVal}
            onChange={this.changeInput}
            placeholder="Add Todo..."
          />
        </div>
        
      </form>
    );
  }
}



const mapDispatchToProps = dispatch => ({

  addTodo: todos => {
    dispatch(addTodo(todos));
  },
  showNotification: (value) => {
    dispatch(showNotification(value))
  }
 
});
export default connect(null, mapDispatchToProps)(AddTodo);
