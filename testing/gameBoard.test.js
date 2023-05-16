import GameboardFactory from "../src/GameboardFactory";

test("creates a 2d gameboard of variable, square size", () => {
  const testboard1 = GameboardFactory(10);
  const testboard2 = GameboardFactory(5);

  // test length of arrays are correct
  expect(testboard1.board.length).toBe(10);
  expect(testboard1.board[0].length).toBe(10);

  expect(testboard2.board.length).toBe(5);
  expect(testboard2.board[0].length).toBe(5);
});

test("places ships in correct coordinates", () => {
  const testboard = GameboardFactory(10);
  const testShip = { shipLength: 3 };

  testboard.placeShip(testShip, 0, 0, "right");
  expect(
    testboard.board[0][0] && testboard.board[1][0] && testboard.board[2][0]
  ).toBe(testShip);
  expect(testboard.board[3][0]).toBe(undefined);

  testboard.placeShip(testShip, 0, 5, "up");
  expect(
    testboard.board[0][5] && testboard.board[0][6] && testboard.board[0][7]
  ).toBe(testShip);
  expect(testboard.board[0][8]).toBe(undefined);

  testboard.placeShip(testShip, 9, 9, "down");
  expect(
    testboard.board[9][9] && testboard.board[9][8] && testboard.board[9][7]
  ).toBe(testShip);
  expect(testboard.board[9][6]).toBe(undefined);

  testboard.placeShip(testShip, 8, 8, "left");
  expect(
    testboard.board[8][8] && testboard.board[7][8] && testboard.board[6][8]
  ).toBe(testShip);
  expect(testboard.board[5][8]).toBe(undefined);
});

test("will not accept a placement that runs out of the board", () => {
  const testboard = GameboardFactory(10);
  const testShip = { shipLength: 3 };

  expect(() => testboard.placeShip(testShip, 9, 9, "right")).toThrow(
    "Ship placement invalid"
  );

  expect(() => testboard.placeShip(testShip, 9, 9, "up")).toThrow(
    "Ship placement invalid"
  );

  expect(() => testboard.placeShip(testShip, 0, 0, "left")).toThrow(
    "Ship placement invalid"
  );

  expect(() => testboard.placeShip(testShip, 0, 0, "down")).toThrow(
    "Ship placement invalid"
  );
});
