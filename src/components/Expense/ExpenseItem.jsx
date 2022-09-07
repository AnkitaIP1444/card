import ExpenseDate from "./ExpenseDate";

import Card from "../Card/Card"
import "./ExpenseItem.css";

import React,{useState} from "react";






function ExpenseItem(props) {

//part 3 passing data via props

const [title,setTitle]=useState(props.title)

// const clickHandler = () => {
//   setTitle('Updated!');
//   console.log(title);
// };

return (

    

    
  <Card className="expense-item">
    
     

      <ExpenseDate date={props.date} />

      <div className="expense-item__description">

        <h2>{title}</h2>

        <div className="item">{props.amount}</div>

        {/* <div className="btn1"><input type="button" value="Click Me!" onClick={()=>setTitle(props.title1)}/></div> */}
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </div>
    
    
    </Card>

  );

}



export default ExpenseItem;