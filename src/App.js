import React,{ useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

  const DUMMY_EXPENSES=[
    { id:'e1',
      title: 'Car Insurance',
      amount: 369.98,
      date: new Date(2021,2,28)
    },
    { id:'e2',
     title: 'TV',
     amount: 786.03,
     date: new Date(2020,6,28)
   },
   {  id:'e3',
     title: 'health Insurance',
     amount: 544,
     date: new Date(2021,10,2)
   },
   { id:'e4',
     title: 'home loan',
     amount: 987.67,
     date: new Date(2020,7,8)
   }
  ];
  const App=() => {

  const [expenses , setExpenses]=useState(DUMMY_EXPENSES); 

  const addExpenseHandler= (expense) =>{
    setExpenses((prevExpenses) =>{
      console.log(expense, ...prevExpenses);
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
