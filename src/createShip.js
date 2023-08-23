const createShip = (length, isVertical) => {
  const hitCount = 0;
  const sunk = false;

  return { length, hitCount, sunk, isVertical };
};

export default createShip;