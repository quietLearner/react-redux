import { produce } from "immer";

let book = { title: "harry potter" };

function publish(book) {
  //book.isPublished = true;
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

let updatedbook = publish(book);

console.log("book: ", book);
console.log("updatedbook: ", updatedbook);
