function sum(a, b) {

  if (a === undefined || b === undefined) {
    throw new Error("You're missing an argument!");
  }

  return Number(a) + Number(b);

}

module.exports = sum;