import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enterTitle, setEnterTitle] = useState();
  const [enterDate, setEnterDate] = useState();
  const [enterAmount, setEnterAmount] = useState();

  const titleHandler = (e) => {
    setEnterTitle(e.target.value);
  };
  const DateHandler = (e) => {
    setEnterDate(e.target.value);
  };
  const AmountHandler = (e) => {
    setEnterAmount(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleHandler} value={enterTitle} type="text" />
        </div>
        <div className="new-expense__control ">
          <label>Amount</label>
          <input
            type="number"
            onChange={AmountHandler}
            min="0.01"
            step="0.01"
            value={enterAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={DateHandler}
            min="2022-01-01"
            max="2026-12-31"
            value={enterDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel Expense
        </button>
        <button type="submit">Add Expense </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
