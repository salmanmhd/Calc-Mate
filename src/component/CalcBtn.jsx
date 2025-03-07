import React from 'react'

const CalcBtn = ({ sign, type = "primary", logo ,onClick}) => {

  const BTNS_TYPES = {
    blue: 'bg-blue-600',
    gray: "bg-gray-400",
    red: "bg-red-700"
  }
  

  return (
  
        <button onClick={()=>onClick()} className={`${BTNS_TYPES[type]}  w-32 sm:w-23 md:w-36 lg:w-32 xl:w-40  rounded-xl font-medium text-white h-18 flex items-center justify-center text-center  text-3xl cursor-pointer md:text-4xl`}>{sign ? sign : logo}</button> 

  )
}

export default CalcBtn