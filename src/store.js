import { applyMiddleware, createStore, combineReducers } from "redux";
import { entitiesReducer, queriesReducer, queryMiddleware } from "redux-query";

const reducer = combineReducers({
  entities: entitiesReducer,
  queries: queriesReducer
});

const middleware = queryMiddleware(
  state => state.queries,
  state => state.entities
);

const store = createStore(reducer, applyMiddleware(middleware));

export default store;
