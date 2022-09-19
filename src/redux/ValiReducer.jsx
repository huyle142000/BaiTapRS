const init = {
    listStudent: [

    ]
}
export const ValiReducer = (state = init, action) => {
    switch (action.type) {
        case "ADD_STUDENT":
            let newListStudent = [...state.listStudent,action.payload];
            console.log(newListStudent)

            state.listStudent = newListStudent;
            return { ...state }
        default:
            break;
    }
    return { ...state }
}


