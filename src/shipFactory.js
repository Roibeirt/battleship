const shipFactory = (shipLength, shipName) => {
  let hits = 0;

  const hit = function () {
    this.hits++;
  };

  function sayName() {
    console.log(this.shipName);
  }

  const isSunk = function () {
    if (hits >= shipLength) {
      return true;
    }
  };

  return { hit, isSunk, shipLength, hits: hits, shipName, sayName };
};

export { shipFactory as default };
