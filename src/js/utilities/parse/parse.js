export const parseDate = (date) => {
  const parsedDate = new Date(date).toLocaleDateString();
  return parsedDate;
};
