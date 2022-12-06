import React, { PureComponent } from "react";
import addGoodToCard from "../redux/actions/action";
import store from "../redux/reducers/store";
import "../styles.css";


class GoodsItem extends PureComponent {

  addToCardHandler = (id) =>
  {    
    store.dispatch(addGoodToCard(id));
  }

  render() {
    const { title, description, price, id } = this.props;

    return (
      <div className="goods-item" key={id}>
        <h3 className="goods-item__title">{title}</h3>
        <p className="goods-item__price">
          <span className="goods-item__price-value goods-item__price-value_old">{price*1.2}.00$ </span>
          <span className="goods-item__price-value goods-item__price-value_new">{price}.00$</span>
        </p>
        <p className="goods-item__description">{description}</p>
        <button className="goods-item__add-to-card" onClick={() => this.addToCardHandler(id)}>Add to cart</button>
      </div>
    );
  }
}

export default GoodsItem;