import ExpenseForm from "./Expenseform"
import React from 'react';

import './Expenses.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={props.onCancel} />
    </div>
  );
};

export default NewExpense;