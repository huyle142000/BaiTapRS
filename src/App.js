//Bài 1:
// import BaiTapRS1 from "./BaiTapReactJS1/BaiTapRS1";
//Bài 2:
// import BaiTapRJ2 from "./BaitapReactJS2/BaiTapRJ2";
//Bài 3:
// import BaiTapRS3 from "./BaiTapReactJS3_Shoes/BaiTapRS3";

import BaiTapVePhim from "./BaiTapReactJS4_datvexemphim/BaiTapVePhim/BaiTapVePhim";
//set up redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";
const store = createStore(rootReducer);


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <BaiTapRS1 /> */}
        {/* <BaiTapRJ2/> */}
        {/* <BaiTapRS3 /> */}
        <BaiTapVePhim />
      </div>

    </Provider>
  );
}

export default App;
