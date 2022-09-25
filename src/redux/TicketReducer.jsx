import data from "../BaiTapReactJS4_datvexemphim/danhSachGhe.json";
let danhSachGhe = data.map((item) => {
  return item.danhSachGhe;
});
//1: we create a data in init state to render "Hàng:row"
//2: we create a danhSachGhe in init state to render "value,number of chair"
//3: we need a array to know chair is choosen
//4: we need a array to render Bill
const initialState = {
  data,
  danhSachGhe,
  danhSachGheDangChon: [],
  danhSachGheDaDat: [],
};

export const TicketReducer = (state = initialState, action) => {
  let danhSachGheDangChonNew = [...state.danhSachGheDangChon];
  //Get chair value
  let value = action.value;

  //Get price value
  let gia = action.gia;

  //danhSachGheDaDat
  let danhSachGheDaDatNew = [...state.danhSachGheDaDat];

  //danhSachGhe
  let danhSachNew = [...state.danhSachGhe];

  //get eleInput
  let inputCheck = document.getElementById(`${value}`);
  switch (action.type) {
    //create a new var and let it equal the old value danhSachGheDangChon
    case "CHON_GHE":
      //  check atributes Checked of input
      //if check push value and gia into the array when we check it get value before we click so it's not checked so we use !inputCheck
      if (!inputCheck.checked) {
        danhSachGheDangChonNew.push({
          value,
          gia,
        });
      } else {
        let index = danhSachGheDangChonNew.findIndex(
          (values) => values === value
        );
        danhSachGheDangChonNew.splice(index, 1);
      }
      //final return var and let old var equal new var
      state.danhSachGheDangChon = danhSachGheDangChonNew;
      return { ...state };

    case "DAT_GHE":
      //lọc giá trị để so sánh với các giá trị trong mảng cũ
      let danhSachDaChon = state.danhSachGheDangChon.map((item) => {
        return item.value;
      });

      //lọc ra danh sách mới thay đổi các số ghế thành true
      let database = danhSachNew.map((item) => {
        return item.map((items) => {
          //Lọc
          if (danhSachDaChon.includes(items.soGhe)) {
            items.daDat = true;
          }
          return items;
        });
      });

      //gán ds cũ bằng ds mới đã lọc
      state.danhSachGhe = database;

      //thay đổi mảng bill
      state.danhSachGheDaDat = state.danhSachGheDangChon;

      return { ...state };

    case "IN_HOA_DON":
      //when we click PrintBill we need resset danhSachGheDaDat and danhSachGheDangChon is [] empty

      //danhSachGheDaDat
      danhSachGheDaDatNew = [];

      //danhSachGheDangChon
      danhSachGheDangChonNew = [];

      //store them to old state
      state.danhSachGheDangChon = danhSachGheDaDatNew;
      state.danhSachGheDaDat = danhSachGheDaDatNew;

      return { ...state };
    case "XOA_SAN_PHAM":
      //2 step :
      //1: we will get index and delete chair in danhSachGheDaDat
      let indexValue = danhSachGheDaDatNew.findIndex((chair) => {
        console.log(chair.value, value);
        return chair.value === value;
      });

      danhSachGheDaDatNew.splice(indexValue, 1);
      danhSachGheDangChonNew.splice(indexValue, 1);

      //make danhSachGheDaDat equal danhSachGheDaDatNew to change state
      state.danhSachGheDaDat = danhSachGheDaDatNew;
      state.danhSachGheDangChon = danhSachGheDangChonNew;
      //2: we will get value and make chair available in data by filter

      danhSachNew = danhSachNew.map((chairs) => {
        return chairs.map((chair) => {
          if (chair.soGhe === value) {
            chair.daDat = false;
          }
          return chair;
        });
      });
      inputCheck.checked = false;
      state.danhSachGhe = danhSachNew;
      return { ...state };
    default:
  }
  return { ...state };
};
