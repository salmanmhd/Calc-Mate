import { useState } from "react";
import "./App.css";
import Scientific from "./component/Scientific";
import Ui from './component/Ui'
import 'remixicon/fonts/remixicon.css'

function App() {

  const [calc_type,setCalc_type] = useState('simple')

  const hadelCalcChange = ()=>{
       if(calc_type === 'simple'){
        setCalc_type('scientific')
       }else{
        setCalc_type('simple')
       }
  }

  return (
    <>
     <div className="h-screen w-screen overflow-hidden flex items-center flex-col gap-2 bg-gray-500 ">
      <div className="h-7 w-[95vw] sm:w-[70vw] md:w-[53vw]  bg-black mt-6 rounded-xl flex text-white overflow-hidden">
          <div className={`${calc_type == "simple" ? "bg-blue-500" : null} w-[50%] cursor-pointer flex items-center justify-center`} onClick={hadelCalcChange}>simple</div>
          <div className={`${calc_type == "scientific" ? "bg-blue-500" : null} w-[50%] cursor-pointer flex items-center justify-center`} onClick={hadelCalcChange}>scientific</div>
      </div>
         {
            calc_type === 'simple' ? <Ui/> : <Scientific/>
         }
      </div> 
    </>
  );
}

export default App;
