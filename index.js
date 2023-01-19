const addDays = require("date-fns/addDays");

const getDays = (days) => {
  let day = new Date(2020, 7, 22);
  let new_date = addDays(day, days);
  let variable = `${new_date.getDate()}-${
    new_date.getMonth() + 1
  }-${new_date.getFullYear()}`;
  console.log(variable);
  return variable;
};
getDays(10);
module.exports = getDays;
