/**
 * Reads all the pages of the given PDF and returns
 * an object containing statistics for it.
 */
export const parse = async (pdf) => {
  const promises = [];

  for (let i = 1; i <= pdf.numPages; i++) {
    const promise = calculateStatsForPage(await pdf.getPage(i), i);
    promises.push(promise);
  }

  return await Promise.all(promises);
};

/**
 * Gets the text content of a PDF page and returns its stats
 * @param {*} page
 */
const calculateStatsForPage = async (page, pageNum) => {
  const textContent = await page.getTextContent();

  // turn text content into one long string
  const text = textContent.items.map((item) => item.str).join("");

  return {
    pageNum,
    chars: calculateCharCounts(text),
    words: calculateWordCount(text),
  };
};

// calculates the number of characters in a string
const calculateCharCounts = (str) => ({
  withSpaces: str.length,
  withoutSpaces: str.replace(/\s+/g, "").trim().length,
});

// matches any character that is not a word or punctuation character
const WORD_COUNT_REGEX = /[^\w[:punct:]]/g;

/**
 * Roughly calculates the number of words in a string.
 */
const calculateWordCount = (str) =>
  str.replace(WORD_COUNT_REGEX, " ").split(" ").length;
