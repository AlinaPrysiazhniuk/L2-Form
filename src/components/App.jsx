import React, { Component } from 'react';
import { Form } from './Form';

export class App extends Component {
  state = {
    name: '',
    tag: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // };

  render() {
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
      </>
    );
  }
}
