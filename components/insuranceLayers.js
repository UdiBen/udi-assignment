import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Layer } from './layer';
import { getLayers } from '../services/layers';
import styles from '../styles/InsuranceLayers.module.css';

export function InsuranceLayers() {
  const [layers, setLayers] = useState({});
  useEffect(async () => {
    const fetchedLayers = await getLayers();
    setLayers(fetchedLayers);
  }, []);
  return (
    <div className={styles.tower}>
      {_.map(layers, (layer, index) => (
        <Layer key={index} layer={layer} />
      ))}
    </div>
  );
}
