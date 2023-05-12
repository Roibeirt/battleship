import ShipFactory from "../src/ShipFactory";

test("creates a ship object with correct length", () => {
  const testShip = ShipFactory(3);
  expect(testShip.shipLength).toBe(3);
});

test("accurately tracks hits and determines when ship is sunk", () => {
  const testShip = ShipFactory(3);
  expect(testShip.isSunk()).toBe(false);
  testShip.hit();
  expect(testShip.isSunk()).toBe(false);
  testShip.hit();
  expect(testShip.isSunk()).toBe(false);
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
  testShip.hit();
  expect(testShip.isSunk()).toBe(true);
});
