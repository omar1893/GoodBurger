import React from 'react'
import { ShowProductProp } from '../../models/ShowProductProp.model';
import ShowProductStyles from './ShowProduct.module.css'
import { PriceFormatter } from '../../utils/basic/priceFormatter';

const ShowProduct = ({product}: ShowProductProp) => {

  return (
    <div className={ShowProductStyles.ProductContainer}>
      <div>Product: <span>{product.name}</span></div>
      <div>Price: <span>${PriceFormatter(product.price)}</span></div>
    </div>
  );
}

export default ShowProduct