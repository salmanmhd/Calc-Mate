import React from 'react'

const CalcBtn = ({ sign, type = "primary", logo }) => {

  const BTNS_TYPES = {
    blue: 'bg-blue-600',
    gray: "bg-gray-400",
    red: "bg-red-700"
  }


  return (
  
        <button className={`${BTNS_TYPES[type]}  w-10 sm:w-16 md:w-18 lg:w-20  rounded-xl font-medium text-white h-14 flex items-center justify-center text-center  text-xl cursor-pointer md:text-3xl`}>{sign ? sign : logo}</button> 

  )
}

export default CalcBtn