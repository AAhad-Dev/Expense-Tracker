import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);

  // const onHandle = () => {
  //   setTitle("CLICKED!!!");
  // };

  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={onHandle}>Click Me</button> */}
      </div>
    </li>
  );
}

export default ExpenseItem;
