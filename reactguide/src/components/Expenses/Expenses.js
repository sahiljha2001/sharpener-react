import React from "react";
import { useState } from "react";

import ExpensesFilter from "./ExpenseFilter"
import Card from "../Ui/Card";
function Expenses(props) {
  const items = props.items;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterExpense=items.filter((expense)=> {
    return expense.date.getFullYear().toString()===filteredYear;
  })
  return (
    <div><Card>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      
      
    </Card></div>
    
  );
}
export default Expenses;
