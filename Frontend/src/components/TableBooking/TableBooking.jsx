import React from 'react'
import './tableBooking.css'

const TableBooking = () => {
  return (
    <div id='booking' className='scroll-mt-16 table-booking-container m-auto md:w-8/12 flex flex-col mt-10'>
        <div className='title-card ml-auto mr-auto'>
          <div className='w-16 ml-1 p-0.5 bg-gray-500 inline-block '></div>
          <h1 className='inline text-2xl '>Table Book</h1>
          <div className='w-16 ml-1 p-0.5 bg-gray-500 inline-block '></div>
      </div>
      <p className='font-[Nunito] text-center text-white text-4xl font-bold mt-2 mb-10'>Reserve Your Table</p>
      <div className=' flex flex-col items-center pl-10 pr-10 gap-5'>
        <div data-aos="fade-right" className="relative w-11/12 md:8/12 lg:w-6/12 bg-white pl-2">
          <input type='text' className='h-12 w-full outline-none' placeholder='Name' />
        </div>
        <div data-aos="fade-left" className="relative w-11/12 md:8/12 lg:w-6/12 bg-white pl-2">
          <input type='email' className='h-12 w-full outline-none' placeholder='Email' />
        </div>
        <div data-aos="fade-right" className="relative w-11/12 md:8/12 lg:w-6/12 bg-white pl-2">
          <input type='dateTime-local' className='h-12 w-full outline-none' placeholder='Time' />
        </div>
        <div data-aos="fade-left" className="relative w-11/12 md:8/12 lg:w-6/12 bg-white pl-2">
          <input type='text' className='h-12 w-full outline-none' placeholder='No of People' />
        </div>
        
      </div>
      <button data-aos="fade-up" className='booking-btn text-xl rounded mt-10 m-auto font-bold'>Book now</button>
      
    </div>
  )
}

export default TableBooking