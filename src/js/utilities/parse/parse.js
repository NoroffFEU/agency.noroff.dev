//Author Fredrik Tokle

/**
 * Takes the date string from the API and converts it to a readable format
 * @param {string} date
 * @returns {string} A string with the date in the format of dd/mm/yyyy
 *
 * @example
 * const date = parseDate("2021-05-18T10:00:00.000Z");
 * console.log(date); // 18/05/2021
 */

export const parseDate = (date) => {
  const parsedDate = new Date(date).toLocaleDateString();
  return parsedDate;
};
