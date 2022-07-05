import React, { useState } from 'react'
import AddExpense from './AddExpense'
import Expense from './Expense'


const SAMPLE_EXPENSE = [
    {
        id: 'i1',
        title: "gym",
        expense: "1000",
        date: new Date(2022, 5, 5)
    },
    {
        id: 'i2',
        title: "Butter",
        expense: "240",
        date: new Date(2022, 5, 5)

    },
    {
        id: 'i3',
        title: "bread",
        expense: "50",
        date: new Date(2022, 5, 5)
    },
    {
        id: 'i4',
        title: "sasuce",
        expense: "50",
        date: new Date(2022, 5, 5)
    }
]


function SampleExpense() {


    const [expense, setExpense] = useState(SAMPLE_EXPENSE);



    const updateDataHandler = (data) => {
        setExpense((preExpense) => {
            const newExpense = [data, ...preExpense];
            console.log(newExpense);
            return newExpense;
        }
        );
    }
    return (
        <div>
            <AddExpense onSavedData={updateDataHandler} />
            <Expense items={expense}></Expense>
        </div>
    );
}


export default SampleExpense