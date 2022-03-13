import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import styles from '../styles/Carrier.module.css';
import classnames from 'classnames';
export function Carrier({ carrier, selectedCarrier }) {
  if (!carrier) {
    return <div className={styles.carrier} />;
  }

  return (
    <ListItem
      disablePadding
      className={classnames(styles.carrier, {
        [styles.selectedCarrier]: carrier === selectedCarrier,
      })}
    >
      <ListItemButton>
        <ListItemText primary={carrier.name} />
      </ListItemButton>
    </ListItem>
  );
}

Carrier.propTypes = {
  carrier: PropTypes.object,
  selectedCarrier: PropTypes.object,
};
