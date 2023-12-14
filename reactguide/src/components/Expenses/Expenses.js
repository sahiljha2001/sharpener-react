import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../Ui/Card";
function Expenses(props) {
  const items = props.items;
  return (
    
      <Card >
        {items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    
  );
}
export default Expenses;
