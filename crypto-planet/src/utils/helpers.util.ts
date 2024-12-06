export const randomId = (): string => {
  const randomNumber = Math.floor(Math.random() * 1000);
  if (isNaN(randomNumber)) {
    throw new Error("Failed to generate random number");
  }

  return `${Date.now() + randomNumber}`;
};
