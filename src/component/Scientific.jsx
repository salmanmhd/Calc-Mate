import React from 'react'
import CalcBtn from './CalcBtn'

const Scientific = () => {
  return (
    <div className='h-[80vh] w-[95vw] sm:w-[70vw] md:w-[53vw]  bg-black rounded-2xl  shadow-lg shadow-gray-800'>
         <div className='h-24 w-[95%] bg-white m-auto mt-2 rounded-lg text-right text-2xl p-2'>
              123x1234
         </div>
          <div className='w-[99%] m-auto mt-2 rounded-lg text-right text-2xl p-1'>
           <table className='w-full'>
               {/* first row */}
                <tr className='flex items-center justify-between w-[100%]'>
                     <td><CalcBtn sign={"sin"} type='blue'/></td>
                     <td><CalcBtn sign={"AC"} type='red'/></td>
                     <td><CalcBtn sign={"/"} type='blue'/></td>
                     <td><CalcBtn sign={"x"} type='blue'/></td>
                     <td><CalcBtn type='blue' logo={<i class="ri-delete-back-2-line"></i>}/></td>
                     <td><CalcBtn type='blue' sign={"In"}/></td>
                </tr>

                {/* second row */}

                <tr className='flex items-center justify-between w-[100%]'>
                     <td><CalcBtn sign={"cos"} type='blue'/></td>
                     <td><CalcBtn sign={"7"} type='gray'/></td>
                     <td><CalcBtn sign={"8"} type='gray'/></td>
                     <td><CalcBtn sign={"9"} type='gray'/></td>
                     <td><CalcBtn type='blue' sign={"-"}/></td>
                     <td><CalcBtn type='blue' sign={"log"}/></td>
                </tr>

                {/* third row */}

                <tr className='flex items-center justify-between w-[100%]'>
                     <td><CalcBtn sign={"tan"} type='blue'/></td>
                     <td><CalcBtn sign={"4"} type='gray'/></td>
                     <td><CalcBtn sign={"5"} type='gray'/></td>
                     <td><CalcBtn sign={"6"} type='gray'/></td>
                     <td><CalcBtn type='blue' sign={"+"}/></td>
                     <td><CalcBtn type='blue' sign={"1/x"}/></td>
                </tr>
                {/* forth row */}

                <tr className='flex items-center justify-between w-[100%]'>
                     <td><CalcBtn sign={"π"} type='blue'/></td>
                     <td><CalcBtn sign={"1"} type='gray'/></td>
                     <td><CalcBtn sign={"2"} type='gray'/></td>
                     <td><CalcBtn sign={"3"} type='gray'/></td>
                     <td><CalcBtn type='red' sign={"="}/></td>
                     <td><CalcBtn type='blue' logo={<i className="ri-square-root"></i>}/></td>
                </tr>

                {/* last row */}


                <tr className='flex items-center justify-between w-[100%]'>
                     <td><CalcBtn sign={"!"} type='blue'/></td>
                     <td><CalcBtn sign={"0"} type='gray'/></td>
                     <td><CalcBtn sign={"."} type='gray'/></td>
                     <td><CalcBtn sign={"00"} type='gray'/></td>
                     <td><CalcBtn type='red' sign={"1"}/></td>
                     <td><CalcBtn type='blue' sign={"*"}/></td>
                </tr>

           </table>
          </div>
    </div>
  )
}

export default Scientific