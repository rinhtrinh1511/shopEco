import React, { Component } from "react";
import {
  actRemoveCartRequest,
  actUpdateCartRequest,
} from "../../redux/actions/cart";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
toast.configure();

class ShoppingCartItems extends Component {
  upItem = (item) => {
    if (item.quantity >= 5) {
      toast.error("Bạn chỉ được mua tối đa 5 sản phẩm");
      return;
    }
    let newItem = item;
    newItem.quantity++;
    this.props.changQuantityItem(newItem);
  };
  downItem = (item) => {
    if (item.quantity <= 1) {
      return;
    }
    let newItem = item;
    newItem.quantity--;
    this.props.changQuantityItem(newItem);
  };

  removeItem = (item) => {
    this.props.removeItem(item);
    toast.success("Xóa sản phẩm thành công");
  };

  render() {
    const { item } = this.props;
    return (
      <tr>
        <td className="li-product-remove">
          <div>
            <i
              style={{ fontSize: 20 }}
              onClick={() => this.removeItem(item)}
              className="fa fa-trash"
            />
          </div>
        </td>
        <td className="li-product-thumbnail d-flex justify-content-center">
          <a href="/">
            <div className="fix-cart">
              {" "}
              <img
                className="fix-img"
                src={item.image ? item.image : null}
                alt="Li's Product"
              />
            </div>
          </a>
        </td>
        <td className="li-product-name">
          <a className="text-dark" href="/">
            {item.nameProduct}
          </a>
        </td>
        <td className="product-subtotal">
          <span className="amount">
            {item.price.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </td>
        <td className="quantity">
          <div className="cart-plus-minus">
            <input
              onChange={() => {}}
              className="cart-plus-minus-box"
              value={this.props.item.quantity || 0}
            />
            <div onClick={() => this.downItem(item)} className="dec qtybutton">
              <i className="fa fa-angle-down" />
            </div>
            <div onClick={() => this.upItem(item)} className="inc qtybutton">
              <i className="fa fa-angle-up" />
            </div>
          </div>
        </td>
        <td className="product-subtotal">
          <span className="amount">
            {(item.price * item.quantity).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (item) => {
      dispatch(actRemoveCartRequest(item));
    },
    changQuantityItem: (item) => {
      dispatch(actUpdateCartRequest(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(ShoppingCartItems);
