import { useState } from "react";
import "./App.css";
import Scientific from "./component/Scientific";
import Ui from "./component/Ui";
// import 'remixicon/fonts/remixicon.css'

function App() {
  const [calc_type, setCalc_type] = useState("simple");

  const hadelCalcChange = () => {
    if (calc_type === "simple") {
      setCalc_type("scientific");
    } else {
      setCalc_type("simple");
    }
  };

  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center gap-2 overflow-hidden bg-gray-500">
        <div className="mt-6 flex h-7 w-[95vw] overflow-hidden rounded-xl bg-black text-white sm:w-[70vw] md:w-[53vw]">
          <div
            className={`${calc_type == "simple" ? "bg-blue-500" : null} flex w-[50%] cursor-pointer items-center justify-center`}
            onClick={hadelCalcChange}
          >
            simple
          </div>
          <div
            className={`${calc_type == "scientific" ? "bg-blue-500" : null} flex w-[50%] cursor-pointer items-center justify-center`}
            onClick={hadelCalcChange}
          >
            scientific
          </div>
        </div>
        {calc_type === "simple" ? <Ui /> : <Scientific />}
      </div>
    </>
  );
}

export default App;
