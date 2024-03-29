import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  // const [title,setTitle]= useState(props.title);
  // console.log('ExpenseItem evaluated by React')
  // const clickHandler = () => {
  //   // console.log("Clicked !!!");
  //   setTitle('Updated!');
  //   console.log(title)
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={()=> {console.log
      ("Clicked")}}>Change Title</button> */}
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};
export default ExpenseItem;
