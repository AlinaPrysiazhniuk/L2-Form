import React, { Component } from 'react';

export class App extends Component {
  state = {
    name: '',
    tag: '',
  };

  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Surname
            <input
              type="text"
              name="tag"
              value={this.state.tag}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </>
    );
  }
}
