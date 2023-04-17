import { ADD_PRODUCT_TO_CART } from "../redux/actions";
import { discounts } from "../utils/rules/discounts";

const initialState = {
    cart: {
      products: [],
      total: 0,
    },
  };

export function cartReducer(state = initialState, action: any) {
    switch (action.type) {
      case ADD_PRODUCT_TO_CART:
        const discount = discounts([...state.cart.products, action.payload])
        
        return {
          ...state,
          cart: {
            ...state.cart,
            products: [...state.cart.products, action.payload],
            subtotal: state.cart.total + action.payload.price,
            discount: discount,
            total: state.cart.total + action.payload.price - (discount * (state.cart.total + action.payload.price)),
          },
        }
      default:
        return initialState;
    }
  }