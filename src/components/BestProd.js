import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Paging from "./Paging";

const BestProd = ({
  bestProductAll,
  mainImage,
  handleItemClick,
  handleShoppingClick,
  onPageChange,
  totalItemsCount,
  pageRangeDisplayed,
}) => {
  return (
    <>
      <div className="best-item">
        <h1 className="best-title">요즘, 많이 찾는 상품</h1>
      </div>
      <ul className="list-area">
        {bestProductAll.list?.map((item, productId) => (
          <div key={productId}>
            <li className="product-card">
              <img
                src={`/img/product/${item.productId}/${mainImage[productId]}`}
                alt="상품 이미지"
                className="product-image"
              />
              <span className="product-description">
                <span
                  className="item-numbering"
                  onClick={() => handleItemClick(item.productId)}
                />
                <FontAwesomeIcon
                  icon={faBasketShopping}
                  className="shopping-icon"
                  onClick={() => handleShoppingClick(item)}
                />
              </span>
              <div className="item-info">
                <h2>{item.name}</h2>
                <p>판매가 :{item.price.toLocaleString()}원</p>
              </div>
            </li>
          </div>
        ))}
      </ul>
      <Paging
        onPageChange={onPageChange}
        totalItemsCount={totalItemsCount}
        pageRangeDisplayed={pageRangeDisplayed}
      />
    </>
  );
};

export default BestProd;
