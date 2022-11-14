import React, { Component } from "react";
import { Table } from "reactstrap";

export default class Product extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.proProps.title}</h1>
        <div>{this.props.curCat}</div>

        <Table dark responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              {/* <th>Last Name</th>
              <th>Username</th> */}
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((p) => (
              <tr key={p.id}>
                <td scope="row">{p.id}</td>
                <td>{p.productName}</td>
                <td>{p.unitPrice}</td>
              </tr>
            ))}
            
            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr> */}
            
          </tbody>
        </Table>
      </div>
    );
  }
}
