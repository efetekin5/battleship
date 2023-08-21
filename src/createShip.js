const createShip = (length, isVertical) => {
  const hitCount = 0;
  const sunk = false;

  const hit = (index, board) => {
    const hitShip = board[index].storedShip;

    if (hitShip.hitCount < hitShip.length) {
        hitShip.hitCount += 1;
        if (hitShip.hitCount === hitShip.length) {
            hitShip.sunk = true;
        }
    }

    return hitCount;
  };

  return { length, hitCount, sunk, hit, isVertical};
};

export default createShip;