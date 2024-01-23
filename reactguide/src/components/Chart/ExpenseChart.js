import React from 'react'
import Chart from './Chart'
const ExpenseChart = (props) => {
    const DataPoints=[
        {label:'jan',val:0},
        {label:'feb',val:0},
        {label:'mar',val:0},
        {label:'apr',val:0},
        {label:'may',val:0},
        {label:'jun',val:0},
        {label:'jul',val:0},
        {label:'aug',val:0},
        {label:'sep',val:0},
        {label:'oct',val:0},
        {label:'nov',val:0},
        {label:'dec',val:0},
        
    ]
    let totalMax=0;
    for(const expense of props.expenses)
    {
        const expenseMonth = expense.date.getMonth();
        console.log(expense.date);
        DataPoints[expenseMonth].val+=expense.price;
         totalMax+=expense.price;
         console.log(totalMax);
    }
  return (
    
      <Chart DataPoints={DataPoints} totalMax={totalMax}/>
    
  )
}

export default ExpenseChart
