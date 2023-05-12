const ShipFactory = (shipLength) => {
  let hits = 0;

  const hit = () => {
    hits++;
  };

  const isSunk = () => {
    return hits >= shipLength ? true : false;
  };

  return { hit, isSunk, shipLength };
};

export { ShipFactory as default };
