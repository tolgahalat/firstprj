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
      // { cId: 1, cName: "Cat1" },
      // { cId: 2, cName: "Cat2" },
      // { cId: 3, cName: "Cat3" },
      // { cId: 4, cName: "Cat4" },
    ],
    // curCat: "-",
  };

  // changeCat = (c) => {
  //   this.setState({ curCat: c.cName });
  // };

  getCategories = () => {
    fetch("http://localhost:3000/categories")
    .then(response => response.json()).then(data => this.setState({categories:data}));
  }

  componentDidMount(){
    this.getCategories();
  }

  render() {
    return (
      <div>
        <h1>{this.props.catProps.title}</h1>
        <ListGroup >
          {this.state.categories.map((c) => (
            <ListGroupItem active={c.categoryName === this.props.curCat ? true : false} 
            key={c.id} onClick={() => this.props.changeCat(c)}>
              {c.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <p>{this.props.curCat}</p>
      </div>
    );
  }
}
