import React from 'react';
import './styles.css';

import Header from './components/Header';
import PostList from './components/PostList';

function App() {
  return (
    <div id="main">
      <Header />
      <PostList />
    </div>
  );
}

export default App;