import { compose, pipe } from "lodash/fp";
//functional programming
//trim
//wrap in div
let input = "     JavaScript     ";
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}<div>`;
const toLowerCase = (str) => str.toLowerCase();

/**
 * 1. read right to left
 * 2. too many ()
 */
const result = wrapInDiv(toLowerCase(trim(input)));
console.log(result);

//solution
//order matter, righ to left
const transform = compose(wrapInDiv, toLowerCase, trim);
console.log(transform(input));

//pipe, order is left to right
const transform1 = pipe(trim, toLowerCase, wrapInDiv);
console.log(transform1(input));
