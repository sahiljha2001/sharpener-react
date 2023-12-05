

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
      <div className="flex-none w-14 h-14">
        {expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            price={item.price}
          ></ExpenseItem>
        ))}
      </div>
    </div>
  );
}

export default App;
