import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import socketIOClient from 'socket.io-client';

function App () {
  useEffect(() => {
    const socket = socketIOClient();
    socket.on('connect', () => {
      console.log(socket.id);
    });
    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
  }, []);


  return <div>Hello there</div>;
}

export default hot(module)(App);
