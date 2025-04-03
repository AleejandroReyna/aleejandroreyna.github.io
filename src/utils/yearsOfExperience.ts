export const yearsOfExperience = (): number => {
  const oneDay = 1000 * 60 * 60 * 24;
  const StartDate = new Date(2012, 9, 1)
  const EndDate = new Date()

  // A day in UTC always lasts 24 hours (unlike in other time formats)
  const start = Date.UTC(EndDate.getFullYear(), EndDate.getMonth(), EndDate.getDate());
  const end = Date.UTC(StartDate.getFullYear(), StartDate.getMonth(), StartDate.getDate());

  // so it's safe to divide by 24 hours
  return Math.floor(((start - end) / oneDay) / 365);
}