
import './index.css'
import './components/ExpenseItem';
import ExpenseItem from './components/ExpenseItem';
function App() {
const expenses=[{date:new Date(2023,4,24),title:'car',location :'india',amount:500}]
  return (
    <div>
      <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} location={expenses[0].location} ></ExpenseItem>
    </div>
        
);
}

export default App;
