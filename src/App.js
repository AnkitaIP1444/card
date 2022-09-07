import React, { useState } from "react";
// import Filter from "./components/Filter";
import Expenses from "./components/Expense/Expenses"
//import ExpenseHeader from "./components/Form/ExpenseHeader";
import NewExpense from "./components/Form/NewExpense";


import './App.css'



// function App() {
//passing data via props - part 3



const old_expenses = [
  // {
  //   id: "e3",
  //   title: "Car Insurance",
  //   amount: 294.67,
  //   date: new Date(2022, 7, 10),
  // }, 

  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 7, 10),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450.55,
    date: new Date(2022, 7, 11),
  },
  {
    id: "e5",
    title: "Grocery (Wooden)",
    amount: 1000,
    date: new Date(2021, 7, 11),
  },
];
const App = () => {
  const [expenses, setuserExpense] = useState(old_expenses)

  const addExpensehandler = (userExpense) => {
    setuserExpense((preData) => {
      return [userExpense, ...preData]


    });
  }




  return (
    <div className="Appcss">

      <NewExpense onAddExpense={addExpensehandler} />

      <Expenses data={expenses} />
      {/* <Filter /> */}

      {/* <ExpenseItem
        date={expenses[2].date.toDateString()}
        title={expenses[2].title}
        amount={expenses[2].amount}
      ></ExpenseItem> */}



    </div>



  );
}


export default App;
