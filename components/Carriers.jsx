import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Carrier } from './Carrier';
import { List } from '@mui/material';
import styles from '../styles/Carriers.module.css';
import PropTypes from 'prop-types';

export function Carriers({ carriers, setSelectedCarrier, selectedCarrier }) {
  const [availableCarriers, setAvailableCarriers] = useState({});
  useEffect(async () => {
    const filteredCarriers = _.filter(
      carriers,
      (carrier) => carrier.assignedToLayer < 0
    );
    setAvailableCarriers(filteredCarriers);
  }, [carriers]);

  return (
    <div className={styles.carriers}>
      <div className={styles.title}>Available carriers:</div>
      <List>
        {_.map(availableCarriers, (carrier, index) => (
          <div key={index} onClick={() => setSelectedCarrier(carrier)}>
            <Carrier carrier={carrier} selectedCarrier={selectedCarrier} />
          </div>
        ))}
      </List>
    </div>
  );
}
Carriers.propTypes = {
  carriers: PropTypes.object,
  setSelectedCarrier: PropTypes.func,
  selectedCarrier: PropTypes.object,
};
