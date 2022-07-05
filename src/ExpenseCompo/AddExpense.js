import React, { useState } from 'react'
import './expense.css'


function AddExpense(props) {

    const [enteredTitle, setTitle] = useState('');
    const [enteredExpense, setExpense] = useState('');
    const [enteredDate, setDate] = useState('');

    // const[userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredExpense:'',
    //     enteredDate:''
    // })


    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        //  This approach cana provide incorrect snapshot
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })


        // This method provides latest snapshot
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle: event.target.value}
        // })
    }
    const expenseChangeHandler = (event) =>{
        setExpense(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredExpense: event.target.value
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredExpense: event.target.value}
        // })
    }

    const dateChangeHandler = (event) =>{
        setDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredDate: event.target.value}
        // })
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            expense : enteredExpense,
            date : new Date(enteredDate)
        }
        
        props.onAddExpense(expenseData)
       
        setTitle('');
        setExpense('');
        setDate('');
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='new-expense'>
                    <div >
                        <label>Title</label>
                        <input 
                        type="text" 
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                    </div>
                    <div >
                        <label>Amount</label>
                        <input 
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        value={enteredExpense}
                        onChange={expenseChangeHandler}/>
                    </div>
                    <div  >
                        <label>Date</label>
                        <input 
                        type="date" 
                        min="2020-01-01"
                        max="2025-12-01"
                        placeholder=" "
                        value={enteredDate}
                        onChange={dateChangeHandler} />
                    </div>
                    <div>
                        <button>ADD EXPENSE</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddExpense