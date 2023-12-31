import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../api/client";
import CartItem from "../components/CartItem";
import { Cart, NotList, Payment, ShopWrap } from "../style/ShopCartCss";

const ShopCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [basketData, setBasketData] = useState([]);
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("accessToken") ? true : false;

  // 회원 장바구니 데이터 불러오기
  const cartList = async () => {
    const result = await getCart();
    setCartItems(result);
  };

  // 비회원 장바구니 데이터 불러오기
  const guestBasketList = () => {
    const getBasket = localStorage.getItem("baskets");
    const basketArray = JSON.parse(getBasket);
    setBasketData(basketArray || []);
  };

  useEffect(() => {
    // 회원 장바구니 데이터
    cartList();
    // 비회원 장바구니 데이터
    guestBasketList();
  }, []);

  const handleGoOrder = () => {
    navigate("/order");
  };

  const handleGoShoping = () => {
    navigate("/main");
  };

  // 총 상품금액(로그인)
  let prodTotalPrice;
  if (cartItems) {
    prodTotalPrice = cartItems?.reduce((item, idx) => {
      const productPrice = idx.price * idx.count;
      return item + productPrice;
    }, 0);
  }

  // 총 상품금액(비로그인)
  let basketsTotalPrice;
  if (basketData !== null) {
    basketsTotalPrice = basketData.reduce((item, idx) => {
      const prodPrice = parseFloat(idx.price) * idx.count;
      return item + prodPrice;
    }, 0);
  }

  // 상품금액 조건부 렌더링
  let totalPriceToShow;
  if (isLoggedIn) {
    const parsedBaskets = JSON.parse(localStorage.getItem("baskets"));
    if (parsedBaskets && parsedBaskets.length > 0) {
      totalPriceToShow = basketsTotalPrice?.toLocaleString();
    } else {
      totalPriceToShow = prodTotalPrice?.toLocaleString();
    }
  } else {
    totalPriceToShow = basketsTotalPrice?.toLocaleString();
  }

  return (
    <ShopWrap>
      {cartItems?.length > 0 || basketData.length > 0 ? (
        <div className="wrap">
          <Cart>
            <h2>장바구니</h2>
            <hr />
            <CartItem
              cartItems={cartItems}
              setCartItems={setCartItems}
              basketData={basketData}
              setBasketData={setBasketData}
              isLoggedIn={isLoggedIn}
            />
          </Cart>
          <Payment>
            <h2>결제 예정 금액</h2>
            <div className="paywrap">
              <div className="price">
                <p>상품금액</p>
                <p>{totalPriceToShow}원</p>
              </div>
            </div>
            <div className="order_btn" onClick={handleGoOrder}>
              주문하기
            </div>
          </Payment>
        </div>
      ) : (
        <NotList>
          <div className="wrap">
            <div className="icon-box">
              <i>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </i>
            </div>
            <div className="text-box">
              <p>장바구니에 담긴 상품이 없습니다.</p>
              <button onClick={handleGoShoping}>상품 담으러 가기</button>
            </div>
          </div>
        </NotList>
      )}
    </ShopWrap>
  );
};

export default ShopCart;
