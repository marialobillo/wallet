import React from 'react';

function Header({approvers, quorum}) {
  return (
    <header className="header">
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Approvers</strong>:
          {approvers.join(', ')}</li>
        <li className="list-group-item">
          <strong>Quorum</strong>: 
          {quorum}</li>
      </ul>
    </header>
  );
}

export default Header;
