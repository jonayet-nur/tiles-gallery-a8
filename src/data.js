const tilesData = async () => {
  const res = await fetch('https://json-server-db-6l0o.onrender.com/tiles');
  const data = await res.json();
  return data;
};

export default tilesData;