import { SANDWICH } from "../../constants/constants";
import { Product } from "../../models/Product.model";

export const limitations = (cart: any, incomingProduct: any) => {

    if(incomingProduct.type === SANDWICH) {
        const burgerMatch = cart.find((product: Product) => product.type === SANDWICH)
        if(burgerMatch) {
            return false
        }
    }
    
    const sameProductMatch = cart.find((product: Product) => product.name === incomingProduct.name);
    if(sameProductMatch) {
        return false;
    }

    return true

}