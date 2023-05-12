const GameboardFactory = (boardSize) => {
  // create square board of defined size
  const board = new Array(boardSize).fill(boardSize);

  const placeShip = (ship, x, y, rotation) => {
    // place starting coordinate
    board[x][y] = ship;

    // modify coordinates to match rotation
    if ((rotation = "up")) {
    }
  };
};
