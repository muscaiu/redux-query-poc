import { applyMiddleware, createStore, combineReducers } from "redux";
import { entitiesReducer, queriesReducer, queryMiddleware } from "redux-query";

const reducer = combineReducers({
  entities: entitiesReducer,
  queries: queriesReducer
});

const middleware = queryMiddleware(
  state => state.queries,
  state => state.entities,
  // queryCacheMiddleware({
  //   ttl: 1 * 60 * 60 * 1000 // 1 Hour in Milliseconds
  // }),
);

const store = createStore(reducer, applyMiddleware(middleware));

export default store;
