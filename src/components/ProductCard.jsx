import React from 'react';
import styled from '@emotion/styled';


const Card = styled.div`
    width: 300px;
    background-color: ${props =>
    props.hasFocus ? '#4C7072' : '#D5EFA6'};
    box-shadow: ${props => props.hasFocus ? 
    '0px 15px 25px 0px rgba(0,0,0,0.50);' : '-1px 2px 15px -9px rgba(0,0,0,0.75);'};
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 20px;
`

const ProductImage = styled.img`
height: 182px;
text-align: center;
background-color: white;
`

const CardText = styled.div`
padding: 10px;
color: ${props =>
    props.hasFocus ? 'white' : '#1E466A'};
`

const CategoryLabel = styled.div`
background-color: ${props =>
    props.hasFocus ? 'white' : '#1E466A'};
display: inline-block;
padding: 0 8px 1px 8px;
color: ${props =>
    props.hasFocus ? '#1E466A' : 'white'};
font-size: 10px;
border-radius: 10px;
line-height: 1.8em;
text-transform: uppercase;
`

const ItemTitle = styled.h1`
text-transform: capitalize;
margin: 5px 0 15px ;
`

const ItemAttributes = styled.div`
margin-left: -20px;
display: flex;
& > div { padding-left: 20px;}
margin-bottom: 20px;
`

const ItemAttributeLabel = styled.div`
font-size: 10px;
text-transform: uppercase;
margin-bottom: 1px;
`

const ItemAttributeValue = styled.div`
font-weight: bold;
font-size: 16px;
`

const ItemDescription = styled.div`
font-size: 12px;
margin-bottom: 20px;
`




export default function ProductCard({ product: { id, title, category, quantity, weight, description, image, hasFocus }}) {
  return (
    <Card hasFocus={hasFocus}>
      <ProductImage src={image} alt="" />
      <CardText hasFocus={hasFocus}>
      <CategoryLabel hasFocus={hasFocus}> 	{category} </CategoryLabel>
      <ItemTitle>{title}</ItemTitle>
      <ItemAttributes>
        <div>
          <ItemAttributeLabel>
            Quantity
          </ItemAttributeLabel> 
          <ItemAttributeValue>
            {quantity}
            </ItemAttributeValue>
        </div>
        <div>
          <ItemAttributeLabel>
            Weight
          </ItemAttributeLabel>
          <ItemAttributeValue>{weight}</ItemAttributeValue>
        </div>
        </ItemAttributes>
      <ItemDescription>{description}</ItemDescription>
      </CardText>
      </Card>      
  );
}

