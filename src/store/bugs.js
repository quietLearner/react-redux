import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugAdded: (state, action) => {
      state.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
        userId: null,
      });
    },

    bugRemoved: (state, action) => {
      const index = state.list.findIndex((bug) => bug.id === action.payload.id);

      if (index !== -1) {
        state.list.splice(index, 1);
      }
    },

    bugResolved: (state, action) => {
      const index = state.list.findIndex((bug) => bug.id === action.payload.id);

      if (index !== -1) {
        state[list][index].resolved = true;
      }
    },

    bugAssignedToUser: (state, action) => {
      const { bugId, userId } = action.payload;
      const index = state.list.findIndex((bug) => bug.id === bugId);

      if (index !== -1) {
        state[list][index].userId = userId;
      }
    },

    //
    bugsReceived: (state, action) => {
      state.list = action.payload;
    },
  },
});

//console.log(slice);

export const { bugAdded, bugRemoved, bugResolved, bugAssignedToUser } =
  slice.actions;

export default slice.reducer;

//selector, the issue is, everytime we call it, it will return a new array, expensive
// export const getUnresolvedBugs = (state) =>
//   state.entities.bugs.filter((bug) => !bug.resolved);

export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
