import React from 'react'
import Chart from '../Chart/Chart'
const ExpenseChart = (props) => {

  let chartData = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ]

  for (const expense of props.expenses) {
    const monthValue = expense.date.getMonth()
    chartData[monthValue].value += expense.amount
  }
  return (
    <div>
      <Chart datacharts={chartData} />
    </div>
  )
}

export default ExpenseChart