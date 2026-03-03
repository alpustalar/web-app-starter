export const getSafeImageUrl = (url?: string | null) => {
  const placeholder = '/images/placeholder-image.png';

  if (!url || url.trim() === '') {
    return placeholder;
  }

  return url;
};
