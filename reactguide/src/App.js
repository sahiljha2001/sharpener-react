

import './components/ExpenseItem';
import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    {id :'i1', date: new Date(2023, 4, 12), title: "car", price: 2700 },
    { id :'i2',date: new Date(2023, 4, 29), title: "car", price: 2800 },
    { id :'i3',date: new Date(2023, 4, 13), title: "car", price: 28900 },
    { id :'i4',date: new Date(2023, 6, 23), title: "car", price: 2400 },
  ];
  return (
    <div>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        price={expenses[0].price}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        price={expenses[1].price}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        price={expenses[2].price}
      ></ExpenseItem>
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        price={expenses[3].price}
      ></ExpenseItem>
    </div>
  );
}

export default App;
