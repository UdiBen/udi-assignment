import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import styles from '../styles/Carrier.module.css';
import classnames from 'classnames';
export function Carrier({ carrier, selectedCarrier, setSelectedCarrier }) {
  return (
    <ListItem
      disablePadding
      className={classnames(styles.carrier, {
        [styles.selectedCarrier]: carrier === selectedCarrier,
      })}
    >
      <ListItemButton onClick={() => setSelectedCarrier(carrier)}>
        <ListItemText primary={carrier.name} />
      </ListItemButton>
    </ListItem>
  );
}

Carrier.propTypes = {
  carrier: PropTypes.object,
  selectedCarrier: PropTypes.object,
  setSelectedCarrier: PropTypes.func,
};
