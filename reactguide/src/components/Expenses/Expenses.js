import React from "react";
import { useState } from "react";
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpenseFilter"
import ExpenseChart from "../Chart/ExpenseChart";
import Card from "../Ui/Card";
function Expenses(props) {
  
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  
  
  return (
    <div>
      <Card>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
          item={props.item}
        />
        {/* {items.map((item,index )=>(<ExpenseItem item={item} key={item.id}></ExpenseItem>)
        
      )} */}
      <ExpenseChart expenses={filterExpenses}></ExpenseChart>
        { filterExpenses.length>0?filterExpenses.map((item) => 
          <ExpenseItem
            key={item.id} // Make sure to include a unique key for each item when using map
           item={item}
          />
        ):<div>you havenot buy any item this year</div>}
      </Card>
    </div>
  );
}
export default Expenses;
