import { ShoppingCartIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Search } from './'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants'
const NavBar = () => {
    const cart = useSelector((state)=> state.cart.productsNumber);
  return (
    <header className=' min-w-[1000px]'>
        <div className="flex bg-stone-900 text-white h-[60px]">
            {/* left */}
            <div className="flex items-center">
                <Link to={"/amazon/"}>
                    <img className='h-[35px] w-[100px] m-2' src={`${BASE_URL}/images/amazon.png`} alt="amazon logo"  />
                </Link>
                <div className='pr-4 pl-4'>
                    <div className=' ml-[20px] text-xs xl:text-sm'>Deliver to</div>
                    <div className=' flex font-bold text-sm xl:text-base'>
                        <MapPinIcon className='h-[20px]'/>
                        <p>Pakistan</p>
                    </div>
                </div>
            </div>
            {/* middle */}
            <div className="flex grow items-center">
                <div className='w-[100%]'>
                    <Search/>
                </div>
            </div>
            {/* right */}
            <div className="flex items-center">
                <div className='pr-4 pl-4'>
                    <div className=' text-xs xl:text-sm'>Hello, sign in</div>
                    <div className='font-bold text-sm xl:text-base'>Accounts & Lists</div>
                </div>
                <div className='pr-4 pl-4'>
                    <div className=' text-xs xl:text-sm'>Returns</div>
                    <div className='font-bold text-sm xl:text-base'>& Orders</div>
                </div>
                <Link to={'/checkout'}>
                    <div className='pr-3 pl-3 flex'>
                        <ShoppingCartIcon className='h-[40px]'/>
                        <div className='relative'>
                            <div className=' absolute right-[12px] top-[4px] text-orange-400'>
                                {cart}
                            </div>
                        </div>
                        <div className='mt-5 font-bold text-xs xl:text-sm'>
                            Cart
                        </div>
                    </div>
                </Link>
                
            </div>
        </div>
        <div className='flex text-white bg-gray-900 items-center h-10 gap-4 font-semibold text-xs xl:text-sm'>
            <div className='ml-4'>Today's Deal</div>
            <div>Costumer Service</div>
            <div>Registry</div>
            <div>Gift Card</div>
            <div>Sell</div>
        </div>
    </header>
  )
}

export default NavBar