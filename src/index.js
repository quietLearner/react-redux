import configureStore from "./store/configureStore";
import { projectAdded, projectRemoved } from "./store/projects";
import {
  bugAdded,
  bugAssignedToUser,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  getBugsByUser,
} from "./store/bugs";

import { userAdded, userRemoved } from "./store/users";
import { apiCallBegan, apiCallFailed } from "./store/api";

const store = configureStore();

// store.dispatch({
//   type: "apiCallBegan",
//   payload: {
//     url: "/bugs",
//     onSuccess: "bugsReceived",
//     onError: "apiRequestFailed",
//   },
// });

store.dispatch(
  apiCallBegan({
    url: "/bugs",
    onSuccess: "bugs/bugsReceived",
    //onError: apiCallFailed.type,
  })
);
