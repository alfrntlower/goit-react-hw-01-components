import React from "react";
import PropTypes from 'prop-types';
import css from './Transactionhistory.module.css'

export default function SectionTransactionshistory({title, children}) {
    return (
        <div>
            {title && <h2 className={css.transactions__title}>{title}</h2>}
            {children}
        </div>
    )
}

SectionTransactionshistory.prototype = {
    title: PropTypes.string,
    children : PropTypes.node,
}
