 import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from '@emotion/styled/macro';
import NumberSelect from "./NumberSelect";
import { Redirect } from 'react-router'
import CustomTextField from './CustomTextField';
import CustomSelect from './CustomSelect';


const FieldContainer = styled.div`
margin-top: 30px;
`

const PageHeading = styled.h1`
text-transform: uppercase;
margin: 0;
font-size: 36px;
`

const TitleBar = styled.div`
width: 100%;
display:flex;
justify-content: space-between;
align-items:center;
margin-bottom: 20px;
padding-bottom:20px;
border-bottom: 5px solid black;
`

const BottomBar = styled.div`
    display:flex;
    border-top: 5px solid black;
    justify-content:flex-end;
    margin: 40px 0;
    padding: 20px 0;
`

const StyledForm = styled(Form)`
  width: 100%;
`

const AddProductButton = styled.button`
background-color: rgb(238,117, 47);
padding: 20px 35px;
color: white;
font-size: 18px;
text-transform: uppercase;
border-width: 0;
border-radius: 3px;
font-weight:bold;
`

const FormError = styled(ErrorMessage)`
  color: red;
`

const Basic = (props) => (
    <div>
      <Formik
        initialValues={{ productname: '', category: '', quantity: '1', weight: '', description:'' }}
        validate={values => {
          let errors = {};
          if (!values.productname) {
            errors.productname = 'Please enter a product name';
          } 
          if (!values.category) {
            errors.category = 'Please select a category';
          } 
          if (!values.weight) {
            errors.weight = 'Please enter a weight';
          } 
          if (!values.description) {
            errors.description = 'Please enter a description';
          } 
          if (values.description.length > 100 ) {
            errors.description = 'Product description must be less that 100 characters';
          } 
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
          setTimeout(() => {
            props.addProduct(values.productname, values.category, values.quantity, values.weight, values.description)
            setSubmitting(false);            
          }, 400);
          resetForm({})
          setStatus({success: true})
        }}
      >
        {({ isSubmitting, setFieldValue, status }) => (
          <StyledForm>
        
          <TitleBar>
            <PageHeading>Add Product</PageHeading>

            <AddProductButton type="submit" disabled={isSubmitting}>
              Save Product
            </AddProductButton>

          </TitleBar>
          {status && <Redirect to="/" /> }
          
            <Field component={CustomInputComponent} name="productname" id="productname"  label="Product Name"/>
            <FormError name="productname" component="div" />

            <Field component={CustomInputComponent} select options={['meat', 'fish', 'vegetable']} name="category" id="category"  label="Category"/>
            <FormError name="category" component="div" />

            <FieldContainer>
            <Field component={NumberSelect} onChange={e => setFieldValue('quantity', e)}  name="quantity" id="quantity"  label="Quantity"/>
            </FieldContainer>

            <Field component={CustomInputComponent} name="weight" id="weight"  label="Weight"/>
            <FormError name="weight" component="div" />

            <Field limit={100} component={CustomInputComponent} name="description" id="description"  label="Description"/>
            <FormError name="description" component="div" />
            

            <BottomBar>
            <AddProductButton type="submit" disabled={isSubmitting}>
              Save Product
            </AddProductButton>
            </BottomBar>
          </StyledForm> 
        )}
      </Formik>
    </div>
    
  );

const CustomInputComponent = ({field, id, label, limit, select, options}) => (
  <FieldContainer>  
  {select && <CustomSelect select options={['meat', 'fish', 'vegetable']} value={field.value} name="category" id="category"  onChange={field.onChange} label="Category"/>}
  {!select && <CustomTextField fullWidth limit={limit} label={label} value={field.value} id={id} onChange={field.onChange} />}
  </FieldContainer>
);


  
  export default Basic;