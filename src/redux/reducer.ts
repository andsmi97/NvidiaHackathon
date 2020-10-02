import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import common from "./reducers/common";

export default (history: any) =>
  combineReducers({
    common,
    router: connectRouter(history),
  });
