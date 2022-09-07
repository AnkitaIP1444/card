import React from 'react';

import ExpenseHeader from './ExpenseHeader';
import './NewExpense.css';

//child to parent component communication 


//after step3 pass probs in NewExpense

const NewExpense = (props) => {
  
  const onSaveExpenseDataHandler = (enteredExpenseData)=>{

    const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()

    }

    console.log("FROM NewExpense",expenseData)
    props.onAddExpense(expenseData)

  }

   //step 1 : child to parent component communication
  return (
    <div className='new-expense'>
      <ExpenseHeader onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;