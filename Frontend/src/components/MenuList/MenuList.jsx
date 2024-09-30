import React from 'react'
import './menulist.css'

const Menulist = ({menulist}) => {
    
  return (
    <div  className='menu-list-container flex flex-col gap-5 items-center mt-5'>
        {menulist.map(each =>(
            <div key={menulist.indexOf(each)} className='menu-card w-9/12 md:w-7/12 lg:w-5/12 flex gap-5'>
                <img src={each.image} width={100} height={75} className='border-2'/>
                <div className='menu-content-card w-full'>
                    <span className='flex justify-between items-center'>
                        <p className='text-2xl font-bold'>{each.name}</p>
                        <p className='price font-bold text-xl'>{each.price}</p>
                    </span>
                    <hr className='w-full'/>
                    <p className='italic font-[Roboto]'>{each.desp}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Menulist