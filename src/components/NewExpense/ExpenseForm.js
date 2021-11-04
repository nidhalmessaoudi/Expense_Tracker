import "./ExpenseForm.css";

function ExpenseForm(props) {
  function submitHandler(e) {
    e.preventDefault();

    const titleEl = e.target.querySelector('input[type="text"]');
    const amountEl = e.target.querySelector('input[type="number"]');
    const dateEl = e.target.querySelector('input[type="date"]');

    const expenseData = {
      title: titleEl.value,
      amount: amountEl.value,
      date: new Date(dateEl.value),
    };

    props.onSaveExpenseData(expenseData);

    titleEl.value = "";
    amountEl.value = "";
    dateEl.value = "";
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2023-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancelNewExpense}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
