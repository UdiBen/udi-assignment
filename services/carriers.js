async function getAvailable() {
  return await fetch('api/carriers').then((response) => response.json());
}

export { getAvailable };
