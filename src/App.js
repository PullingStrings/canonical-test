import React, { Component } from 'react';
import PostList from './components/postList';
import './style.scss';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostList />
      </div>
    );
  }
}


export default App;
