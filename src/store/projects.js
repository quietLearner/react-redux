import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (state, action) => {
      state.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
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

    projectResolved: (state, action) => {
      const index = state.findIndex(
        (project) => project.id === action.payload.id
      );

      if (index !== -1) {
        state[index].resolved = true;
      }
    },
  },
});

//console.log(slice);

export const { projectAdded, projectRemoved, projectResolved } = slice.actions;

export default slice.reducer;
