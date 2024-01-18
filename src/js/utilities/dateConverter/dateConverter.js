export const findDaysAgo = (date) => {
  const today = new Date();
  const datePosted = new Date(date);


  const timeDiff = Math.abs (today.getTime() - datePosted.getTime());

  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return diffDays;
}