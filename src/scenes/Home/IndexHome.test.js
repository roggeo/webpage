import React from 'react';
import ReactDOM from 'react-dom';
import IndexHome from './IndexHome';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IndexHome />, div);
  ReactDOM.unmountComponentAtNode(div);
});
