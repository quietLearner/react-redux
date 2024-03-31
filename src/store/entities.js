import { combineReducers } from "redux";

/*
https://stackoverflow.com/questions/39282253/how-can-i-alias-a-default-import-in-javascript
*/
import bugsReducer from "./bugs";
import projectsReducer from "./projects";
import usersReducer from "./users";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  users: usersReducer,
});
