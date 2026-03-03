export const cleanEmpty = (data: any): any => {
  if (data === null || data === undefined || data === '') return undefined;

  if (Array.isArray(data)) {
    const cleanedArray = data.map(cleanEmpty).filter((v) => v !== undefined); // undefined olanları at

    return cleanedArray.length > 0 ? cleanedArray : undefined;
  }

  if (typeof data === 'object' && data.constructor === Object) {
    const cleanedObj = Object.entries(data).reduce((acc, [key, value]) => {
      const cleanedValue = cleanEmpty(value);
      if (cleanedValue !== undefined) {
        acc[key] = cleanedValue;
      }
      return acc;
    }, {} as any);

    return Object.keys(cleanedObj).length > 0 ? cleanedObj : undefined;
  }

  return data;
};
