


import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
function App() {
  const expenses = [
    {id :'i1', date: new Date(2023, 4, 12), title: "car", price: 2700 },
    { id :'i2',date: new Date(2023, 4, 29), title: "car", price: 2800 },
    { id :'i3',date: new Date(2023, 4, 13), title: "car", price: 28900 },
    { id :'i4',date: new Date(2023, 6, 23), title: "car", price: 2400 },
  ];
  const expenseHandler=(expensesData)=>{
     expenses.push(expensesData)
     console.log(expenses)
  }
  
  return (
    <div>
      <h2>Lets get started </h2>
      <NewExpense onExpenseData={expenseHandler
      }></NewExpense>
        <Expenses items={expenses} ></Expenses>
      

    </div>
  );
}

export default App;
