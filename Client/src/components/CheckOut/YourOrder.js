import React, { Component } from "react";
import { connect } from "react-redux";
import PaypalCheckoutButton from "./PaypalCheckoutButton";
import { config } from "../../config";
class YourOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      provinces: "",
    };
  }

  handSubmit = () => {
    this.props.submitOrder();
  };

  render() {
    const { items, order } = this.props;
    const shippingTotal = 2;
    let count = 0;
    if (items.length > 0) {
      count = items.reduce((sum, item) => {
        return (sum += item.quantity * item.price);
      }, 0);
    }
    return (
      <div className="col-lg-10 col-12 mb-2" style={{ margin: "auto" }}>
        <div className="your-order">
          <h3>Đơn hàng của bạn</h3>
          <div className="your-order-table table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="cart-product-name">Sản phẩm</th>
                  <th className="cart-product-total">Tổng</th>
                </tr>
              </thead>
              <tbody>
                {items && items.length
                  ? items.map((item, index) => {
                      return (
                        <tr className="cart_item" key={index}>
                          <td className="cart-product-name">
                            {item.nameProduct}
                            <strong
                              className="product-quantity"
                              style={{
                                paddingLeft: 10,
                                color: "coral",
                                fontStyle: "italic",
                              }}
                            >
                              x{item.quantity}
                            </strong>
                          </td>
                          <td className="cart-product-total">
                            <span className="amount">
                              {(item.quantity * item.price).toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
              <tfoot>
                <tr className="cart-subtotal">
                  <th>Tổng đơn hàng</th>
                  <td>
                    <span className="amount">
                      {count ? (count).toLocaleString('vi', {style : 'currency', currency : 'VND'}) : 0}
                    </span>
                  </td>
                </tr>
                <tr className="cart-subtotal">
                  <th>Phí vận chuyển</th>
                  <td>
                    <span className="amount">
                      {shippingTotal ? (shippingTotal).toLocaleString('vi', {style : 'currency', currency : 'VND'}) : 0}
                    </span>
                  </td>
                </tr>
                <tr className="order-total">
                  <th>Tổng thanh toán</th>
                  <td>
                    <strong>
                      <span className="amount" style={{ color: "red" }}>
                        {count ? (count + shippingTotal).toLocaleString('vi', {style : 'currency', currency : 'VND'}) : 0}
                      </span>
                    </strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="payment-accordion">
            <div
              onClick={this.props.submitOrder}
              className="order-button-payment"
            >
              <input type="submit" value="Check out" />
            </div>
          </div>
          {config.paypal.secretKey ? (
            <div className="mt-2" style={{ textAlign: "center" }}>
              <PaypalCheckoutButton
                changeToggle={(result) => this.props.changeToggle(result)}
                order={order}
              ></PaypalCheckoutButton>
            </div>
          ) : (
            <div className="mt-2" style={{ textAlign: "center" }}></div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.cart,
  };
};

export default connect(mapStateToProps, null)(YourOrder);
