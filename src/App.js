import React from 'react';
// import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Navbar from './components/layout/Navbar';
const App = () => {

  return (
    <div>
      <Navbar/>
      <br/>
        {/* <Dashboard/> */}
        <Login/>
    </div>
  );
}

export default App;
