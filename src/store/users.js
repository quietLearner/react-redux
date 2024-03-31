import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (state, action) => {
      state.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },

    userRemoved: (state, action) => {
      const index = state.findIndex((u) => u.id === action.payload.id);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { userAdded, userRemoved } = slice.actions;
export default slice.reducer;
