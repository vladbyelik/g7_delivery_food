import React from 'react';
import { useParams } from 'react-router-dom';
import usePageData from '../../custom-hooks/usePageData';
import ProductCard from '../ProductCard/ProductCard';
import Spinner from '../Spinner/Spinner';

const ProductList = () => {

  const { products } = useParams();
  const productList = usePageData(products);

  const minPrice = Math.min.apply(null, productList?.data.map(el => el.price));

  if(!productList) {
    return <Spinner />
  }

  return(
    <section className='menu'>
      <div className='menu__heading'>
        <h2 className='menu__title restaurant-title'>{productList?.partnerName}</h2>
        <div className='card-info'>
          <div className='rating'>4.5</div>
          <div className='price'>От ${minPrice}</div>
          <div className='category'>{productList?.category}</div>
        </div>
      </div>

      <div className='cards menu__cards'>
        {productList.data.map(foodItem => <ProductCard key={foodItem.id} {...foodItem}/>)}
      </div>
    </section>
  )
}

export default ProductList;