import React from "react";
import { connect } from "react-redux";
import { removeAll } from "./actionCreators/actionCreators";
import styled from "styled-components";
import { Rainbow } from "./sharedStyles";

const Button = styled.button`
  ${Rainbow}
  font-family: 'Sulphur Point', sans-serif;
  font-weight: light;
  letter-spacing: 2px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  padding: 15px;
  margin: 0;
  width: 50rem;
  border-radius: 5px;
  margin-bottom: 35px;
  cursor: pointer;
`;

class RemoveAll extends React.Component {
  render() {
    return (
      <Button
        className="remove-all"
        onClick={() => {
          this.props.removeAll();
        }}
      >
        Remove All
      </Button>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  removeAll: todos => {
    dispatch(removeAll(todos));
  }
});
export default connect(null, mapDispatchToProps)(RemoveAll);
