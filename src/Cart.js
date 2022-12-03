import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export default class Cart extends Component {
  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {
                this.props.cart.map(c => (
                    <tr key={c.product.id}>
                        <td>{c.product.id}</td>
                        <td>{c.product.categoryId}</td>
                        <td>{c.product.productName}</td>
                        <td>{c.product.unitPrice}</td>
                        <td>
                            <Button color="danger" onClick={() => this.props.removeFromCart(c.product)}>
                                Remove
                            </Button>
                        </td>
                    </tr>
                )) 
            }
        </tbody>
      </Table>
    );
  }
//   render() {
//     return <div>Cart</div>;
//   }
}
