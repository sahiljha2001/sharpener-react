


import { useState } from 'react';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpenses/NewExpense.js';
const dummyExpenses = [
  {id :'i1', date: new Date(2023, 4, 12), title: "car", price: 2700 },
  { id :'i2',date: new Date(2023, 4, 29), title: "bus", price: 2800 },
  { id :'i3',date: new Date(2023, 4, 13), title: "phone", price: 28900 },
  { id :'i4',date: new Date(2023, 6, 23), title: "shoes", price: 2400 },
];
function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);
   
  const expenseHandler= (expensesData) =>{
    //  expenses.push(expensesData);
    //  expens.push(expenses)
     setExpenses((prevExpens)=>{
      return [expensesData, ...prevExpens];
     });
     console.log(expenses)
  }
  
  return (
    <div>
      <h2>expense tracker </h2>
      <NewExpense onExpenseData={expenseHandler
      }/>
        <Expenses items={expenses} />
      

    </div>
  );
}

export default App;
