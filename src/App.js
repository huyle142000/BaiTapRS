//Bài 1:
// import BaiTapRS1 from "./BaiTapReactJS1/BaiTapRS1";
//Bài 2:
// import BaiTapRJ2 from "./BaitapReactJS2/BaiTapRJ2";
//Bài 3: Giày
// import BaiTapRS3 from "./BaiTapReactJS3_Shoes/BaiTapRS3";
//Bài 4: Vé Phim
// import BaiTapVePhim from "./BaiTapReactJS4_datvexemphim/BaiTapVePhim/BaiTapVePhim";
// import "/Valicss/Validate.css"
//set up redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import BaiTapValidation from "./BaiTapValidation/BaiTapValidation";
import { rootReducer } from "./redux/rootReducer";
const store = createStore(rootReducer);


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <BaiTapRS1 /> */}
        {/* <BaiTapRJ2/> */}
        {/* <BaiTapRS3 /> */}
        {/* <BaiTapVePhim /> */}
        <BaiTapValidation />
      </div>

    </Provider>
  );
}

export default App;
