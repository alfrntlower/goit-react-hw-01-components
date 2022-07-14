import React from 'react';
import PropTypes from 'prop-types';
import css from './Friendlist.module.css';


export default function SectionFriendlist({title, children}) {
    return (
    <div>
      {title && <h2 className={css.friendlist__title}>{title}</h2>}
      {children}
    </div>
  );

}

SectionFriendlist.prototype = {
    title: PropTypes.string,
    children: PropTypes.node,
}
