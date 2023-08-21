import createShip from "../createShip";
import gameBoard from "../gameBoard";

test("length of ships", () => {
  const newShip = createShip(4);
  expect(newShip.length).toBe(4);
});

test("ships getting hit", () => {
  const grid = gameBoard();
  grid.createBoard();
  const newShip = createShip(4, false);
  grid.placeShip(newShip, 3);
  newShip.hit(3, grid.board);
  newShip.hit(4, grid.board);
  newShip.hit(5, grid.board);
  newShip.hit(6, grid.board);
  expect(newShip.sunk).toBe(true);
});
