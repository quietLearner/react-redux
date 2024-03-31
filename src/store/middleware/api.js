import axios from "axios";
import { apiCallBegan, apiCallFailed, apiCallSuccess } from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegan.type) {
      return next(action);
    }

    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;

    try {
      //npx json-server -p 9001 -w data/db.json
      const response = await axios.request({
        baseURL: "http://localhost:9001",
        url,
        method,
        data,
      });

      //general
      dispatch(apiCallSuccess(response.data));

      console.log("onSuccess ", onSuccess);
      if (onSuccess) {
        dispatch({
          type: onSuccess,
          payload: response.data,
        });
      }
    } catch (err) {
      // dispatch({
      //   type: onError,
      //   payload: err,
      // });
      //general error
      dispatch(apiCallFailed(err));
      //specific error
      if (onError) {
        dispatch({ type: onError, payload: err });
      }
    } finally {
    }
  };

export default api;
