// import logo from './logo.svg';
import React, { Component } from "react";
import "./App.css";
import Category from "./Category";
import NaviBar from "./NaviBar";
import Product from "./Product";
import { Container, Row, Col } from "reactstrap";
import { render } from "@testing-library/react";

export default class App extends Component {
  state = {
    curCat: "-",
    products: [],
  };

  changeCat = (c) => {
    this.setState({ curCat: c.categoryName });
    this.getProducts(c.id);
  };

  getProducts = (id) => {
    let url = "http://localhost:3000/products";
    if (id) url += "?categoryId=" + id;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount() {
    this.getProducts();
  }

  render() {
    let infoCat = {
      title: "Categories",
      count: 0,
      // curCat:"-"
    };
    let infoPro = {
      title: "Products",
      page: 0,
    };
    return (
      <div>
        <Container>
          <Row>
            <NaviBar></NaviBar>
          </Row>
          <Row>
            <Col xs="3">
              <Category
                catProps={infoCat}
                changeCat={this.changeCat}
                curCat={this.state.curCat}
              ></Category>
            </Col>
            <Col xs="9">
              <Product
                proProps={infoPro}
                curCat={this.state.curCat}
                products={this.state.products}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// function App() {
//   let infoCat={
//     title:"Categories",
//     count:0
//   }
//   let infoPro={
//     title:"Products",
//     page:0
//   }
//   return (
//     <div>
//       <Container>
//         <Row>
//           <NaviBar></NaviBar>
//         </Row>
//         <Row>
//           <Col xs="3">
//             <Category catProps={infoCat} />
//           </Col>
//           <Col xs="9">
//             <Product proProps={infoPro} />
//           </Col>
//         </Row>
//       </Container>
//     </div>

// <div className="App">
//   <header className="App-header">
//     <h3>test</h3>
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
//   );
// }

// export default App;
