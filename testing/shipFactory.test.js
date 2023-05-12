import shipFactory from "../src/shipFactory";

test("creates a ship object with correct length", () => {
  const testShip = shipFactory(3);
  expect(testShip.shipLength).toBe(3);
});

test("accurately tracks hits", () => {
  const testShip = shipFactory(3);
  expect(testShip.hits).toBe(0);
  testShip.hit();
  expect(testShip.hits).toBe(1);
  testShip.hit();
  expect(testShip.hits).toBe(2);
});
