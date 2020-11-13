import React, { useState } from 'react';

function NewTransfer({createTransfer}) {
  const [transfer, setTransfer] = useState(undefined);

  const submit = e => {
    e.preventDefault();
    createTransfer(transfer);
  }

  const updateTransfer = (e, field) => {
    const value = e.target.value;
    setTransfer({...transfer, [field]: value});
  }

  return (
    <div className="bg-white section">
      <h2 className="text-center">Create transfer</h2>
      <form className="form col-md-7" onSubmit={e => submit(e)}>
        <div  className="form-group">
          <label htmlFor="amount">Amount</label>
          <input 
            id="amount"
            type="text"
            className="form-control" 
            onChange={e => updateTransfer(e, 'amount')} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="to">To</label>
          <input 
            id="to"
            type="text" 
            className="form-control" 
            onChange={e => updateTransfer(e, 'to')} 
          />
        </div>
        <button className="btn btn-secondary">Submit</button>
      </form>
    </div>
  );
}

export default NewTransfer;
