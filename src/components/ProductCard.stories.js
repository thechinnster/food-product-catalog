import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductCard  from "./ProductCard";

export const product = {
    title: 'tomato',
    category: 'vegetables', 
    id: '1', 
    quantity: '5pcs', 
    weight: '3g', 
    description: 'The quick brown fox jumps over the lazy dog',
    image: 'https://dl.dropboxusercontent.com/s/8xkblhn7i8xjp9s/onion.png?dl=0'
}

storiesOf('Product', module)
    .addDecorator(story => <div style={{ padding: '20px', backgroundColor:'#F2F2F0' }}>{story()}</div>)
    .add('default', () => <ProductCard product={{...product, hasFocus: false}}   />)
    .add('focused', () => <ProductCard product={{...product, hasFocus:true}}   />)