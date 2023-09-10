export const convertMsToDays = (ms: number) => {
  const days = Math.floor(ms / 86400000);
  return days;
};
