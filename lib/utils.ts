export function getImageUrl(imageId: string): string {
  return `https://project-nexus-backend-q5ai.onrender.com/images/${imageId}`;
}

export function formatPrice(amount: number, currency: string): string {
  return `${currency} ${amount.toFixed(2)}`;
}