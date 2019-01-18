
import React from 'react';
import { styled } from '@material-ui/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


  const BetterLabel = styled(InputLabel)({
    fontSize: '20px'
  });

  const CasedOption = styled(MenuItem)({
    textTransform:'capitalize'
  });

  const CasedSelect = styled(Select)({
    textTransform:'capitalize'
  });
  

  const CustomSelect = ({value, onChange, id, label, options}) => (

    <FormControl fullWidth>
    <BetterLabel htmlFor={id}>{label}</BetterLabel>
    <CasedSelect
      value={value}
      onChange={onChange}
      inputProps={{
        name: id,
        id: id
      }}
    >
    { options.map(option => <CasedOption key="option" value={option}>{option}</CasedOption>)}
      
    
    </CasedSelect>
    </FormControl>
    )


export default CustomSelect;