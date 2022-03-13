async function getLayers() {
  return await fetch('api/layers').then((response) => response.json());
}

export { getLayers };
