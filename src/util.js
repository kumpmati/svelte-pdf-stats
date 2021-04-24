/**
 * Reads a File object into a base64 string.
 */
export const fileToBase64 = async (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);

    reader.readAsDataURL(file);
  });
};

/**
 * Helper function to calculate a sum from an array
 */
export const sum = (arr, selector, initialValue = 0) =>
  arr?.reduce((prev, curr) => prev + selector(curr), initialValue);
