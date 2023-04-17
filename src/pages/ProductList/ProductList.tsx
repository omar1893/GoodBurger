import React, { useState } from 'react'
import Products from '../../assets/products.json'
import { Product } from '../../models/Product.model'
import ProductItem from '../../components/ProductItem/ProductItem'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_PRODUCT_TO_CART } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import { limitations } from '../../utils/rules/limitations';
import { FilterPills } from '../../components/FilterPills';
import { FilterPillsOptions } from '../../constants/constants';
import ProductListStyles from './ProductList.module.css'

const ProductList = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {cart} = useSelector((state: any) => state.cart);
  const [selectedFilter, setSelectedFilter] = useState<FilterPillsOptions>('All')
  

  const addProductToCart = (product: Product) => {
    const isValid = limitations(cart.products, product)
    if (isValid) {
      dispatch({ type: ADD_PRODUCT_TO_CART, payload: product })
    }
    else {
      alert('You can not add this product');
    }
  }

  const goToCreateOrder = () => {
    navigate('/create-order');
  }

  return (
    <div className={ProductListStyles.ProductPage}>
      <h2>Products List</h2>

      <FilterPills
        selectedFilter={selectedFilter}
        selectFilter={setSelectedFilter}
      />
      {(selectedFilter === "All" || selectedFilter === "Sandwiches") && (
        <>
          <h3>Sandwiches: </h3>
          <div className={ProductListStyles.SectionContainer}>
            {Products.sandwiches.map((sandwich: Product) => (
              <ProductItem
                key={sandwich.name}
                product={sandwich}
                addCart={addProductToCart}
                cart={cart}
              />
            ))}
          </div>
        </>
      )}

      {(selectedFilter === "All" || selectedFilter === "Extras") && (
        <>
          <h3>Extras:</h3>
          <div className={ProductListStyles.SectionContainer}>
            {Products.extras.map((extra: Product) => (
              <ProductItem
                key={extra.name}
                product={extra}
                addCart={addProductToCart}
                cart={cart}
              />
            ))}
          </div>
        </>
      )}

      <button
        className="formAction"
        onClick={() => goToCreateOrder()}
        disabled={cart.products.length === 0}
      >
        Assign Order
      </button>
    </div>
  );
}

export default ProductList