import React from 'react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// test('should show 10 products as default', async ()=>{
//   render(<App/>);
//   const heading = await screen.findAllByRole('heading');
//   expect(heading).toHaveLength(6);
// })

// test('clicking on the load more product to show another 10 more products', async ()=>{

// })