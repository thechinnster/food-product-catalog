import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultProducts } from '../productData'
import ProductList from './ProductList';


storiesOf('Product List', module)
  .addDecorator(story => <div style={{ padding: '3rem', backgroundColor: '#F2F2F0' }}>{story()}</div>)
  .add('default', () => <ProductList products={defaultProducts}  />)
  