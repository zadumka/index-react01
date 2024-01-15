import "./TransactionHistory.css"


export const TransactionHistory = ( { item } ) => {
    return (
        <table className="transaction-history">
            <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>

            <tbody>
            {item.map(transaction => {
                return <tr key={transaction.id}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                </tr>
            })}
            </tbody>
        </table>
    )
}