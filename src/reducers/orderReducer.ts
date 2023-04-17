import { ADD_ORDER } from "../redux/actions";

const initialState = {
    orders: [],
  };

export function orderReducer(state = initialState, action: any) {
    switch (action.type) {
      case ADD_ORDER:
        return {
          ...state,
          orders: [...state.orders, action.payload],
        };
      default:
        return state;
    }
  }