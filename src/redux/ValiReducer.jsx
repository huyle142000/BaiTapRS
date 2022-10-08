const init = {
  checkStudent: {},
  isUpdate: false,
  listStudent: [
    {
      idName: "sadf",
      name: "ádfsadf",
      phoneNumber: 123123123213,
      email: "sadfasdfasdf",
    },
    {
      idName: "sadfsfadf",
      name: "ádfsadf",
      phoneNumber: 123123123213,
      email: "sadfasdfasdf",
    },
  ],
  backUpList: [],
  isFilter: false,
};
export const ValiReducer = (state = init, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      let newListStudent = [...state.listStudent, action.payload];
      state.listStudent = newListStudent;
      return { ...state };
    case "CHECK_STUDENT":
      let newCheck = { ...state.checkStudent };
      newCheck = action.student;
      state.isUpdate = true;
      return { ...state, checkStudent: newCheck };
    case "UPDATE_STUDENT":
      let indexFind = state.listStudent.findIndex(
        (student) => student.idName === action.student.idName
      );
      state.listStudent[indexFind] = action.student;
      state.listStudent = [...state.listStudent];
      state.isUpdate = false;
      state.checkStudent = {};
      return { ...state };
    case "FILTER_STUDENT":
      let valueFilter = action.student.replaceAll(" ", "").toLowerCase();

      let listFilter = state.listStudent.filter((student) => {
        let newIDStudent = student.idName.replaceAll(" ", "").toLowerCase();
        let newNameStudent = student.name.replaceAll(" ", "").toLowerCase();

        if (newIDStudent === valueFilter) {
          return newIDStudent === valueFilter;
        } else if (newNameStudent === valueFilter) {
          return newNameStudent === valueFilter;
        }
      });
      if (
        listFilter.length === 0 ||
        listFilter.length === state.listStudent.length
      ) {
        return { ...state };
      } else {
        state.backUpList = [...state.listStudent];
        state.listStudent = [...listFilter];
        state.isFilter = true;
      }
      return { ...state };
    case "BACKLIST_STUDENT":
      state.listStudent = [...state.backUpList];
      state.isFilter = false;
      return { ...state };

    default:
      break;
  }
  return { ...state };
};
