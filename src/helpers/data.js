export const api = {
  dev: `http://ciy-companion.local/`,
  production: `https://ciy-companion.flywheelsites.com/`,
};

export const categoryMap = {
  move: 4,
  mix: 3,
  superstart: 5,
  yms: 11,
  engage: 12,
};

export const learnMoreURLs = {
  move: "https://ciy.com/move",
  mix: "https://ciy.com/mix",
  superstart: "https://ciy.com/superstart",
  yms: "https://ciy.com/youthministrysummit",
  engage: "https://ciy.com/engage",
};

export const getHumanReadableDateRange = (startDate, endDate) => {
  if (!startDate || !endDate) return;

  var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const start = new Date(startDate);
  const end = new Date(endDate);

  if (start.getFullYear() !== end.getFullYear()) {
    return `${
      month[start.getMonth()]
    } ${start.getDate()}, ${start.getFullYear()} - ${
      month[end.getMonth()]
    } ${end.getDate()}, ${end.getFullYear()}`;
  }

  if (start.getMonth() !== end.getMonth()) {
    return `${month[start.getMonth()]} ${start.getDate()} - ${
      month[end.getMonth()]
    } ${end.getDate()}, ${end.getFullYear()}`;
  }

  return `${
    month[start.getMonth()]
  } ${start.getDate()} - ${end.getDate()}, ${end.getFullYear()}`;
};
