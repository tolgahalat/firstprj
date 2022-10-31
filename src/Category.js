import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Category extends Component {
  // constructor(props) {
  // super(props);
  // state:{}
  // this.state = {
  //   categories: [
  //     { cId: 1, cName: "Cat1" },
  //     { cId: 2, cName: "Cat2" },
  //     { cId: 3, cName: "Cat3" },
  //     { cId: 4, cName: "Cat4" },
  //   ],
  // };
  // }
  state = {
    categories: [
      { cId: 1, cName: "Cat1" },
      { cId: 2, cName: "Cat2" },
      { cId: 3, cName: "Cat3" },
      { cId: 4, cName: "Cat4" },
    ],
    // curCat: "-",
  };

  // changeCat = (c) => {
  //   this.setState({ curCat: c.cName });
  // };

  render() {
    return (
      <div>
        <h1>{this.props.catProps.title}</h1>
        <ListGroup>
          {this.state.categories.map((c) => (
            <ListGroupItem key={c.cId} onClick={() => this.props.changeCat(c)}>
              {c.cName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <p>{this.props.curCat}</p>
      </div>
    );
  }
}
