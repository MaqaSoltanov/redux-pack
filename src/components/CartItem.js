import React, { PureComponent } from "react";
import { connect } from "react-redux";
import deleteGoodFromCart from "../redux/actions/deleteAction";
import "../styles.css";

class CartItem extends PureComponent {  
  render() {
    const { title, price, id } = this.props;
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
        <div className="delete-item-button" onClick={() => this.props.deleteGoodFromCart(id)}>🞭</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    deleteGoodFromCart: (id) => {
      console.log("Delete dispatch")      
      dispatch(deleteGoodFromCart(id));}
});

export default connect(null,mapDispatchToProps)(CartItem);