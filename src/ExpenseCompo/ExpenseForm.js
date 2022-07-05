import React ,{useState} from "react";
import './expense.css'

const ExpenseForm = (props) => {

    const {expense, date } = props
    const month = date.toLocaleString('en-US', { day: '2-digit' })
    const day = date.toLocaleString('en-US', { month: 'long' })
    const year = date.getFullYear()
    const [title,setTitle] = useState(props.title);

  const titleHandler = ()=>{
      setTitle('Updated!');
   }
   
    return (
        <div className="expenses">
            <div className="expense_date">
                <h3>{month}</h3>
                <h3>{day}</h3>
                <h3>{year}</h3>
            </div>
            <div className="expense_title" >
                <h1>{title}</h1>
            </div>

            <div className="expense_price">
                <h3>{expense}</h3>
            </div>
            <div>
                <button onClick={titleHandler}>Edit</button>
            </div>
        </div>
    );
}

export default ExpenseForm