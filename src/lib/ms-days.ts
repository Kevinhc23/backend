export const convertDaysToMs = (days: number) => {
  const ms = days * 60 * 60 * 24 * 1000;
  return ms;
};

export const convertHourToMs = (Hour: number) => {
  const ms = Hour * 3600000;
  return ms;
};
