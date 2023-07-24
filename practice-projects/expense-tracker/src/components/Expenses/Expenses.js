import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [yearFilter, setYearFilter] = useState('2023');
  const yearFilterChangeHandler = (selectedYear) => {
    setYearFilter(selectedYear);
  };

  const filteredExpensesByYear = props.items.filter(
    (expense) => expense.date.getFullYear() === parseInt(yearFilter)
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onYearFilterChange={yearFilterChangeHandler}
          selectedYear={yearFilter}
        />
        <ExpensesChart expenses={filteredExpensesByYear} />
        <ExpensesList items={filteredExpensesByYear} />
      </Card>
    </div>
  );
};

export default Expenses;
