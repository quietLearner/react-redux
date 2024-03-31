//store
//action=event
//reducer=event handler
//import store from "./customStore";
import configureStore from "../store/configureStore";
import * as actions from "../store/bugs";

const store = configureStore();

console.log(store);

console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("store changed");
});

store.dispatch(actions.bugAdded({ description: "bug 1" }));

store.dispatch(actions.bugAdded({ description: "bug 2" }));

store.dispatch(actions.bugAdded({ description: "bug 3" }));

store.dispatch(actions.bugResolved({ id: 1 }));

store.dispatch(actions.bugRemoved({ id: 2 }));

console.log(store.getState());
