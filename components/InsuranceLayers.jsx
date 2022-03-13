import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Layer } from './Layer';
import { List } from '@mui/material';
import PropTypes from 'prop-types';

const LAYERS_COUNT = 5;

export function InsuranceLayers({ selectedCarrier, carriers, updateCarriers }) {
  const [layers, setLayers] = useState({});
  useEffect(async () => {
    const layersByCarrier = _.keyBy(
      Object.values(carriers),
      (layer) => layer.assignedToLayer
    );
    let calculatedLayers = _.times(LAYERS_COUNT, (i) => layersByCarrier[i]);
    setLayers(calculatedLayers);
  }, [carriers]);

  function replaceLayerCarrier(index, selectedCarrier) {
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

  return (
    <>
      <List>
        {_.map(layers, (layer, index) => (
          <div
            key={index}
            onClick={() => replaceLayerCarrier(index, selectedCarrier)}
          >
            <Layer {...layer} />
          </div>
        ))}
      </List>
    </>
  );
}
InsuranceLayers.propTypes = {
  selectedCarrier: PropTypes.object,
  carriers: PropTypes.object,
  updateCarriers: PropTypes.func,
};
