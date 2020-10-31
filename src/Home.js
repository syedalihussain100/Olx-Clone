import React from "react";
import "./Home.css";
import Product from "./product";

function Home() {
  return (
    <div>
      <img
        className="home_image"
        src="https://www.selectyourdeals.com/wp-content/uploads/2019/10/olx-cash-mycar-review.jpg"
        alt=""
      />

      <div>
        <Product
          id="1"
          title="Apple Adds Noise"
          price={200}
          image="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/idBdN2bAcNZY/v0/1000x-1.jpg"
          rating={5}
          message="Create your account. Set a budget."
          Rupees="Rs: "
        />

        <Product
          id="2"
          title="Cat"
          price={500}
          image="http://placekitten.com/g/600/300"
          rating={5}
          message="Create your account. Set a budget."
          Rupees="Rs: "
        />

        <Product
          id="3"
          title="Daring Furniture"
          price={900}
          image="https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2020/01/A-Daring-And-Chic-New-Furniture-Collection-by-KellyWearstler-feature.jpg"
          rating={5}
          message="Create your account. Set a budget."
          Rupees="Rs: "
        />
      </div>
      <img
        className="home_image_second"
        src="https://i2.wp.com/techmoran.com/wp-content/uploads/2014/04/394920_492494777467325_1093040337_n.jpg?resize=851%2C315"
        alt=""
      />
      <div>
        <Product
          id="4"
          title="Choclate Coffee"
          price={350}
          image="https://media.istockphoto.com/photos/mug-on-plate-filled-with-coffee-surrounded-by-coffee-beans-picture-id157528129"
          rating={5}
          message="Create your account. Set a budget."
          Rupees="Rs: "
        />

        <Product
          id="5"
          title="Motorbike"
          price={5000}
          image="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          rating={5}
          message="Create your account. Set a budget."
          Rupees="Rs: "
        />
        <Product
          id="6"
          title="Tissot watches"
          price={100}
          image="https://apollo-singapore.akamaized.net/v1/files/9x8qoumnoqf5-PK/image;s=850x0"
          rating={5}
          message="Create your account. Set a budget."
          Rupees="Rs: "
        />

        <Product
          id="7"
          title=" New Brand System"
          price={15000}
          image="https://images.unsplash.com/photo-1603985585179-3d71c35a537c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
          rating={5}
          message="Create your account. Set a budget."
          Rupees="Rs: "
        />

        <Product
          id="8"
          title="Spring Men Sho"
          price={1000}
          image="https://image.made-in-china.com/2f0j00iVyGquHsnUoF/2020-New-Fashion-Spring-Men-Shoes-Special-Type-Shoes.jpg"
          rating={5}
          message="Create your account. Set a budget."
          Rupees="Rs: "
        />

        <Product
          id="9"
          title="Mega.pk"
          price={1700}
          image="https://www.mega.pk/items_images/t_19720.png"
          rating={5}
          message="Create your account. Set a budget."
          Rupees="Rs: "
        />
      </div>
      <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
        <small className="f6 db tc">
          © 2020 <b className="ttu">Olx Bhej do!</b>., All Rights Reserved
        </small>
        <div className="tc mt3">
          <a
            href="/language/"
            title="Language"
            className="f6 dib ph2 link mid-gray dim"
          >
            Language
          </a>
          <a
            href="/terms/"
            title="Terms"
            className="f6 dib ph2 link mid-gray dim"
          >
            Terms of Use
          </a>
          <a
            href="/privacy/"
            title="Privacy"
            className="f6 dib ph2 link mid-gray dim"
          >
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
