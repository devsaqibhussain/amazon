import { StarIcon } from '@heroicons/react/24/outline'

const ProductRating = ({starNumber, ratingNumber}) => {
  return (
    <div className='flex'>
        {Array.from( { length: starNumber }, (_,i)=>
            <StarIcon key={i} className=' stroke-[#f5b342] fill-[#f5b342] h-[20px]'/>)}
        {Array.from( { length: 5-starNumber }, (_,i)=>
            <StarIcon key={i} className=' stroke-[#f5b342] h-[20px]'/>
        )}
        <span className='ml-3 text-blue-500'>{ratingNumber} ratings</span>
        
    </div>
  )
}

export default ProductRating