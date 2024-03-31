import React from "react";
import { Link } from "react-router-dom";
import MyIcon from "../helper/MyIcon";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../Store/store";
import { increment } from "../Store/Features/UI/uiSlice";
import Logout from "./AuthTools/Logout";
import IsAuthenticated from "./AuthTools/isAuthenticated";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "./Logo";

function Header() {
  const ui = useSelector((state: RootState) => state.uiSlice);
  const product = useSelector((state: RootState) => state.productSlice);
  const dispatch = useDispatch<AppDispatch>();
  console.log(product.cart);

  return (
    <header className="sticky top-0 z-50">
      <div className="h-12 bg-black text-white flex items-center justify-center  ">
        <div className="container h-full flex items-center justify-between ">
          <div />
          <div className="middle text-sm text-[#FAFAFA]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            ShopNow
          </div>
          <div className="right">English</div>
        </div>
      </div>
      <div className="pt-9 pb-4 border-b border-black flex items-end bg-white ">
        <div className="container   flex items-center justify-between">
          <div className="logo font-bold text-2xl">
            <Link to="/">
              <Logo />
              {ui.value} {IsAuthenticated() ? ":::auth:::" : "~NOT~"}
            </Link>
          </div>
          <nav className="flex items-center gap-12 justify-center text-black ">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users/asfd">Users</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
            {IsAuthenticated() ? (
              <>
                <button type="button" onClick={Logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </>
            )}
          </nav>
          <div className="search bg-[#F5F5F5] rounded-[4px] relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="What are you looking for?"
              className="text-xs leading-6 py-[7px] px-5 pr-14 bg-transparent outline-none  "
            />
            <button
              type="button"
              className="absolute top-[50%] right-[12px] translate-y-[-50%]"
              onClick={() => dispatch(increment())}
            >
              <SearchIcon />
            </button>
          </div>
          <Link to="/cart" className="relative">
            <ShoppingCartIcon />
            {product.cart?.length > 0 && (
              <span className="absolute top-[-15px] right-[-5px] text-[#DB4444] text-xs bg-red-200 h-[18px] w-[18px] rounded-full flex items-center justify-center">
                {product.cart?.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;