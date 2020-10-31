import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, Rupees, price, image, rating, message }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    //// Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        Rupees: Rupees,
        price: price,
        rating: rating,
        image: image,
        message: message,
      },
    });
  };
  return (
    <div className="home_inline-one">
      {/* Home pass card from product */}
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <img
          src={image}
          height="150px"
          className="db w-100 br2 br--top"
          alt=""
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
          <p className="f6 lh-copy measure mt2 mid-gray">
            <div className="product_rating">
              {Array(rating)
                .fill()
                .map((_, index) => {
                  return (
                    <p key={index} className="fit_rating">
                      ❄
                    </p>
                  );
                })}
            </div>
          </p>
          {message}
        </div>
        <button onClick={addToBasket} className="btn btn-dark btn__lol">
          Add To Basket
        </button>
      </article>
    </div>
  );
}

export default Product;

// import React from "react";
// import "./product.css";
// import { useStateValue } from "./StateProvider";

// function product({ id, title, Rupees, price, image, rating, message }) {
//   const [{}, dispatch] = useStateValue();
//   return (
//     <div className="home_inline-one">
//       {/* Home pass card from product */}
//       <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
//         <img
//           src={image}
//           height="150px"
//           className="db w-100 br2 br--top"
//           alt=""
//         />
//         <div className="pa2 ph3-ns pb3-ns">
//           <div className="dt w-100 mt1">
//             <div className="dtc">
//               <h1 className="f5 f4-ns mv0">{title}</h1>
//             </div>
//             <div className="dtc tr">
//               <h2 className="f5 mv0">
//                 {Rupees}
//                 {price}
//               </h2>
//               <p>{id}</p>
//             </div>
//           </div>
//           <p className="f6 lh-copy measure mt2 mid-gray">
//             <div className="product_rating">
//               {Array(rating)
//                 .fill()
//                 .map((_, index) => {
//                   return (
//                     <p key={index} className="fit_rating">
//                       ✶
//                     </p>
//                   );
//                 })}
//             </div>
//           </p>
//           {message}
//         </div>
//         <button className="btn btn-dark btn__lol">Add To Basket</button>
//       </article>
//       {/* Main Card End! */}
//     </div>
//   );
// }

// export default product;
