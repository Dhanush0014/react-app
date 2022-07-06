import React, { useState, useEffect } from 'react';

import './Expense.css';
import './ExpensesFilter.css';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpensesFilter';

import Card from './../UI/Card'

const Expenses = (props) => {
  
  

  const [filteredExpense, setFilteredExpense] = useState(props.items);
  const [filteredYear, setFilteredYear] = useState();


  useEffect(()=>{
    setFilteredExpense(props.items);
  },[props.items]);

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear)

    if (selectedYear === '0') {
      setFilteredExpense(props.items);
    }
    else {
      const filter = props.items.filter(
        (item)=>{
        return item.date.getFullYear().toString() === selectedYear;
      })
    
     setFilteredExpense(filter);
    }
    
  }
  
  console.log("prop items"+ props.items.length);

  console.log("filtered expense"+filteredExpense.length);

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} className='expenses-filter'
          onChangeFilter={filterHandler}>
        </ExpenseFilter>
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
}

export default Expenses;