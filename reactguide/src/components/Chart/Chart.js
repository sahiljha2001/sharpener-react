import React from 'react'
import ChartBar from './ChartBar'
const Chart = (props) => {
   
    const total = props.totalMax;
    
    console.log(total);
  return (
    <div className="p-4 rounded-lg bg-purple-100 text-center flex justify-around h-40">
      {props.DataPoints.map((datapoints) => (
        <ChartBar
          key={datapoints.label}
          label={datapoints.label}
          value={datapoints.val}
          maxvalue={total}
        ></ChartBar>
      ))}
    </div>
  );
}

export default Chart
