export const getImageUrl = (imagePath: string): string => {
  // If the image path is already a full URL, return it
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // If it's a relative path, prepend the base URL
  if (imagePath.startsWith('/')) {
    return `https://project-nexus-backend-q5ai.onrender.com${imagePath}`;
  }
  
  // For image IDs from the product-images endpoint, construct the URL
  return `https://project-nexus-backend-q5ai.onrender.com/api/v1/products/product-images/${imagePath}/`;
};

export const formatPrice = (amount: number, currency: string): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency || 'USD',
  }).format(amount);
};