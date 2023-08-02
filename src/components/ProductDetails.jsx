import React from 'react'
import {ProductBadge,ProductRating} from './'

const ProductDetails = ({product,rating}) => {
  return (
    <div className='mb-1'>
        <div className=' text-xl xl:text-2xl font-bold mb-1'>{product.title}</div>
        <div className=' text-sm xl:text-base mb-1'>by <span className='text-blue-500'>{product.brand}</span></div>
        { rating &&
            <div className=' text-xs xl:text-sm mb-1'>
                <ProductRating starNumber={product.avgRating} ratingNumber={product.ratings}/>
            </div>
        }
        <div className=' text-xs xl:text-sm mb-1 font-semibold'>{product.attribute}</div>
        <div><ProductBadge badge={product.badge}/></div>
    </div>
  )
}

export default ProductDetails