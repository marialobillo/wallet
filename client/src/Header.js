import React from 'react';

const Header = ({approvers, quorum}) => {
    return (
        <header>
            <li>Approvers: {approvers.join(', ')}</li>
            <li>Quorum: {quorum}</li>
        </header>
    );
}

export default Header;