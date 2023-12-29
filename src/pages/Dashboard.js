import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const Dashboard = () => {
  const [value, setValue ] = useLocalStorage('name', '');

  return (
    <div>
      <input type="text" value={value} placeholder="Search" onChange={(event)=>setValue(event.target.value)}/>
      Input Value: {value}
    </div>
  )
}

export default Dashboard