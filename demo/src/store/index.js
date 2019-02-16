import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {combineReducers}  from "redux-immutable";
//创建顶层对象
import a from "./reducers/a"
import b from "./reducers/b"
const reducers = combineReducers({
    a,b
})
                                    //异步action
const store  = createStore(reducers,applyMiddleware(thunk));

export default store;