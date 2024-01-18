import { useState } from 'react';
import React from 'react'
import ExpenseForm from './ExpenseForm'
const NewExpense = (props) => {

   const [isEditing, setIsEditing] = useState(false);
const onSaveExpensesHandler=(expenseData)=>{
  const expensesData={
    ...expenseData,
    id:Math.random().toString(),
  };
  props.onExpenseData(expensesData);
    setIsEditing(false);
};
   const startEditingHandler = () => {
     setIsEditing(true);
   };

   const stopEditingHandler = () => {
     setIsEditing(true);
   };
  return (
    <div className="bg-[#727ab1f9] w-[50rem] max-w-[95%] text-center shadow-[0_1px_8px_rgba(0,0,0,0.25)] mx-auto my-8 p-4 rounded-xl">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      <ExpenseForm onSaveExpensesData={onSaveExpensesHandler}></ExpenseForm>
    </div>
  );
}

export default NewExpense
