function spaceToUnderscore(str: string): string {
  return str.replace(/ /g, '_');
}

const randomInteger = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// const randomElement = <Element>(array: Element[] | readonly Element[]) =>
// array[]

// export {spaceToUnderscore};
