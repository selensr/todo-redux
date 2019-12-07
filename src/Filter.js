import React, { Component } from "react";
import { connect } from "react-redux";
import { setFilter } from "./actionCreators/actionCreators";
import styled from "styled-components";

const options = [
  { label: "All", labelKey: "all" },
  { label: "Completed", labelKey: "completed" },
  { label: "Uncompleted", labelKey: "uncompleted" }
];

const Filters = styled.div`
  display: inline-block;
  width: 200px;
  margin: 10px;
  font-size: 20px;
  padding: 15px;
  border-radius: 5px;
  color: #fff;
  transition: all .3s ease
  cursor: pointer;

  &:hover { box-shadow: 5px 5px 5px 0px rgba(195,75,219,1); }
  &:active {transform: scale(.96); }
  &:first-child {
    background: rgba(86, 96, 236, 0.87);
  }
  &:nth-child(2){
    background: rgba(236, 86, 211, 0.87);
  }
  &:last-child {
    background: rgba(236, 221, 86, 0.87);
  }
`;

class Filter extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="filter-container" style={{ textAlign: "center" }}>
        {options.map(option => {
          return (
            <Filters onClick={() => this.props.changeFilter(option.labelKey)}>
              {option.label}
            </Filters>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeFilter: state.filter
  };
};

const mapDispatchToProps = dispatch => ({
  changeFilter: newFilter => {
    dispatch(setFilter(newFilter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
