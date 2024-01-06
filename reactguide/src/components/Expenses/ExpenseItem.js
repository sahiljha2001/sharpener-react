import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";
function ExpenseItem(props) {
   
  return (
    <Card >
      <div className="flex justify-between items-center p-2 md:p-4 my-4 gap-7 bg-gray-700 rounded-xl">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="flex flex-col gap-4 items-end md:flex-row md:items-center md:justify-start md:flex-1 ">
          <h2 className="   text-gray-700 md:text-white text-base md:text-lg flex-1 md:mr-4">
            {props.title}
          </h2>
          <div className="text-white text-base md:text-lg bg-purple-800 border border-white p-2 md:p-4 rounded-md ">
            ${props.price}
          </div>
        </div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
