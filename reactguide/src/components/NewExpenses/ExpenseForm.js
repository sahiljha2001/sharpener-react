import React, { useState } from 'react'

const ExpenseForm = () => {
    const[enteredtitle,setEnteredtitle]= useState('');
    const titleHandler =(event)=>{
        setEnteredtitle(event.target.value);
        console.log(enteredtitle);
    }
    const[entereddate,setEntereddate]= useState('');
     const dateHandler = (event) => {
       setEntereddate(event.target.value);
       console.log(entereddate);
     };
    const[enteredamount,setEnteredamount]= useState('');
     const amountHandler = (event) => {
       setEnteredamount(event.target.value);
       console.log(enteredamount);
     };
     const submitHandler=(event)=>{
      event.prefentdefault();
      const expenseData={
        title:enteredtitle,
        data:entereddate,
        amount:enteredamount
      };
      console.log(expenseData);
     }
  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-wrap gap-4 text-left mb-4">
        <div>
          <label className="font-[bold] block mb-2">title</label>
          <input
            type="text"
            onChange={titleHandler}
            className="border w-80 max-w-full p-2 rounded-md border-solid border-[#ccc]"
          ></input>
        </div>
        <div>
          <label className="font-[bold] block mb-2">Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            onChange={amountHandler}
            className="border w-80 max-w-full p-2 rounded-md border-solid border-[#ccc]"
          ></input>
        </div>
        <div>
          <label className="font-[bold] block mb-2">Date</label>
          <input
            type="date"
            min="23-10-1"
            maxLength="24-10-1"
            onChange={dateHandler}
            className="border w-80 max-w-full p-2 rounded-md border-solid border-[#ccc]"
          ></input>
        </div>
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="cursor-pointer border bg-[#40005d] text-[white] mr-4 px-8 py-4 rounded-xl border-solid border-[#40005d] hover:bg-[#510674] hover:border-[#510674] active:bg-[#510674] active:border-[#510674] "
        >
          add expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm

