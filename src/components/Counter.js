import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { decrement, add } from "../action/actions";
function Counter(props) {
  return (
    <div className="container-fluid row">
      <div className="col-4"></div>
      <div
        className="col-4"
        style={{
          border: "solid 1px blue",
          padding: "50px",
          marginTop: "100px",
        }}
      >
        <h3 className="col-12">{props.counter.counter}</h3>
        <Button
          variant="secondary"
          className="col-6"
          onClick={() => props.decrement()}
        >
          -
        </Button>
        <Button className="col-6" onClick={() => props.add()}>
          +
        </Button>
      </div>
      <div className="col-4"></div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counter: state.CounterReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(add()),
    decrement: () => dispatch(decrement()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
