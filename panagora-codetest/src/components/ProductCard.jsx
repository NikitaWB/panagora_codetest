import React from 'react';
import './ProductCard.css';
import products from '../data/products.json';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <div className='product-list'>
      {
        products?.map((product) => {
          return (
            <div className='' key={product.id}>
              <Link to={'/' + product.id} >
              <div className='image-container'>
                <img src={product.thumbnail} alt='product' className='img' />
              </div>
              <div className='card-content'>
                <div className='card-title'>
                  <p className='product-list--title'>
                  {product.name}
                  </p>
                </div>
                <div className='card-body'>
                  <p className='price'>
                    {product.price} {product.currency}
                  </p>
                </div>
              </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default ProductCard;
