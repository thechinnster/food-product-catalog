export const addProduct = (name, category, quantity, weight, description ) => ({
  type: 'ADD_PRODUCT',
  name, 
  category, 
  quantity, 
  weight, 
  description
})