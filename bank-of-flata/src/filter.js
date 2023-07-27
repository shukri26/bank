import React, { useState } from 'react';

function Filter({ transactions, onDelete }) {
    const [searchTerm, setSearchTerm] = useState('');
  
    const filteredTransactions = transactions.filter((transaction) => {
      return transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
    });
  
    return (
      <div className="filter-container">
        <input className='input-s'
          type="text"
          placeholder="Search for transactions"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.category}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>
                  <button className='delete-btn' onClick={() => onDelete(transaction.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}

export default Filter;