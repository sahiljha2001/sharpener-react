


import ExpenseItem from './components/ExpenseItem.js';
function App() {



const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 28),
      location: 'New York',
    },
    {
      id: 'e2',
      title: 'Groceries',
      amount: 45.34,
      date: new Date(2022, 3, 15),
      location: 'Los Angeles',
    },
    {
      id: 'e3',
      title: 'Internet Bill',
      amount: 89.99,
      date: new Date(2022, 4, 20),
      location: 'San Francisco',
    },
  ];

  return (
    <div>
      <h1>Expense Tracker</h1>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id} 
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </div>
  );
}

export default App;