import { defaultProducts } from '../productData'

const products = (state = defaultProducts, action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return [
          ...state,
          {
            id: state[state.length-1].id + 1,
            title: action.name,
            category: action.category,
            weight: action.weight,
            description: action.description,
            image: "http://via.placeholder.com/300x182"
          }
        ]
      case 'FOCUS_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, focused: !todo.focused}
            : todo
        )
      default:
        return state
    }
  }
  
  export default products