import gameBoard from "../gameBoard";
import createShip from "../createShip";

test("create board", () => {
  const grid = gameBoard();
  grid.createBoard();
  expect(grid.board.length).toBe(100);
});

test("place horizontal ship", () => {
  const grid = gameBoard();
  grid.createBoard();
  const ship = createShip(4, false);
  grid.placeShip(ship, 3);
  for (let i = 3; i < 3 + ship.length; i += 1) {
    expect(grid.board[i].storedShip).toBe(ship);
  }
});

test("place vertical ship", () => {
  const grid = gameBoard();
  grid.createBoard();
  const ship = createShip(4, true);
  grid.placeShip(ship, 3);
  for (let i = 3; i < 3 + ship.length * 10; i += 10) {
    expect(grid.board[i].storedShip).toBe(ship);
  }
});

test("receive attack at ship", () => {
  const grid = gameBoard();
  grid.createBoard();
  const ship = createShip(4, false);
  grid.placeShip(ship, 3);
  grid.receiveAttack(3);
  expect(ship.hitCount).toBe(1);
});

test("receive attack at empty space", () => {
  const grid = gameBoard();
  grid.createBoard();
  grid.receiveAttack(3);
  expect(grid.board[3].beenHit).toBe(true);
});

test('all ships sunk', () => {
  const grid = gameBoard();
  grid.createBoard();
  const ship = createShip(4, false);
  grid.placeShip(ship, 3);
  grid.receiveAttack(3);
  grid.receiveAttack(4);
  grid.receiveAttack(5);
  grid.receiveAttack(6);
  const isSunk = grid.allShipsSunk();
  expect(isSunk).toBe(true);
})