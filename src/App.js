import { useState } from "react";
import NewExpenseItem from "./Components/NewExpenseItem";
import Expenses from './Components/Form/Expenses';
import './Components/Form/Expenses.css';

const DUMMY_EXPENSES = [
  {
    key: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { key: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
  {
    key: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    key: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    key: "e5",
    title: "Car",
    amount: 5000,
    date: new Date(2022, 5, 12),
  },
  {
    key: "e6",
    title: "Flowers",
    amount: 10,
    date: new Date(2022, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) => { 
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
     
  };
  const [isEditing, setEditing] = useState(false);
  const ClickHandler=()=>{
    setEditing(true);
  }
  const HandleCancel=()=>{
    setEditing(false);
  }

 

 



  
  

  return (
    <div className='new-expense'>
      {!isEditing && (<button type="button" onClick={ClickHandler}>ADD NEW Expense</button>)}
      {isEditing && (<Expenses onAddExpense={addExpenseHandler} onCancel={HandleCancel}/>)}
      <NewExpenseItem expenses={expenses} />
    </div>
  );
}

export default App;
