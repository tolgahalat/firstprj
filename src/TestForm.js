import React, { Component } from 'react'

export default class TestForm extends Component {
    state = {textName: "", textInfo:''};
    changeText = (event) => {
        // this.setState({textName:event.target.value});

        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});

        // this.setState({[event.target.name]: event.target.value})
    }
    submitText = (event) => {
        event.preventDefault();
        alert(this.state.textName + " - " + this.state.textInfo);
    }
    render() {
    return (
      <div>TestForm
        <form onSubmit={this.submitText}>
        <input name="textName" onChange={this.changeText} type="text"></input>
        <p>Name is {this.state.textName}</p>
        
        <input name="textInfo" onChange={this.changeText} type="text"></input>
        <p>Info is {this.state.textInfo}</p>

        <input type="submit" onSubmit={this.submitText} value="Show"></input>
      </form>
      </div>
            
    )
  }
}
