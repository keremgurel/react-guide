import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState('');
	const [show, setShow] = useState(false);

	// const [userInput, setUserInput] = useState({
	//   title: '',
	//   amount: '',
	//   date: '',
	// });

	// const handleTitleChange = (event) => {
	//   const setUserInput((prevState) => {
	//     return { ...prevState, title: event.target.value }
	//   })
	// }

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleAmountChange = (event) => {
		setAmount(event.target.value);
	};

	const handleDateChange = (event) => {
		setDate(event.target.value);
	};

	const handleCancelClick = (e) => {
		e.preventDefault();
		setShow(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const expenseData = {
			title: title,
			amount: amount,
			date: new Date(date),
		};

		props.onSaveExpenseData(expenseData);

		setTitle('');
		setAmount('');
		setDate('');
		setShow(false);
	};

	const handleAddExpenseClick = () => {
		setShow(true);
	};

	if (show === false) {
		return (
			<button type='submit' onClick={handleAddExpenseClick}>
				Add New Expense
			</button>
		);
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' value={title} onChange={handleTitleChange} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						onChange={handleAmountChange}
						value={amount}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-02-02'
						max='2022-12-31'
						onChange={handleDateChange}
						value={date}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='cancel' onClick={handleCancelClick}>
					Cancel
				</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
