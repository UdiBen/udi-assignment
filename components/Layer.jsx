import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import styles from '../styles/Layer.module.css';

export function Layer({ name }) {
  return (
    <ListItem disablePadding className={styles.layer}>
      <ListItemButton>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}
Layer.propTypes = {
  name: PropTypes.string,
};
