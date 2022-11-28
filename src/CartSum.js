import React, { Component } from "react";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

export default class CartSum extends Component {
  render() {
    return <div>{this.props.cart.length > 0 ? this.renderSum() : <div />}</div>;
  }

  renderSum() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            {this.props.cart.map((c) => (
              <DropdownItem key={c.product.id}>
                <Badge color="danger" onClick={()=>this.props.removeFromCart(c.product)}>Del</Badge>
                {c.product.productName}
                <Badge>{c.count}</Badge>
              </DropdownItem>
            ))}
          </DropdownItem>
          {/* <DropdownItem>Option 2</DropdownItem> */}
          <DropdownItem divider />
          <DropdownItem>Reset</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}
