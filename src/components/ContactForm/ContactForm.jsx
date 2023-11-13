import { Component } from 'react';
import { Form, Input, Button } from './ContactForm.style';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="name"
          required
          placeholder="Enter name"
          value={name}
          onChange={this.handleChange}
        />
        <Input
          type="tel"
          name="number"
          required
          placeholder="Enter number"
          value={number}
          onChange={this.handleChange}
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
