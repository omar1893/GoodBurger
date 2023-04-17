import { combineReducers } from "redux";
import {cartReducer} from "./cartReducer";
import {orderReducer} from "./orderReducer";

const store = combineReducers({
    cart: cartReducer,
    orders: orderReducer
  });
  
  export default store;