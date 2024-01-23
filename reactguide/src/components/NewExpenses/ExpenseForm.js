import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredtitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredamount, setEnteredamount] = useState("");
  // const [display, setDisplay] =useState(true);
  const titleHandler = (event) => {
    setEnteredtitle(event.target.value);
    console.log(enteredTitle);
  };
  const dateHandler = (event) => {
     const inputDate = event.target.value;

     // Validate the date against the specified range
    //  const minDate = new Date("2019-10-1").toISOString().split("T")[0];
    //  const maxDate = new Date("2023-10-1").toISOString().split("T")[0];

    //  if (
    //    inputDate === "" || // Allow empty input
    //    (inputDate >= minDate && inputDate <= maxDate)
    //  ) {
       setEnteredDate(inputDate);
    //  } else {
       // Handle invalid date (you can show a message or reset the date)
       console.log(
         "Invalid date. Please select a date between 2019-10-1 and 2023-10-1."
       );
     }
    console.log(enteredDate);
  
  const amountHandler = (event) => {
    setEnteredamount(event.target.value);
    console.log(enteredamount);
  };
  const submitHandler = (event) => {
    // event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      price: enteredamount,
    };
    console.log(expenseData);
    props.onSaveExpensesData(expenseData);
    setEnteredamount("");
    setEnteredDate("");
    setEnteredtitle("");

    // setDisplay(false);
  };
  return (
    <div>
      
        <form onSubmit={submitHandler}>
          <div className="flex flex-wrap gap-4 text-left mb-4">
            <div>
              <label className="font-[bold] block mb-2">Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleHandler}
                className="border w-80 max-w-full p-2 rounded-md border-solid border-[#ccc]"
              ></input>
            </div>
            <div>
              <label className="font-[bold] block mb-2">Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredamount}
                onChange={amountHandler}
                className="border w-80 max-w-full p-2 rounded-md border-solid border-[#ccc]"
              ></input>
            </div>
            <div>
              <label className="font-[bold] block mb-2">Date</label>
              <input
                type="date"
                min="2019-10-1"
                max="2023-10-1"
                value={enteredDate}
                onChange={dateHandler}
                className="border w-80 max-w-full p-2 rounded-md border-solid border-[#ccc]"
              />
            </div>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="cursor-pointer border bg-[#40005d] text-[white] mr-9 px-4 py-4  mt-3 rounded-xl border-solid border-[#40005d] hover:bg-[#510674] hover:border-[#510674] active:bg-[#510674] active:border-[#510674] "
           onClick={props.onCancelHandler} >
              cancel
            </button>
            <button
              type="submit"
              className="cursor-pointer border bg-[#40005d] text-[white] mr-4 px-8 py-4 rounded-xl border-solid border-[#40005d] hover:bg-[#510674] hover:border-[#510674] active:bg-[#510674] active:border-[#510674] "
            >
              {" "}
              add expense
            </button>
          </div>
        </form>
     
    </div>
  );
};

export default ExpenseForm;
