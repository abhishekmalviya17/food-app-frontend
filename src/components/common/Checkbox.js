import React,{useState} from "react";


const Checkbox = ({ label, defaultChecked }) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);
  
    return (
      <div className="flex flex-row gap-3 items-start cursor-pointer hover:bg-gray-100 p-1 rounded">
        <div
          onClick={() => setIsChecked(!isChecked)}
          className={`w-5 h-5 flex justify-center items-center ${isChecked ? 'bg-blue-600' : 'bg-gray-300'} rounded`}
        >
          {isChecked && (
            <img
              src="https://file.rendit.io/n/7NO5MHh2SuTI2Pyo7CXq.svg"
              alt="check"
              className="w-3"
            />
          )}
        </div>
        <div className="text-sm leading-[20px] text-[#2b2b43]">
          {label}
        </div>
      </div>
    );
  };

  
  export default Checkbox;