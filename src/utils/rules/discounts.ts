import { FRIES, SANDWICH, SOFT_DRINK } from "../../constants/constants";

export const discounts = (cart: any) => {
    const burgerMatch = cart.find((product: any) => product.type === SANDWICH);

    if (cart.length < 2 || !burgerMatch) {
        return 0;
    }

    const friesMatch = cart.find((product: any) => product.name === FRIES);
    const drinkMatch = cart.find((product: any) => product.name === SOFT_DRINK);
    

    if (burgerMatch) {
        if (friesMatch && drinkMatch) {
            return 0.2;
        } else if (drinkMatch) {
            return 0.15;
        } else if (friesMatch) {
            return 0.1;
        }
    }

    return 0

}