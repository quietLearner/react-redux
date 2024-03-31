import reducer from "./reducer";

function createStore(reducer) {
  let state = [];
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    // but how do you know if the state really changed?
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export default createStore(reducer);
