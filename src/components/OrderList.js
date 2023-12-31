import React, { useEffect, useState } from "react";
import { OrderListContainer } from "../style/OrderListCss";
import OrderNumber from "./OrderNumber";
import { getOrderList } from "../api/client";

const OrderList = () => {
  const button = [
    { value: 1, date: "1개월" },
    { value: 6, date: "6개월" },
    { value: 12, date: "1년" },
    { value: 0, date: "전체" },
  ];
  const [active, setActive] = useState(1);
  // orderNumber 컴포넌트 더미데이터
  const [orderList, setOrderList] = useState([]);
  // const [filteredOrderList, setFilteredOrderList] = useState(orderList);
  const handleDateClick = async value => {
    setActive(value);
    // filterDate(value);
    const data = await getOrderList(value);
    setOrderList(data);
  };
  // const filterDate = active => {
  //   const now = new Date();
  //   const filteredOrders = orderList.filter(order => {
  //     const orderDate = new Date(order.date);
  //     switch (active) {
  //       case 1:
  //         return (now - orderDate) / (1000 * 60 * 60 * 24 * 30) <= 1; // 1개월
  //       case 3:
  //         return (now - orderDate) / (1000 * 60 * 60 * 24 * 30) <= 6; // 6개월
  //       case 6:
  //         return (now - orderDate) / (1000 * 60 * 60 * 24 * 365) <= 1; // 1년
  //       case 0:
  //         return true; // 전체
  //       default:
  //         return (now - orderDate) / (1000 * 60 * 60 * 24 * 30) <= 1;
  //     }
  //   });
  //   setFilteredOrderList(filteredOrders);
  // };
  useEffect(() => {
    handleDateClick(1);
  }, []);
  console.log("오더리스트 경로 수정해야함", orderList)
  return (
    <OrderListContainer>
      <div className="top">
        <h3>주문 배송</h3>
        <span>
          <strong>{orderList.length}</strong>
        </span>
        <span>개</span>
      </div>
      <div className="button-wrap">
        {button.map((item, idx) => (
          <span
            key={idx}
            className={active === item.value ? "active" : ""}
            value={active}
            onClick={() => handleDateClick(item.value)}
          >
            {item.date}
          </span>
        ))}
      </div>
      {orderList.length === 0 ? (
        <div className="text-wrap">
          <span className="">기간내 주문한 상품이 없습니다.</span>
        </div>
      ) : (
        orderList.map((item, idx) => <OrderNumber key={idx} item={item} />)
      )}
    </OrderListContainer>
  );
};

export default OrderList;
