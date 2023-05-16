const GameboardFactory = (boardSize) => {
  // create square board of defined size
  const board = new Array(boardSize);
  for (let x = 0; x < board.length; x++) {
    board[x] = new Array(boardSize);
  }

  const placeShip = (ship, x, y, rotation) => {
    // place ship upwards
    if (rotation == "up") {
      // starting from initial coordinate on the x axis, determine how far up the y axis the ship will be placed
      let endCoordinate = y + ship.shipLength - 1;
      // if it will be placed past the end of the board, it is an invalid placement
      if (endCoordinate > boardSize - 1) {
        throw new Error("Ship placement invalid");
      }
      // iterate from starting coordinate to end coordinate, placing ship at each coordinate
      for (let coordinate = y; coordinate <= endCoordinate; coordinate++) {
        board[x][coordinate] = ship;
      }
    }
    // place ship to the right
    else if (rotation == "right") {
      let endCoordinate = x + ship.shipLength - 1;

      if (endCoordinate > boardSize - 1) {
        throw new Error("Ship placement invalid");
      }

      for (let coordinate = x; coordinate <= endCoordinate; coordinate++) {
        board[coordinate][y] = ship;
      }
    }
    // place ship downwards
    else if (rotation == "down") {
      let endCoordinate = y - ship.shipLength + 1;

      if (endCoordinate < 0) {
        throw new Error("Ship placement invalid");
      }

      for (let coordinate = y; coordinate >= endCoordinate; coordinate--) {
        board[x][coordinate] = ship;
      }
    }
    //place ship to the left
    else if (rotation == "left") {
      let endCoordinate = x - ship.shipLength + 1;

      if (endCoordinate < 0) {
        throw new Error("Ship placement invalid");
      }

      for (let coordinate = x; coordinate >= endCoordinate; coordinate--) {
        board[coordinate][y] = ship;
      }
    }
  };

  return { board, placeShip };
};

export { GameboardFactory as default };
