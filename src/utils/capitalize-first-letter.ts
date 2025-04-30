export function capitalizeFirstLetter(str: string | undefined): string | undefined {
  if (str === undefined) {
    return undefined;
  }
  if (str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
