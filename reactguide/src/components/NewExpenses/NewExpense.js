import React from 'react'
import ExpenseForm from './ExpenseForm'
const NewExpense = () => {
  return (
    <div className="bg-[#727ab1f9] w-[50rem] max-w-[95%] text-center shadow-[0_1px_8px_rgba(0,0,0,0.25)] mx-auto my-8 p-4 rounded-xl">
      <ExpenseForm></ExpenseForm>
    </div>
  );
}

export default NewExpense
