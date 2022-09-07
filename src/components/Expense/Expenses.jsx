import React from 'react'
import { useState } from 'react';
import Card from '../Card/Card';
import ExpenseItem from "../Expense/ExpenseItem";
import Filter from '../Expense/Filter';
import "../Expense/Expenses.css"
import "../Expense/ExpenseChart"
import ExpenseChart from '../Expense/ExpenseChart';


const Expenses = (props) => {
  const [filteredYear, setfilterYear] = useState("2022")

  const filterHandler = (selectYear) => {
    setfilterYear(selectYear)
  }
  const filterExpenses = props.data.filter((expense) => {
    return (expense.date.getFullYear().toString() === filteredYear)
  })

  let filterdata = <p class="filter">No Expense Found</p>
  if (filterExpenses.length > 0) {
    filterdata = filterExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ))
  }
  return (
    <div>




      <Card className='expense'>

        < Filter
          selected={filteredYear}
          ExpenseFilter={filterHandler} />

          
         <ExpenseChart expenses={filterExpenses} />

        {filterdata}
        {/* <Card className="expense"> */}

        {/* </Card> */}
      </Card>
    </div>
  )
}

export default Expenses