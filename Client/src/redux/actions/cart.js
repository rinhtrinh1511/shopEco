import * as Types from "../../constants/ActionType";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const actFetchCartRequest = () => {
  return async (dispatch) => {
    if (localStorage.length === 0) {
      localStorage.setItem("_cart", JSON.stringify([]));
    }
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === "_cart") {
        const res = localStorage.getItem("_cart");
        dispatch(actFetchCart(JSON.parse(res)));
      }
    }
  };
};

export const actFetchCart = (items) => {
  return {
    type: Types.FETCH_CART,
    items,
  };
};

export const actAddCartRequest = (item, quantity) => {
  return async (dispatch) => {
    if (quantity > item.numberAvailable) {
      return toast.error(`Bạn có thể mua  ${item.numberAvailable} sản phẩm `);
    }
    const newQuantity = quantity ? quantity : 1;
    if (localStorage.length === 0) {
      localStorage.setItem("_cart", JSON.stringify([]));
    }
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === "_cart") {
        let cartData = [];
        cartData = JSON.parse(localStorage.getItem("_cart"));
        if (!item.quantity) {
          item.quantity = newQuantity;
        }
        let index = -1;
        index = cartData.findIndex((e) => e.id === item.id);
        if (index === -1) {
          cartData.push(item);
          localStorage.setItem("_cart", JSON.stringify(cartData));
          dispatch(actAddCart(item));
          return toast.success("Sản phẩm đã được thêm vào giỏ hàng");
        } else {
          cartData[index].quantity = cartData[index].quantity + item.quantity;
          if (cartData[index].quantity > item.numberAvailable) {
            return toast.error(`Xin lỗi !!! 
                        chúng tôi chỉ còn ${item.numberAvailable} sản phẩm hiện hành`);
          }
          if (cartData[index].quantity > 5) {
            return toast.error("Bạn chỉ được mua tối đa 5 sản phẩm");
          }
          localStorage.setItem("_cart", JSON.stringify(cartData));
          dispatch(actUpdateCart(cartData[index]));
          return toast.success("Sản phẩm đã được thêm vào giỏ hàng");
        }
      }
    }
  };
};

export const actAddCart = (item) => {
  return {
    type: Types.ADD_CART,
    item,
  };
};

export const actUpdateCartRequest = (item) => {
  return async (dispatch) => {
    let res = JSON.parse(localStorage.getItem("_cart"));
    const index = res.findIndex((e) => e.id === item.id);
    res[index] = item;
    localStorage.setItem("_cart", JSON.stringify(res));
    dispatch(actUpdateCart(item));
  };
};

export const actUpdateCart = (item) => {
  return {
    type: Types.UPDATE_CART,
    item,
  };
};

export const actRemoveCartRequest = (item) => {
  return async (dispatch) => {
    let res = JSON.parse(localStorage.getItem("_cart"));
    const index = res.findIndex((e) => e.id === item.id);
    res.splice(index, 1);
    dispatch(actRemoveCart(item));
    localStorage.setItem("_cart", JSON.stringify(res));
  };
};

export const actRemoveCart = (item) => {
  return {
    type: Types.REMOVE_CART,
    item,
  };
};

export const actClearRequest = () => {
  return async (dispatch) => {
    localStorage.setItem("_cart", JSON.stringify([]));
    dispatch(actClearCart());
  };
};

export const actClearCart = (clear) => {
  return {
    type: Types.CLEAR_CART,
  };
};
