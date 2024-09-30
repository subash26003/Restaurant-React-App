import React from 'react'
import './modal.css'
import { RxCross2 } from "react-icons/rx";

const Modal = ({message}) => {

  return (
    <div className='modal-bg w-screen h-screen absolute flex justify-center items-center'>
        <div className='modal-card bg-white h-1/6 w-52 rounded-2xl flex flex-col items-center justify-center'>
            <RxCross2 className='text-red-700 font-black text-5xl' />
            <p className=' text-center invalid-message text-xl font-[Poppins] font-bold'>{message}</p>
        </div>
    </div>
  )
}

export default Modal