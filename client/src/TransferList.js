import React from 'react';

const TransferList = ({transfers}) => {

    return (
        <div>
            <h2>Transfers</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Amount</th>
                        <th>To</th>
                        <th>Approvals</th>
                        <th>Sent</th>
                    </tr>
                </thead>

                <tbody>
                   {transfers.map(transfer => (
                       <tr key={transfers.id}>
                            <td>{transfer.id}</td>
                            <td>{transfer.amount}</td>
                            <td>{transfer.to}</td>
                            <td>{transfer.approvals}</td>
                            <td>{transfer.sent ? 'yes':'no'}</td>
                       </tr>
                   ))}
                </tbody>

            </table>
        </div>
    );
}


export default TransferList;