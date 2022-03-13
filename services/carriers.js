async function sendUpdateCarriers(carriers) {
  return await fetch('api/carriers', {
    method: 'POST',
    body: JSON.stringify(carriers),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function getCarriers() {
  return await fetch('api/carriers').then((response) => response.json());
}

export { getCarriers, sendUpdateCarriers };
