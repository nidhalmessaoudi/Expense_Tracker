import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  function saveExpenseDataHandler(data) {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  }

  const [formIsShown, setFormIsShown] = useState(false);

  function newExpenseHandler() {
    setFormIsShown(true);
  }

  function cancelNewExpenseHandler() {
    setFormIsShown(false);
  }

  return (
    <div className="new-expense">
      {formIsShown ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelNewExpense={cancelNewExpenseHandler}
        />
      ) : (
        <button onClick={newExpenseHandler}>New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
