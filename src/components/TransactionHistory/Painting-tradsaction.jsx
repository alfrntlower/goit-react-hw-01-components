import React from "react";
import PropTypes from 'prop-types';
import css from './Transactionhistory.module.css'

export default function PaintingTransactions({transactions}) {
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
                <tr>
                    <td>{transactions[0].type}</td>
                    <td>{transactions[0].amount}</td>
                    <td>{transactions[0].currency}</td>
                </tr>
                <tr>
                    <td>{transactions[1].type}</td>
                    <td>{transactions[1].amount}</td>
                    <td>{transactions[1].currency}</td>
                </tr>
            </tbody>
        </table>


    )
}

PaintingTransactions.prototype = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency : PropTypes.string,
}
