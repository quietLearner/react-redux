import { createAction, createReducer } from "@reduxjs/toolkit";

//const action1 = createAction("newAction");

/*
{
    "type": "newAction",
    "payload": {
        "id": 123
    }
}
*/
//console.log("action1 ", action1({ id: 123 }));

//actions
export const bugAdded = createAction("bugAdded");

export const bugRemoved = createAction("bugRemoved");

export const bugResolved = createAction("bugResolved");

//reducer
let lastId = 0;

const reducer = createReducer([], {
  //action: function
  // event: event handler
  [bugAdded.type]: (state, action) => {
    state.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },

  [bugRemoved.type]: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);

    if (index !== -1) {
      state.splice(index, 1);
    }
  },

  [bugResolved.type]: (state, action) => {
    const index = state.findIndex((bug) => bug.id === action.payload.id);

    if (index !== -1) {
      state[index].resolved = true;
    }
  },
});

export default reducer;

/*
redux ducks pattern
*/
