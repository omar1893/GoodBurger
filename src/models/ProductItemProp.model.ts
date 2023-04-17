import { Product } from "./Product.model";

export interface ProductItemProp {
    product: Product;
    addCart: (product: Product) => void
    cart: any
}