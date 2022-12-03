import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import alertify from "alertifyjs";

export default class NewForm extends Component {
  state = { email: "", password: "" };
  changeText = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitText = (event) => {
    event.preventDefault();
    alertify.success("İşlem başarılı!", 5);
    alertify.success(this.state.email, 4.75);
    alertify.success(this.state.password, 4.5);
  };

  render() {
    return (
      <div>
        NewForm2
        <Form onSubmit={this.submitText}>
            <FormGroup>
                <Label for="email">E-mail:</Label>
                <Input type="email" id="email" name="email" placeholder="Enter e-mail" onChange={this.changeText}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password:</Label>
                <Input type="password" id="password" name="password" placeholder="Enter password" onChange={this.changeText}></Input>
            </FormGroup>
            <Button type="submit" color="success">Save</Button>
        </Form>
      </div>
    );
  }
}
