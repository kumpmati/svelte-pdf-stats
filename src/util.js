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
