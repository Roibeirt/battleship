import GameboardFactory from "./GameboardFactory";
import ShipFactory from "./ShipFactory";

const board = GameboardFactory(10);

const ship = ShipFactory(3);

console.log("Generted ship:" + ship);
console.log("Generated board" + board);

board.placeShip(ship, 0, 0, "up");
console.log(board);

board.placeShip(ship, 2, 0, "right");
console.log(board);

board.placeShip(ship, 7, 1, "left");
console.log(board);

board.placeShip(ship, 9, 9, "down");
console.log(board);
