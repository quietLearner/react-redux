//store
//action=event
//reducer=event handler
//import store from "./customStore";
import configureStore from "./store/configureStore";
import * as projectActions from "./store/projects";
import {
  bugAdded,
  bugAssignedToUser,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  getBugsByUser,
} from "./store/bugs";

import { userAdded, userRemoved } from "./store/users";

const store = configureStore();

store.dispatch({ type: "error", payload: { message: "this is an error" } });

//console.log(store);

//console.log(store.getState());

// const unsubscribe = store.subscribe(() => {
//   console.log("store changed");
// });

store.dispatch(projectActions.projectAdded({ description: "project 1" }));
store.dispatch(projectActions.projectAdded({ description: "project 2" }));

store.dispatch(projectActions.projectResolved({ id: 1 }));

console.log(store.getState());

console.log("bug store**************************************************");
store.dispatch(bugAdded({ description: "bug 1" }));

store.dispatch(bugAdded({ description: "bug 2" }));

store.dispatch(bugAdded({ description: "bug 3" }));

store.dispatch(bugAdded({ description: "bug 4" }));

store.dispatch(bugResolved({ id: 1 }));

store.dispatch(bugRemoved({ id: 2 }));

const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());

console.log(x === y);
console.log(getUnresolvedBugs(store.getState()));

store.dispatch(bugAdded({ description: "bug 5" }));

console.log(getUnresolvedBugs(store.getState()));

store.dispatch(userAdded({ name: "user 1" }));

store.dispatch(userAdded({ name: "user 2" }));

store.dispatch(userRemoved({ id: 2 }));

store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));

store.dispatch(bugAssignedToUser({ bugId: 3, userId: 1 }));

console.log(getBugsByUser(1)(store.getState()));

console.log(store.getState());
