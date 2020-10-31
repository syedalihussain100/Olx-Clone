import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Navbar() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* logo left image */}
      <Link to="/">
        <img
          className="header__logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXEAAACICAMAAAAmsyvzAAAAk1BMVEX///8ALjQAJCsAKS/p7OwyU1gAGSIAGiIAFh8AFB4ADhnBysytuLri5OXGz9AAJy7V2doAHiYAAAC9xMUADBjw8/MAABAAICcfSU+vubp8jI/2+PinsbMAAAqZpqiDkpURNTuPn6FDV1tebnEsSU5QYmYjQkbQ1tcAMjhidXgzTVGgrK5CX2OXoKJQam41VVpzhIc9TPn5AAAEvElEQVR4nO2da3uiOhRG5TLcKiIDyghUtN7G2tM5///XHTwoAkm4xJrpY94134DYumYbk72TdDQCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeHKmBMnf/pWenF+OUSfU//av9OT80JQ6Kow/FhgXDYyLBsZFA+NfQeJOF6f1er0cT9xZx7MwfjfuYvPmOYYf5f9M29pu4mmbdRi/j9lpZxiqVxGoeZGzj6fMFjB+D3q8MjyFRIuM3YTRBsb5ma09v6mvxLM/D9RWMM5NsDdYuguTfkzLmMA4J0nsMOP7irmlhDmM86G/twd4gaeOiZYwzsV0pfYQnmNkzaYwzsN0RRuh0JXHjbYwzoGr9Baed+YN5TA+HH0/QLii+KdaaxgfTPLRsw8vldcmQ0zj+suN+pT1ULkjY4lubQ0Trmi/q3kWpvH0p3XFdoJKi/S1vGH9dEW+1e/BxB4oXFGiY6U90/jYrFysKE/D6nX5jCfvgzrxAuPl9gL9jCv2VXk6r16W0PhpaJ9yRtvfXqCncSUslI9rwiU0Ptt3zu1pVMYrfY0XytPX+kX5jC/7TO5JKkHe27gyD0bjhnD5jCdbrhDPe/Lym7C/ccXO5s1L0hl/GT5QKfDeri8xwLgSEVekM75hTn5UU9U8n12h0K6qhhgnkc0483tTVY/BwZ2+nFYs50Z6eQ0YH8LEYeg8lrmRVKMr9z4uD7CN9/lSls14RnasZ+x15RlGnktbXe4zjS9CWrsGr5IZ31Bl1oTnylfUKI8u+Sx27jDrnlw59R/19MyoY0Nv13gs8GmyzEVxtyVbG3cpd5YC3+13wKWGeEisBtrRnjMvJc+2/HjcPvgMJYvw3DhtNKH9Ip4LaLEaXSqerRWJ1igPZYvw3DgtBKN/yOdovrzP4mZ7DaglykPyBz09Lm1weO2fq7xR+nvtT3Gvo+qWsUbltnwRzjIekA++UTpybVvc66pzHun5d/VfAW/w2yEixlPGJEtxKP+zT4+AfjwlsoUlrxIqf/xY5cQWLqXyvuPxD97x+Kl9oj+ndGDPTc8554I63Ogx52zpUi7KpYvyx+ZVOiL8TChblK+pGZN6fkmnrwLtzh0GXRF+RrbcITM//ln2DCeVPp5GfpwLdg3IPAYTdxosFfqnIO/GUQPi4thS5/TVyGf5znuV66cAxgfBseiwgK+WT36ipDPOvV7F4lmvYn4SXbt0xoWuycqHQFnzq1o+45zrDk2OdYf/jznjhnL5jItbW3upaWb1bw4JjSfvHEHOs378WoCoV4UkND46CNkjUan41KJcRuMP3Adkl9SKyPH8dkPGfUCj0eC9brXd+S173SYl9f38t+sTKfe65eMV7OcUjEuZDDJp7syHcR4G7Mu3sC//S3B7nj2hGcTCNRjnY/anT6bPU8maDYxzkmR9zhCiHAkH49wE+/YwV/0M52R9LUnbWXCqvaGfeQjj96BnK4tx3uGGfvYejN/LLN0ZllqVeD7Tc5vhTM8Hoi+OOy+0TD/yfcO23zdZ62nBMP4l6G6QLs9nMx9wNvO3A8ZFA+OigXHRwLhofjQH8DD+YPA3r0Tj4u+6AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwBD+AwNCT54/jLCxAAAAAElFTkSuQmCC"
          alt=""
        />
      </Link>

      {/* Search Boxx */}
      <div className="header_Search">
        <input
          type="text"
          placeholder="Search..."
          className="header__searchinput"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* Links */}
      <div className="header_nav">
        {/* link1 */}
        <Link to={!user && "/login"} className="linknone">
          <div onClick={login} className="header__option">
            <span className="headeroption__lineone">Hello: {user?.email}</span>
            <span className="headeroption__linetwo">
              {user ? "SIGN OUT" : "SIGN IN"}
            </span>
          </div>
        </Link>

        {/* link2 */}
        <Link to="/login" className="linknone">
          <div className="header__option">
            <span className="headeroption__lineone">Returns</span>
            <span className="headeroption__linetwo">Order</span>
          </div>
        </Link>
        {/* link3 */}
        <Link to="/login" className="linknone">
          <div className="header__option">
            <span className="headeroption__lineone">Your</span>
            <span className="headeroption__linetwo">Prime</span>
          </div>
        </Link>
        {/* link4 */}
        <Link to="/checkout" className="linknone">
          <div className="header__optionbasket">
            <ShoppingBasketIcon />

            <span className="headeroption__linetwo headerbasket__option">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
