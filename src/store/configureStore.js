import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import toast from "./middleware/toast";
import reducer from "./reducer";
import api from "./middleware/API";

export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), toast, api],
  });
}
