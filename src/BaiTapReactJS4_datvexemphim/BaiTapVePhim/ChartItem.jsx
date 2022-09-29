import React, { Component } from "react";
import { connect } from "react-redux";

class ChartItem extends Component {
  render() {
    const arrChairs = this.props.data;
    const danhSachGhe = this.props.danhSachGhe;
    return (
      <React.Fragment>
        {arrChairs.map((item, i) => {
          let { hang } = item;
          return (
            <tr key={i}>
              <td>{hang}</td>
              {hang === ""
                ? danhSachGhe[i].map((items, i) => {
                    return <td key={i}>{items.soGhe}</td>;
                  })
                : danhSachGhe[i].map((items, i) => {
                    let viTri = i + 1;
                    return (
                      <td key={i} className="position-relative">
                        <input
                          id={items.soGhe}
                          type="checkbox"
                          value={items.soGhe}
                          disabled={items.daDat}
                          onClick={(e) =>
                            this.props.chonGhe(e, items.gia)
                          }
                        />
                        <label
                          htmlFor={items.soGhe}
                          className="position-absolute chair"
                        >
                          <div
                            className={
                              items.daDat === true ? "gheDuocChon" : "ghe"
                            }
                          ></div>
                          <span
                            className="vitri"
                            style={
                              items.daDat === true
                                ? { color: "black" }
                                : { color: "white" }
                            }
                          >
                            {viTri}
                          </span>
                        </label>
                      </td>
                    );
                  })}
            </tr>
          );
        })}
        <tr>
          <td colSpan="20">
            <button
              className="btn btn-danger p-3 font-weight-bold"
              onClick={() => {
                this.props.danhSachDaChon();
              }}
            >
              Đặt Ghế
            </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.TicketReducer.danhSachGhe,
    data: state.TicketReducer.data,
  };
};

const mapStateToDispatchProps = (dispatch) => {
  return {
    chonGhe(value, gia) {
      const action = {
        type: "CHON_GHE",
        value: value,
        gia: gia,
      };
      dispatch(action);
    },
    danhSachDaChon() {
      const action = {
        type: "DAT_GHE",
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapStateToDispatchProps)(ChartItem);

