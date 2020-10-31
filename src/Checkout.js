import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="check_out">
      <div className="simple1">
        <img
          className="checkout_ad"
          src="https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2 className="lol1">Your Shopping Basket Is empty!</h2>
            <p className="lol1">
              You have no items in your basket. To Buy One or "Add To BAsket 🌍"
              Next to the item!
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket! </h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
                message={item.message}
                Rupees={item.Rupees}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div>
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
