const init = {
  checkStudent: { idName: "", name: "", phoneNumber: "", email: "" },
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
      name: "ádfsadfafasfdasdf",
      phoneNumber: 123123123213,
      email: "sadfasdfasdf",
    },
    {
      idName: "123",
      name: "ádfsadfafasfdasdf",
      phoneNumber: 123123123213,
      email: "sadfasdfasdf",
    },
    {
      idName: "23434",
      name: "ádfsadfafasfdasdf",
      phoneNumber: 123123123213,
      email: "sadfasdfasdf",
    },
  ],
  backUpList: [],
  isFilter: false,
};
export const ValiReducer = (state = init, action) => {
  let newState = { ...state };

  switch (action.type) {
    case "ADD_STUDENT":
      let newListStudent;
      if (state.isFilter) {
        newListStudent = [...state.backUpList, action.payload];
        state.isFilter = false;
      } else {
        newListStudent = [...state.listStudent, action.payload];
      }
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
      state.isUpdate = false;
      state.listStudent = [...state.listStudent];
      return { ...state };
    case "FILTER_STUDENT":
      let valueFilter = action.student.replaceAll(" ", "").toLowerCase();

      let listFilter = newState.listStudent.filter((student) => {
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
        listFilter.length === newState.listStudent.length
      ) {
      } else {
        newState.backUpList = [...newState.listStudent];
        newState.listStudent = [...listFilter];
        newState.isFilter = true;
      }
      newState.isUpdate = false;
      newState.checkStudent = {
        idName: "",
        name: "",
        phoneNumber: "",
        email: "",
      };
      state = newState;
      return { ...state };
    case "BACKLIST_STUDENT":
      state.listStudent = [...state.backUpList];
      state.isFilter = false;
      return { ...state };
    case "DELETE_STUDENT":
      let filterDeleteList;
      if (state.isFilter) {
        filterDeleteList = state.backUpList.filter(
          (student) => student.idName !== action.student
        );
        state.isFilter = false;
      } else {
        filterDeleteList = state.listStudent.filter(
          (student) => student.idName !== action.student
        );
      }

      state.listStudent = filterDeleteList;
      return { ...state };

    default:
      break;
  }
  return { ...state };
};
