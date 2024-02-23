import "./App.css";
import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 542.64,
    date: new Date(2024, 2, 6),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 231.23,
    date: new Date(2024, 2, 3),
  },
  {
    id: "e3",
    title: "Plumbing",
    amount: 121.71,
    date: new Date(2024, 2, 8),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
