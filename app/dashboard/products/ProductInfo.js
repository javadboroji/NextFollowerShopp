import React from 'react'

function ProductInfo() {
  return (
    <div className='flex justify-between flex-col lg:flex-row'>
        <div className='p-4 bg-green-600 rounded-lg h-28 m-2 w-full lg:w-1/4'>
          <span className='w-full flex justify-center items-center m-auto text-center h-full text-base lg:text-xl text-white'> تعداد محصولات: 12</span>
        </div>
        <div className='p-4 bg-blue-600 rounded-lg h-28  m-2 w-full lg:w-1/4'>
        <span className='w-full flex justify-center items-center m-auto text-center h-full text-base lg:text-xl text-white'>  میزان فروش محصولات: 145.000.000</span>
        </div>
        <div className='p-4 bg-yellow-400 rounded-lg h-28 m-2 w-full lg:w-1/4'>
        <span className='w-full flex justify-center items-center m-auto text-center h-full text-base lg:text-xl text-white'>  محصولات مرجوع شده:2</span>
        </div>
        <div className='p-4 bg-cyan-600 rounded-lg h-28 m-2 w-full lg:w-1/4'>
        <span className='w-full flex justify-center items-center m-auto text-center h-full text-base lg:text-xl text-white'> فروش امروز:0</span>
        </div>
    </div>
  )
}

export default ProductInfo