import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/post-list/PostList';

function App() {
  const [show, setShow] = useState<boolean>(true)
  const showHandler = () => {
    setShow(
      (oldStatus) => !oldStatus
    )
  }
  return (
    <div>
      <button type="button" onClick={showHandler}>
        {
          show ? 'Hide' : 'Show'
        }
      </button>
      <br />
      <br />
      {
        show && <PostList postId={1} />
      }
    </div>
  );
}

export default App;
