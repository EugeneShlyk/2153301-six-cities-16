function spaceToUnderscore(str: string): string {
  return str.replace(/ /g, '_');
}

const randomInteger = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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

export {spaceToUnderscore, randomInteger, getNumbersBedrooms, getNumbersAdults};
