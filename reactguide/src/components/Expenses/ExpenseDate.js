import React from 'react'
const ExpenseDate = ({date}) => {
  const month = date.toLocaleString('en-US',{month:'long'});
  const day = date.toLocaleString('en-US',{day:'2-digit'});
  const year = date.getFullYear();
  return (
    <div className=" flex flex-col w-[5.5rem] h-[5.5rem] border bg-[#2a2a2a] text-[white] items-center justify-center rounded-xl border-solid border-[#ececec]">
      <div className="text-xs font-[bold]">{month}</div>
      <div className="text-xs">{year}</div>
      <div className="text-2xl font-[bold]">{day}</div>
    </div>
  );
}

export default ExpenseDate;
