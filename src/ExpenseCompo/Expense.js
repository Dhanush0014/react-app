import React from 'react'
import ExpenseForm from './ExpenseForm'
import './expense.css'

function Expense(props) {
    const { items } = props
    items.map(item=>{
        return console.log(item);
    })
   
    return (
        <div className = 'expenses_list'>
            { items.map((item, index) =>
                
                <ExpenseForm
                    key={index}
                    title={item.title}
                    expense={item.expense}
                    date={new Date(item.date)}>
                </ExpenseForm>)}
        </div>
    )
}

export default Expense