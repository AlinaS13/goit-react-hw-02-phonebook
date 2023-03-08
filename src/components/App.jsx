import { Component } from 'react';
import { Wraper } from './App.styled';
import { Phonebook } from './phonebook';
import { Section } from './section';
import { Contacts } from './contacts';
import { nanoid } from 'nanoid';
import { FilterContacts } from './filter-contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const query = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    this.setState(prevState => ({
      ...prevState,
      contacts: prevState.contacts.concat({
        name: query,
        id: nanoid(),
        number: number,
      }),
    }));
    event.target.reset();
  };

  handleChengeInput = str => {
    this.setState(prevState => ({
      filter: str,
    }));
  };

  applyFilters = () => {
    return this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase()) ||
        contact.number.includes(this.state.filter)
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <Wraper>
        <Section title="Phone book">
          <Phonebook onSubmit={this.handleSubmit} />
        </Section>
        <Section title="Contacts">
          <FilterContacts
            filter={filter}
            onChangeInput={this.handleChengeInput}
          />
          <Contacts contacts={this.applyFilters()} />
        </Section>
      </Wraper>
    );
  }
}
