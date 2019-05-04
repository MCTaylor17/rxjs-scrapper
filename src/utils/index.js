const closeThisInABit = what => {
  setTimeout(() => {
    what.close();
  }, Math.random() * 10000);
}

export { closeThisInABit };