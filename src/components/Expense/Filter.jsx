import React from 'react'
import "../Expense/Filter.css"

const Filter = (props) => {
  const dropdown = (event) => {
    props.ExpenseFilter(event.target.value)
  }
  return (
    <div className='filter'>
      <h2>Filter by Year</h2>
      <select value={props.selected} onChange={dropdown} className="dropd">
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>

      </select>
    </div>
  )
}

export default Filter