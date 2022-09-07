import React , {useState} from 'react'


import './ExpenseHeader.css'


const ExpenseHeader = (props) => {
  const [userInput,setUserInput]=useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:'',

  })
  const [show,setShow]=useState(true)

  const titleChangeHandler=(event)=>{
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
     
      
    });
    // console.log(userInput);
  };

  const amountChangeHandler = (event) => {
    //setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
      
       
    });
    // console.log(userInput);
  };
  
     
  const dateChangeHandler = (event) => {
    //setEnteredDate(event.target.value);
       setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    
    });
    // console.log(userInput);
  };

  const submithandler = (event)=>{

    event.preventDefault()
    const expenseData={
      title : userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date:new Date(userInput.enteredDate)
    }


    console.log("From ExpenseHeader",expenseData)
   // after the data receive clear the text


   //step2 
    props.onSaveExpenseData(expenseData)

   setUserInput({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })
  
     

  } // submitchange handler


  return (
    
    
     
       show?<form onSubmit={submithandler} className="outer">
        <div>
        <div className="space1">
        <label>Date:</label>
        <input type="date"  onChange={dateChangeHandler}
            value={userInput.enteredDate}></input>
        </div>
       
        <div className='space1'>
        <label>Title:</label>
        <input type="text" onChange={titleChangeHandler }
         value={userInput.enteredTitle}></input>
       </div>

        <div className='space1'>
        <label>Amount:</label>
        <input type="number" onChange={amountChangeHandler}
        value={userInput.enteredAmount}></input>
        </div>
        
        
        
          <button id="id1"  onClick={()=>setShow(true)} type="submit" >Add</button>
        {/* <button  id="id1"onClick={()=>setShow(true)} >Add new Expense</button> */}
     <button   id="id1" onClick={()=>setShow(false)} >Hide</button> 
    
     
        </div>
       </form>:null
     

    
    // <div className='space'>
    //     <input id="id1" type="text"   onClick={()=>setShow(true)}  value="Add New Expense">
    //     </input>
    // </div>
  )
}

export default ExpenseHeader