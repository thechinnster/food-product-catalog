import React, { Component } from 'react';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';
import styled from '@emotion/styled';

const NumberSelectContainer = styled.div`
margin-top: 60px;
font-size: 20px;
color: #666;
display:flex;
align-items:center;
& > * {
    padding-right: 20px;
}
`

class NumberSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 1,    
    };
  }

  IncrementItem = () => {
    this.props.onChange(this.state.clicks + 1 );
    this.setState({ clicks: this.state.clicks + 1 });
    
  }
  DecreaseItem = () => {
   if (this.state.clicks>1) {
    this.props.onChange(this.state.clicks -1); 
    this.setState({ clicks: this.state.clicks - 1 });  
   }
   
  }
  
  render() {
    return (
      <NumberSelectContainer>          
        <div>Quantity</div>
        <RemoveCircleOutline fontSize="small" color="primary" onClick={this.DecreaseItem}>Click to decrease by 1</RemoveCircleOutline>
        <div>{ this.state.clicks }</div>
        <AddCircleOutline fontSize="small" color="primary" onClick={this.IncrementItem}>Click to increment by 1</AddCircleOutline>
      </NumberSelectContainer>
    );
  }
}

export default NumberSelect;
