import createPlayer from "../createPlayer";
import gameBoard from "../gameBoard";
import createShip from "../createShip";

test('create players with names', () => {
    const player1 = createPlayer('efe');
    expect(player1.name).toBe('efe');
})

test('attack at opponents board empty', () => {
    const p2Board = gameBoard();
    p2Board.createBoard();
    const ship = createShip(4, false);
    p2Board.placeShip(ship, 3);
    const p1 = createPlayer('efe', p2Board);
    p1.attack(5);
    expect(p1.oppBoard.board[5].beenHit).toBe(true);
    expect(ship.hitCount).toBe(1);
})

test('attack at opponents board full', () => {
    const p2Board = gameBoard();
    p2Board.createBoard();
    const ship = createShip(4, false);
    p2Board.placeShip(ship, 3);
    const p1 = createPlayer('efe', p2Board);
    p1.attack(5);
    expect(ship.hitCount).toBe(1);
})

test('ai attack', () => {
    const p2Board = gameBoard();
    p2Board.createBoard();
    const ship = createShip(4, false);
    p2Board.placeShip(ship, 3);
    const p1 = createPlayer('efe', p2Board);
    p1.aiAttack();
    expect(ship.hitCount).toBe(1);
})