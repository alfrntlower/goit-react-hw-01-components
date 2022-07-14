import React from 'react';
import PropTypes from 'prop-types';
import css from './Profile.module.css';

export default function SectionProfile({ title, children }) {
  return (
    <div>
      {title && <h2 className={css.profile__title}>{title}</h2>}
      {children}
    </div>
  );
}

SectionProfile.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

