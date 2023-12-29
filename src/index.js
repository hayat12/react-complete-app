import React, { useEffect } from 'react';
import App from './App';
import './index.css';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);


function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('app rendered');
  });

  return <App tab="home" />
}


root.render(<AppWithCallbackAfterRender />);
