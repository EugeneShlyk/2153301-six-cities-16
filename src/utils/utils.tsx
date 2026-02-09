const getNumbersBedrooms = (count: number | undefined) => {
  if (count === undefined) {
    return 'unknown number of bedrooms';
  }
  return `${count} Bedroom${count > 1 ? 's' : ''}`;
};

const getNumbersAdults = (count: number | undefined) => {
  if (count === undefined) {
    return 'unknown number of bedrooms';
  }
  return `Max ${count} adult${count > 1 ? 's' : ''}`;
};

export {getNumbersBedrooms, getNumbersAdults};
