const ProductBadge = ({badge}) => {
    if(badge==='choice'){
        return(
            <span className=" text-xs xl:text-sm p-1 bg-slate-900 text-white">Amazon's <span className=" text-orange-500">Choice</span></span>
        )
    }
    else if(badge==='seller'){
        return(
            <span className=" text-xs xl:text-sm p-1 bg-slate-900 text-white">#1 Best Seller</span>
        )
    }
    else if(badge==='limitted'){
        return(
            <span className=" text-xs xl:text-sm p-1 bg-slate-900 text-white">Limitted Time Sale</span>
        )
    }
  return (
    <div></div>
  )
}

export default ProductBadge