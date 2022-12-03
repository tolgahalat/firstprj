// import logo from './logo.svg';
import React, { Component } from "react";
import "./App.css";
import Category from "./Category";
import NaviBar from "./NaviBar";
import Product from "./Product";
import { Container, Row, Col } from "reactstrap";
import { render } from "@testing-library/react";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import Empty from "./Empty";
import Cart from "./Cart";
import TestForm from "./TestForm";
import NewForm from "./NewForm";

export default class App extends Component {
  state = {
    curCat: "-",
    products: [],
    cart: [],
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

  addToCart = (product) => {
    // alert(product.productName)
    let newCart = this.state.cart;
    var addedItem = newCart.find((p) => p.product.id === product.id);
    if (addedItem) {
      addedItem.count += 1;
    } else {
      newCart.push({ product: product, count: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added.", 3);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((p) => p.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed.", 3);
  };

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
            <NaviBar
              cart={this.state.cart}
              removeFromCart={this.removeFromCart}
            ></NaviBar>
          </Row>
          <Routes>
            <Route
              path="/"
              element={
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
                      addToCart={this.addToCart}
                    />
                  </Col>
                </Row>
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={this.state.cart}
                  removeFromCart={this.removeFromCart}
                ></Cart>
              }
            ></Route>
            <Route
              path="*"
              element={
                <Row>
                  <Empty />
                </Row>
              }
            ></Route>
            <Route path="/testform" element={<Row><TestForm></TestForm></Row>}></Route>
            <Route path="/newForm" element={<Row><NewForm></NewForm></Row>}></Route>
          </Routes>
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
