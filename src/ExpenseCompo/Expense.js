import React from 'react'
import ExpenseForm from './ExpenseForm'
import './expense.css'

function Expense(props) {

    // const { items } = props

    // items.map(item=>{
    //     return console.log(item.title);
    // })

    return (
        <div className='expenses_list'>
            {props.items.map((item, index) =>
                <ExpenseForm
                    key={index}
                    title={item.title}
                    expense={item.expense}
                    date={item.date}
                />
            )}
        </div>
    )
}

export default Expense