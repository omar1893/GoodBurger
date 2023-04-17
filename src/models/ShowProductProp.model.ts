import { Product } from "./Product.model";

export interface ShowProductProp {
    product: Product;
    removeProduct?: (product: Product) => void
}