import React from "react";
import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export default function SectionStatistics({title, children}) {
    return (
        <div>
            {title && <h2 className={css.statistics__title}>{title}</h2>}
            {children}
        </div>
    )
}

SectionStatistics.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}
