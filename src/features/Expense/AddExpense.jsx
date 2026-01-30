import { use, useState } from "react";
import "./AddExpense.scss";
import { useDispatch } from "react-redux";
import { addExpense } from "./expensesSlice";
function AddExpense() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [amount, setAmount] = useState(null);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);

  function handleAddExpense() {
    const expense = {
      title,
      price,
      amount,
      description,
      date,
    };
    dispatch(addExpense(expense));
    setTitle("");
    setDescription("");
    setAmount(0);
    setDate("");
    setPrice(0);
  }
  return (
    <form className="addExpense">
      <h3>Add a new Expense</h3>
      <div className="grid">
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            id="amount"
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            min={1}
          />
        </div>
        <div className="span-2">
          <label htmlFor="description">Description</label>
          <input
            name="description"
            id="description"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            name="price"
            id="price"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            min={0}
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            name="date"
            id="date"
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
      </div>

      <button type="button" onClick={handleAddExpense}>
        Add Expense
      </button>
    </form>
  );
}

export default AddExpense;
