import React from 'react'
import { Carousel, CarouselCatagory, CarouselProduct, HomePageCard } from './'
const HomePage = () => {
  return (
    <div className=" bg-gray-300">
        <div className="min-w-[1000px] max-w-[1500px] m-auto bg-gray-300">
          
          <Carousel/>
          <div className='grid grid-cols-3 xl:grid-cols-4 -mt-[310px]'>
            <HomePageCard 
              title={"We have a surprise for you"}
              img = {"../images/home_grid_1.jpg"}
              link = {"Terms and conditions"}
            />
            <HomePageCard 
              title={"Watch The Rings of Power"}
              img = {"../images/home_grid_2.jpg"}
              link = {"Start streaming now"}
            />
            <HomePageCard 
              title={"Unlimited Streaming"}
              img = {"../images/home_grid_3.jpg"}
              link = {"Find out more"}
            />
            <HomePageCard 
              title={"More titles to explore"}
              img = {"../images/home_grid_4.jpg"}
              link = {"Browse Kindle unlimited"}
            />
            <HomePageCard 
              title={"Shop Pet Supplies"}
              img = {"../images/home_grid_5.jpg"}
              link = {"See more"}
            />
            <HomePageCard 
              title={"Spring Sale"}
              img = {"../images/home_grid_6.jpg"}
              link = {"See the deals"}
            />
            <HomePageCard 
              title={"Echo Buds"}
              img = {"../images/home_grid_7.jpg"}
              link = {"See more"}
            />
            <HomePageCard 
              title={"Family Plane: 3 months free"}
              img = {"../images/home_grid_8.jpg"}
              link = {"Learn more"}
            />
            <div className='m-3 pt-8 xl:hidden'>
              <img className=' xl:hidden '
              src="../images/banner_image_2.jpg" alt="" 
              />
            </div>
          </div>
          <CarouselProduct/>
          <CarouselCatagory/>
          <div className=' h-[200px] m-3'>
            <img 
              className=' h-[100%] w-[100%] object-cover'
              src="../images/banner_image.jpg" alt="" 
            />
          </div>
        </div>
    </div>
  )
}

export default HomePage