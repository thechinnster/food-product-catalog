import React from 'react';
import ProductCard from './ProductCard';
import styled from '@emotion/styled';

const ProductGrid = styled.div`
    display: flex;
    margin-left: -20px;
    flex-wrap: wrap;
    & > div {
        margin-left: 20px;
    }
`

function ProductList({ products, onProductHover }) {
  const events = {
    onProductHover
  };

  return (
    <ProductGrid>
      {products.map(product => <ProductCard key={product.id} product={product} {...events} />)}
    </ProductGrid>
  );
}

export default ProductList;
