import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (state, action) => {
      state.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },

    projectRemoved: (state, action) => {
      const index = state.findIndex(
        (project) => project.id === action.payload.id
      );

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

//console.log(slice);

export const { projectAdded, projectRemoved } = slice.actions;

export default slice.reducer;
