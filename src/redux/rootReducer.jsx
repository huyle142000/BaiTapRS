import { combineReducers } from "redux";
//Bài Tập Vé Phim Ticket
import { TicketReducer } from "./TicketReducer"
//Bài tập Validation
import { ValiReducer } from "./ValiReducer";
export const rootReducer = combineReducers({
    TicketReducer: TicketReducer,
    ValiReducer: ValiReducer,
})