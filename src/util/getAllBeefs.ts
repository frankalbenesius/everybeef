/**
 * Returns all the beefs.
 * The appetizer beefs.
 * The entree beefs.
 * Even the dessert beefs.
 * i.e. ['beef00', ... , '0beef0', ... , '00beef']
 */
export const getAllBeefs = (): string[] => {
  const appetizerBeefs: string[] = createBeefFilling().map(
    (hex) => `beef${hex}`
  );

  const entreeBeefs: string[] = createBeefFilling().map((hex) => {
    const [firstDigit, secondDigit] = hex.split("");
    return `${firstDigit}beef${secondDigit}`;
  });

  const dessertBeefs: string[] = createBeefFilling().map((hex) => `${hex}beef`);

  return [...appetizerBeefs, ...entreeBeefs, ...dessertBeefs];
};

/**
 * Returns 0 through 255 in hexidecimal.
 */
const createBeefFilling = () => {
  const fillings: string[] = [];

  for (let i = 0; i < 256; i++) {
    fillings.push(i.toString(16).padStart(2, "0"));
  }

  return fillings;
};
