/* eslint-disable @typescript-eslint/no-unsafe-return */
export const langRegex = () => ({
  enRegex: /^[a-zA-Z- ]+$/,
  arRegex: /^[\u0621-\u064A- ]+$/,
  bothArAndEnRegexonlyLetters: /^[a-zA-Z-\u0621-\u064A- ]+$/,
});

export const getCategory = (FilesCategory, key) => Object.values(FilesCategory)?.find(cat => cat?.key === key) ?? false;
