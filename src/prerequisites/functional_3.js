import { compose, pipe } from "lodash/fp";
//functional programming
//trim
//wrap in div
let input = "     JavaScript     ";
const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();

// const wrapInDiv = (str) => `<div>${str}<div>`;
// const wrapInSpan = (str) => `<span>${str}<span>`;

// but in pipe, they can only take function, so we need to curry it
//const wrap = (type, str) => `<type>${str}<type>`;

const wrap = (type) => (str) => `<type>${str}<type>`;

const transform = pipe(trim, toLowerCase, wrap("span"));
console.log(transform(input));
