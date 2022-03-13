import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Layer.module.css';

export function Layer({ layer }) {
  return <div className={styles.layer}>Layer ${layer.name}</div>;
}
Layer.propTypes = {
  layer: PropTypes.object,
};
