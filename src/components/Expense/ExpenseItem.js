import React from "react";
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props){

    return (
        <li>
        <Card className="expense-item1">
            <ExpenseDate date={props.date}/>
              <div className="expense-item2">
                <h2>{props.title}</h2>
                <div className="expense-item3">${props.amount}</div>
            </div>
        </Card>
        </li>
    );
   
}

export default ExpenseItem;