import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurence";
  const expenseAmount = 1000;
  const locationOfExpenditure = "Hailakandi";

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expenseitem__price">Rs {expenseAmount}</div>
        <div>{locationOfExpenditure}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
