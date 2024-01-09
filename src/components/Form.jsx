import React, { Component } from 'react';

export class Form extends Component {
  state = {
    //state форми потрібен для зберігання даних, що змінюються під час введення в інпути
    name: '',
    tag: '',
    experience: 'junior',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value, //state форми
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
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
        <br />
        <label>
          Surname
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>

        <p>Ваш рівень розрбника: </p>

        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>

        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}
