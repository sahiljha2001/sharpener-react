


import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
function App() {
  const [expens, setExpens] = useState([]);
  const expenses = [
    {id :'i1', date: new Date(2023, 4, 12), title: "car", price: 2700 },
    { id :'i2',date: new Date(2023, 4, 29), title: "bus", price: 2800 },
    { id :'i3',date: new Date(2023, 4, 13), title: "phone", price: 28900 },
    { id :'i4',date: new Date(2023, 6, 23), title: "shoes", price: 2400 },
  ];
   
  const expenseHandler= (expensesData) =>{
     expenses.push(expensesData);
     expens.push(expenses)
     setExpens((prevExpens)=>{
      return [expens, ...prevExpens];
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
