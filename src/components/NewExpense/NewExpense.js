import React,{useState} from 'react';
import Expenseform from './ExpenseForm';
import './NewExpense.css'
const NewExpense =(props) =>{
    const [isEditing,setIsEditing]=useState(false);
    const onSaveExpenseDataHandler=(enteredExpenseData) =>{
        const expenseData={ 
            ...enteredExpenseData,
            id:Math.random().toString()
        };
    //    console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    const startEditingHandler = () =>{
        setIsEditing(true);
    };
    const stopEditingHandler = () =>{
        setIsEditing(false);
    };


    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && ( <Expenseform 
        onSaveExpenseData={onSaveExpenseDataHandler}
        onCancel={stopEditingHandler}>
        </Expenseform>
        )}
    </div>
};
export default NewExpense;