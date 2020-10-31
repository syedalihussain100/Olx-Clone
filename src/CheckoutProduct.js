import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, Rupees, price, image, rating, message }) {
  const [{}, dispatch] = useStateValue();
  const removebutton = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      title: title,
      Rupees: Rupees,
      price: price,
      image: image,
      rating: rating,
      message: message,
    });
  };
  return (
    <div className="main__card-data">
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <img
          src={image}
          class="br-100 h4 w4 dib ba b--black-05 pa2"
          title="Photo of a kitty staring at you"
        />

        <div className="pa2 ph3-ns pb3-ns">
          <div className="dt w-100 mt1">
            <div className="dtc">
              <h1 className="f5 f4-ns mv0">{title}</h1>
            </div>
            <div className="dtc tr">
              <h2 className="f5 mv0">
                {Rupees}
                {price}
              </h2>
              <p>{id}</p>
            </div>
          </div>
          <div>
            <p className="f6 lh-copy measure mt2 mid-gray">
              <div className="product_rating">
                {Array(rating)
                  .fill()
                  .map((_, index) => {
                    return (
                      <p key={index} className="fit_rating">
                        ✶
                      </p>
                    );
                  })}
              </div>
            </p>
          </div>
          {message}
        </div>
        <button onClick={removebutton} className="btn btn-danger btn__lol">
          Remove From Basket
        </button>
      </article>
    </div>
  );
}

export default CheckoutProduct;
