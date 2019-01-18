import { connect } from 'react-redux'
import AddProduct from '../components/AddProduct'
import { addProduct } from '../actions'

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  addProduct: (name, category, quantity, weight, description ) => dispatch(addProduct(name, category, quantity, weight, description))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct)