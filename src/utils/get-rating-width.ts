export function getRatingWidth(rating: number | undefined): string {
  if (rating === undefined) {
    return '0%'; // Возвращаем значение по умолчанию, например, '0%'
  } else {
    return `${Math.round(rating) * 20 }% `;
  }
}
