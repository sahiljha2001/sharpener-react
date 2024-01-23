import React from 'react'

const ChartBar = (props) => {
    let barHeight='0%';
     if(props.maxvalue>0)
       barHeight = Math.round((props.value / props.maxvalue) * 100) + "%";
    console.log(barHeight);
  return (
    <div className="h-full flex flex-col items-center">
      <div className="h-full w-full border border-solid border-gray-800 rounded-lg bg-purple-300 overflow-hidden flex flex-col justify-end">
        <div
          className="bg-indigo-900  w-full transition-all duration-300 ease-out"
          style={{ height: barHeight }}
        >
          {" "}
        </div>
      </div>
      <div className="font-bold text-xs text-center">{props.label}</div>
    </div>
  );
}

export default ChartBar
