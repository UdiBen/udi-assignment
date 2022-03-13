import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { List } from '@mui/material';
import PropTypes from 'prop-types';
import { Carrier } from './Carrier';
import styles from '../styles/InsuranceLayers.module.css';
import Clear from '@material-ui/icons/Clear';

const LAYERS_COUNT = 5;

export function InsuranceLayers({
  selectedCarrier,
  carriers,
  updateCarriers,
  setSelectedCarrier,
}) {
  const [layers, setLayers] = useState({});
  useEffect(async () => {
    const layersByCarrier = _.keyBy(
      Object.values(carriers),
      (layer) => layer.assignedToLayer
    );
    let calculatedLayers = _.times(LAYERS_COUNT, (i) => layersByCarrier[i]);
    setLayers(calculatedLayers);
  }, [carriers]);

  function replaceLayerCarrier(index) {
    if (!selectedCarrier) {
      return;
    }

    selectedCarrier.assignedToLayer = index;

    let existingCarrierInIndex = layers[index];

    if (existingCarrierInIndex) {
      existingCarrierInIndex.assignedToLayer = -1;
    }

    const carriersToUpdate = _.compact([
      selectedCarrier,
      existingCarrierInIndex,
    ]);

    updateCarriers(carriersToUpdate);
  }

  const handleCarrierClick = (index) => {
    if (selectedCarrier && selectedCarrier.assignedToLayer < 0) {
      replaceLayerCarrier(index);
      return;
    }
    setSelectedCarrier(layers[index]);
  };

  const handleClearLayer = (layer) => {
    layer.assignedToLayer = -1;
    updateCarriers([layer]);
  };

  return (
    <div>
      <div className={styles.title}>Insurance tower:</div>
      <List>
        {_.map(layers, (layer, index) => (
          <div
            key={index}
            onClick={() => handleCarrierClick(index)}
            className={styles.carrierWrapper}
          >
            <Carrier carrier={layer} selectedCarrier={selectedCarrier} />
            {layer && selectedCarrier === layer && (
              <Clear
                className={styles.clearIcon}
                onClick={() => handleClearLayer(layer)}
              />
            )}
          </div>
        ))}
      </List>
    </div>
  );
}
InsuranceLayers.propTypes = {
  selectedCarrier: PropTypes.object,
  carriers: PropTypes.object,
  updateCarriers: PropTypes.func,
  setSelectedCarrier: PropTypes.func,
};
