import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h3>Contacts</h3>
        <ContactForm />
      </div>
    );
  }
}

export default App;
