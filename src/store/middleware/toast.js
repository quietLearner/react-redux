//currying
const toast = (store) => (next) => (action) => {
  if (action.type === "error") {
    //https://www.npmjs.com/package/react-toastify
    console.log("Toastify: ", action.payload.message);
    // and stop executation??
  } else {
    next(action);
  }
};

export default toast;
