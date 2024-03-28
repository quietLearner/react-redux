//functional programming
//trim
//wrap in div
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}<div>`;
const toLowerCase = (str) => str.toLowerCase();

/** issue
 * 1. read right to left
 * 2. too many ()
 */
const result = wrapInDiv(toLowerCase(trim(" AAA ")));
console.log(result);
