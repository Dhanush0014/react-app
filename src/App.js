import React,{ useState} from 'react';
import './App.css';
import AddExpense from './ExpenseCompo/AddExpense';
import Expense from './ExpenseCompo/Expense'

  const DUMMY_EXPENSES=[
    { id:'e1',
      title: 'Car Insurance',
      expense: 369.98,
      date: new Date(2021,2,28)
    },
    { id:'e2',
     title: 'TV',
     expense: 786.03,
     date: new Date(2020,6,28)
   },
   {  id:'e3',
     title: 'health Insurance',
     expense: 544,
     date: new Date(2021,10,2)
   },
   { id:'e4',
     title: 'home loan',
     expense: 987.67,
     date: new Date(2020,7,8)
   }
  ];
  const App=() => {

 const [expenses , setExpenses]=useState(DUMMY_EXPENSES); 


  const addExpenseHandler= (expense) =>{
    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses];
    });
 
  };

  return (
    <div>
      <AddExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
