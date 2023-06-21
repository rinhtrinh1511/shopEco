import React, { Component } from "react";
import { actAddCartRequest } from "../../redux/actions/cart";
import { connect } from "react-redux";
import { actDeleteFavoriteRequest } from "../../redux/actions/rating";
let token;
class ProductFavoriteItem extends Component {
  componentDidMount() {
    token = localStorage.getItem("_auth");
  }

  handleAddCart = (event, product) => {
    event.preventDefault();
    this.props.addCart(product.products);
    this.props.deleteFavorite(product.id, token);
  };

  handleRemoveItem = (product) => {
    this.props.deleteFavorite(product.id, token);
  };

  render() {
    const { product } = this.props;
    return (
      <tr>
        <td className="li-product-remove">
          <div onClick={() => this.handleRemoveItem(product)} >
            <i style={{ fontSize: 20 }} className="fa fa-trash" />
          </div>
        </td>
        <td className="li-product-thumbnail d-flex justify-content-center">
          <a href="/">
            <div className="fix-cart">
              {" "}
              <img
                className="fix-img"
                src={product.products.image}
                alt="Li's Product"
              />
            </div>
          </a>
        </td>
        <td className="li-product-name">
          <a className="text-dark" href="/">
            {product.products.nameProduct}
          </a>
        </td>
        <td className="product-subtotal">
          <span className="amount">
            {product.products.price.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </td>
        <td className="quantity">
          <button
            onClick={(event, id) => this.handleAddCart(event, product)}
            className="btn"
            style={{ background: "#fed700", color: "white" }}
          >
            {" "}
            Mua ngay
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (product) => {
      dispatch(actAddCartRequest(product));
    },
    deleteFavorite: (product, token) => {
      dispatch(actDeleteFavoriteRequest(product, token));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductFavoriteItem);
