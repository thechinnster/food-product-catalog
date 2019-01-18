import React from 'react';
import ReactDOM from 'react-dom';
import ProductCard from './components/ProductCard';

export const product = {
  title: 'tomato',
  category: 'vegetables', 
  id: '1', 
  quantity: '5pcs', 
  weight: '3g', 
  description: 'The quick brown fox jumps over the lazy dog',
  image: 'https://dl.dropboxusercontent.com/s/8xkblhn7i8xjp9s/onion.png?dl=0'
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductCard product={{...product, hasFocus: false}}   />, div);
  ReactDOM.unmountComponentAtNode(div);
});

