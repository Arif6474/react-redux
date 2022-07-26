import { createStore } from "redux";
import counterReducer from "./component/Services/Reducers/CounterReducer";


const store = createStore(counterReducer)
export default store;