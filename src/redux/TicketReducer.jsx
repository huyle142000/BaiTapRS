import data from "../BaiTapReactJS4_datvexemphim/danhSachGhe.json"
let danhSachGhe = data.map((item) => {
    return item.danhSachGhe
})

const initialState = {
    danhSachGhe,
    data,
    danhSachGheDaDat: []
}

export const TicketReducer = (state = initialState, action) => {
    switch (action.type) {

        case "DAT_GHE":
            let danhSachNew = [...state.danhSachGhe];
            //lọc giá trị để so sánh với các giá trị trong mảng cũ
            let danhSachDaChon = action.danhsach.map((item) => {
                return item.value
            })
            //lọc ra danh sách mới
            let database = danhSachNew.map((item) => {
                return item.map((items) => {
                    //Lọc
                    if (danhSachDaChon.includes(items.soGhe)) {
                        items.daDat = true
                    }
                    return items
                })
            })

            //gán ds cũ bằng ds mới đã lọc
            state.danhSachGhe = database;

            //thay đổi mảng bill 
            state.danhSachGheDaDat = action.danhsach;
        
            return { ...state }
        case "IN_HOA_DON":
            let newDS = [...state.danhSachGheDaDat];
            newDS = [];
            state.danhSachGheDaDat = newDS;
            return { ...state }

        default:
    }
    return { ...state }
}
