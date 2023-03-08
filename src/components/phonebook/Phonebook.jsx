import { Component } from 'react';
import { Input } from 'components/input';

export class Phonebook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <Input />
      </form>
    );
  }
}
