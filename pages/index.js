import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { InsuranceLayers } from '../components/InsuranceLayers';
import { Carriers } from '../components/Carriers';
import { getCarriers, sendUpdateCarriers } from '../services/carriers';
import _ from 'lodash';

export default function Home() {
  const [carriers, setCarriers] = useState({});
  const [selectedCarrier, setSelectedCarrier] = useState();

  useEffect(async () => {
    let fetchedCarriers = await getCarriers();
    setCarriers(fetchedCarriers);
  }, []);

  let selectCarrier = (newCarrier) => {
    if (newCarrier === selectedCarrier) {
      setSelectedCarrier(null);
      return;
    }
    setSelectedCarrier(newCarrier);
  };

  let updateCarriers = (carriersToUpdate) => {
    sendUpdateCarriers(carriersToUpdate).then(() => {
      _.forEach(
        carriersToUpdate,
        (carrier) => (carriers[carrier.id] = carrier)
      );
      setCarriers({ ...carriers });
    });
    setSelectedCarrier(null);
  };

  return (
    <div className={styles.container}>
      <InsuranceLayers
        carriers={carriers}
        selectedCarrier={selectedCarrier}
        updateCarriers={updateCarriers}
        setSelectedCarrier={selectCarrier}
      />
      <Carriers
        selectedCarrier={selectedCarrier}
        setSelectedCarrier={selectCarrier}
        carriers={carriers}
        updateCarriers={updateCarriers}
      />
    </div>
  );
}
