import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Carrier } from './Carrier';
import { List } from '@mui/material';
import styles from '../styles/Carriers.module.css';
import PropTypes from 'prop-types';

export function Carriers({ carriers, ...restProps }) {
  const [availableCarriers, setAvailableCarriers] = useState({});
  useEffect(async () => {
    const filteredCarriers = _.filter(
      carriers,
      (carrier) => carrier.assignedToLayer < 0
    );
    setAvailableCarriers(filteredCarriers);
  }, [carriers]);

  return (
    <List className={styles.carriers}>
      {_.map(availableCarriers, (carrier, index) => (
        <Carrier key={index} carrier={carrier} {...restProps} />
      ))}
    </List>
  );
}
Carriers.propTypes = {
  carriers: PropTypes.object,
};
