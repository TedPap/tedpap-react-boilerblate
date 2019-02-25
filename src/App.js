import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

// App: The root component of the web app.
// It contains the redux and the react-router integration along with the app routs.
class App extends Component {
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

export default hot(App);
