import axios from "axios";

// 장바구니 데이터 get
export const getCart = async () => {
  try {
    const res = await axios.get("/api/orderbasket?iuser=1");
    const result = res.data;
    return result;
  } catch (error) {
    [
      {
        cartId: 16,
        title: "덮밥",
        name: "연어덮밥",
        count: 20,
        price: 9000,
        thumbnail: "main4.png",
        createdAt: "2023-08-03 17:47:32",
      },
      {
        cartId: 15,
        title: "닭볶음탕",
        name: "닭볶음탕",
        count: 15,
        price: 15000,
        thumbnail: "main3.png",
        createdAt: "2023-08-03 17:47:19",
      },
      {
        cartId: 14,
        title: "과일",
        name: "사과",
        count: 10,
        price: 20000,
        thumbnail: "main2.pic",
        createdAt: "2023-08-03 17:47:14",
      },
      {
        cartId: 13,
        title: "파스타",
        name: "닭고기파스타",
        count: 5,
        price: 0,
        thumbnail: "main1.pic",
        createdAt: "2023-08-03 17:47:09",
      },
      {
        cartId: 4,
        title: "과일",
        name: "사과",
        count: 3,
        price: 20000,
        thumbnail: "main2.pic",
        createdAt: "2023-07-25 09:27:42",
      },
    ];
  }
};

// 장바구니 업카운트 patch
export const upPatch = async (cartId, newCount) => {
  try {
    const res = await axios.patch(`/api/orderbasket/plus?cartId=${cartId}`, {
      count: newCount,
    });
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// 장바구니 다운카운트 patch
export const downPatch = async (cartId, newCount) => {
  try {
    const res = await axios.patch(`/api/orderbasket/minus?cartId=${cartId}`, {
      count: newCount,
    });
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// 장바구니 목록삭제 delete
export const cartDelete = async cartId => {
  try {
    const res = await axios.delete(`/api/orderbasket?cartId=${cartId}`);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// 결제내역 데이터 get
export const getOrderEnd = async () => {
  try {
    const res = await axios.get(
      "/api/mypage/orderlist/detail?iuser=1&orderId=4",
    );
    const result = res.data;
    return result;
  } catch (error) {
    [
      {
        orderId: 4,
        reciever: "서영기",
        request: "요청사항없음",
        createdAt: "2023-08-02 15:28:20",
        title: "미음",
        name: "고구마미음",
        count: "3",
        price: 3300,
        shipment: "1",
      },
      {
        orderId: 4,
        reciever: "서영기",
        request: "요청사항없음",
        createdAt: "2023-08-02 15:28:20",
        title: "미음",
        name: "배미음-(초기1단계)",
        count: "1",
        price: 4500,
        shipment: "1",
      },
    ];
  }
};