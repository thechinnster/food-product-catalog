import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { styled } from '@material-ui/styles';
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';



const styledBy = (property, mapping) => props => mapping[props[property]];
const Count = styled(InputAdornment)({
    paddingLeft: '10px',
    color: styledBy('color', {
        error: 'red',
        default: 'inherit'
      }),
  });

  const BetterInput = styled(Input)({
    fontSize: '20px'
  });

  const BetterLabel = styled(FormLabel)({
    fontSize: '20px'
  });
  



class CustomTextField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.limit, 
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event);
        this.setState({count: this.props.limit - event.target.value.length});
        
      }

    render() {
        const countColor = this.state.count < 0 ? 'error' : 'default'; 
        const adornment = this.props.limit ? 
        <Count color={countColor} position="start">{this.state.count}</Count>
        : '';
        return ( 
            <TextField 
            {...this.props }            
            onChange={this.handleChange}
            InputProps={{
                inputComponent: BetterInput, 
                endAdornment: adornment
              }}
            InputLabelProps={{
                component: BetterLabel
            }}
            />
         );
    }
}
 
export default CustomTextField;