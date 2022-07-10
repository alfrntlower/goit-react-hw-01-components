import React from "react";
import PropTypes from 'prop-types';
import css from './Transactionhistory.module.css'

export default function PaintingTransactions({transactions}) {

    console.log(transactions);
    return (
        <table class="transaction-history" className={css.transaction__history}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                <>
                    {
                        transactions.map(transaction => (
                            <tr>
                                <td>{transaction.type}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.currency}</td>
                            </tr>
                        ))
                    }
                </>
            </tbody>
        </table>


    )
}

PaintingTransactions.prototype = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency : PropTypes.string,
}
