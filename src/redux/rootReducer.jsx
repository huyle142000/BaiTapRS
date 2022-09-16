import { combineReducers } from "redux";
import { TicketReducer } from "./TicketReducer"
export const rootReducer = combineReducers({
    TicketReducer: TicketReducer
})