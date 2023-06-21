import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class SumTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectYourOrder: false,
      redirectYourLogin: false,
    };
  }

  checkAuthenticate = () => {
    const { user, sumTotal } = this.props;
    if (!sumTotal.length) {
      return toast.error("Vui lòng thêm sản phẩm trước khi thanh toán");
    }
    if (user) {
      this.setState({
        redirectYourOrder: true,
      });
    } else {
      toast.error("Bạn cần đăng nhập trước khi thanh toán");
      this.setState({
        redirectYourLogin: true,
      });
    }
  };

  render() {
    const { redirectYourOrder, redirectYourLogin } = this.state;
    const { sumTotal } = this.props;
    let amount = 0;
    let shippingTotal = 2;
    if (sumTotal.length > 0) {
      amount = sumTotal.reduce((sum, item) => {
        return (sum += item.quantity * item.price);
      }, 0);
    }
    if (redirectYourOrder) {
      return <Redirect to="/checkout"></Redirect>;
    }
    if (redirectYourLogin) {
      return <Redirect to="/login-register"></Redirect>;
    }
    return (
      <div>
        <div className="cart-page-total">
          <h2>Tổng sản phẩm</h2>
          <ul>
            <li>
              Tổng tiền
              <span>
                {amount
                  ? amount.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })
                  : 0}
              </span>
            </li>
            <li>
              Phí vận chuyển
              <span>
                {amount
                  ? shippingTotal.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })
                  : 0}
              </span>
            </li>
            <li style={{ color: "red" }}>
              Tổng tiền
              <span>
                {amount
                  ? (amount + shippingTotal).toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })
                  : 0}
              </span>
            </li>
          </ul>
          <button
            onClick={() => this.checkAuthenticate()}
            className="fix-text-checkout"
          >
            Đặt hàng
          </button>
        </div>
        <div className="coupon-all">
          <div className="coupon">
            <input
              id="coupon_code"
              className="input-text"
              name="coupon_code"
              placeholder="Mã giảm gá"
              type="text"
            />
            <input className="button" name="apply_coupon" type="submit" />
            <span className="fix-text-discount"></span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sumTotal: state.cart,
    user: state.auth,
  };
};
export default connect(mapStateToProps, null)(SumTotal);
