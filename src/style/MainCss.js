import styled from "@emotion/styled";
export const MainDiv = styled.div`
  .wrap {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background: #f9f6f1;
    min-width: 500px;
    overflow: hidden;

    .info {
      margin: 0 auto;
      max-width: 1400px;
      height: 100%;
      min-height: 700px;
      .banner-wrap {
        width: 100%;
        img {
          max-width: 1400px;
          width: 100%;
        }
      }
      .slick-wrap {
        padding: 30px 20px 100px;
      }
    }
    .best-item {
      display: flex;
      justify-content: space-between;
      text-align: center;
      margin: 50px 0;
      font-weight: 500;
      font-size: 32px;
      padding: 0px 20px;
      .best-title {
        text-align: center;
        font-weight: 500;
        font-size: 32px;
      }
      .confirm {
        background-color: #8eb111;
        color: #fff;
        cursor: pointer;
        border: none;
        padding: 10px 10px;
        border-radius: 4px;
      }
    }
    .list-area {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, auto));
      column-gap: 80px;
      row-gap: 40px;
      justify-content: center;
      padding-bottom: 50px;
      .product-card {
        position: relative;
        display: inline-block;
        cursor: pointer;
        &:hover .product-description {
          opacity: 0.5;
        }
        /* 이미지크기 조절하기 */
        .product-image {
          width: 250px;
          height: 250px;
        }
        .item-numbering {
          display: flex;
          justify-content: flex-start;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .product-description {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          width: 250px;
          height: 250px;
          background-color: rgba(0, 0, 0, 0.8);
          color: #fff;
          padding: 8px;
          opacity: 0;
          transition: opacity 0.3s ease;
          .shopping-icon {
            color: #fff;
            position: relative;
            left: 90px;
            bottom: 10%;
            font-size: x-large;
            &:hover {
              color: green;
            }
          }
        }
        .item-info {
          padding: 10px;
          margin-top: 15px;
          > h2 {
            font-size: 20px;
            margin-bottom: 7px;
            font-weight: 800;
          }
          > p {
            font-size: 15px;
            font-weight: 700;
          }
        }
      }
    }
  }
`;
export const SlickDiv = styled.div`
  .container-slick {
    position: relative;
    display: inline-block;
    margin: 0 auto;
    /* padding: 0px 40px 40px 40px; */
    padding: 30px 20px 100px;
    width: 400px;
    &:hover .product-description {
      opacity: 0.5;
    }
  }
  .title {
    margin-bottom: 70px;
    font-weight: 500;
    font-size: 30px;
  }
  img {
    /* background: #3498DB; */
    color: #fff;
    font-size: 36px;
    line-height: 350px;
    margin: 2%;
    padding: 2%;
    position: relative;
    text-align: center;
  }
  .slick-slide {
    margin: 0;
  }
  .slick-next:before,
  .slick-prev:before {
    color: #8eb111;
  }
  .center .slick-center img {
    color: #e67e22;
    opacity: 1;
    transform: scale(1.08);
  }
  .center img {
    transition: all 0.1s ease;
    width: 400px;
    height: 400px;
    cursor: pointer;
  }
  .center .slick-center span {
    color: #e67e22;
    opacity: 1;
    transform: scale(1.08);
  }
  .center span {
    display: block;
    transition: all 0.1s ease;
    text-align: center;
    margin: 20px 0;
    font-size: 20px;
  }
  @media screen and (max-width: 1300px) {
    .center img {
      width: 300px;
      height: 300px;
    }
  }
  @media screen and (max-width: 670px) {
    .center img {
      width: 200px;
      height: 200px;
    }
  }
`;
export const PaginationDiv = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 30px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-of-type {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #8eb111;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }
  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;
export const ItemDetailDiv = styled.div`
  background: #f9f6f1;
  min-width: 500px;
  .content-wrap {
    margin: 0 auto;
    padding: 200px 30px 0 30px;
    max-width: 1400px;
    height: 100%;
    overflow: hidden;
    .goods-wrap {
      display: flex;
      justify-content: space-around;
      padding-bottom: 13%;
      flex-wrap: wrap;
      gap: 30px;
      .goods-img {
        .item-img {
          width: 450px;
          height: 450px;
          margin-bottom: 50px;
        }
        .item-info {
          display: flex;
          gap: 15px;
          > img {
            width: 100px;
            height: 100px;
          }
        }
      }
    }
    .container-slick {
      margin-bottom: 100px;
    }
    .goods-details {
      //width는 나중에 수정하기
      width: 500px;
      bottom: 610px;
      .goods-title {
        font-size: 45px;
        font-weight: bold;
        margin-bottom: 40px;
      }
      .goods-info {
        font-size: 37px;
        font-weight: 500;
        line-height: 40px;
        margin-bottom: 25px;
      }
      .goods-price {
        padding: 20px 0;
        border-top: 1px inset rgb(230, 230, 230);
        font-size: 30px;
      }
      .order-title {
        padding-top: 60px;
        border-top: 3px inset #313133;
        font-size: 35px;
        display: flex;
        justify-content: space-between;
      }
      .order-button {
        display: flex;
        align-items: center;
        > button {
          width: 35px;
          height: 35px;
          font-size: 16px;
          text-align: center;
          border: none;
          background-color: #8eb111;
          color: #fff;
        }
        > input {
          width: 30px;
          height: 35px;
          font-size: 20px;
          color: #313133;
          text-align: center;
          border: none;
          outline: none;
        }
      }
      .order-total-price {
        padding-top: 20%;
        font-size: 25px;
        font-weight: 700;
        div {
          float: right;
          > strong {
            font-size: 40px;
            color: #8eb111;
          }
        }
      }
      .shopping-cart {
        margin-top: 15%;
        display: flex;
        justify-content: space-between;
        > button {
          font-weight: bold;
          width: 45%;
          height: 60px;
          /* padding: 15px 47px 15px 48px; */
          background: #fff;
          color: #313133;
          font-size: 18px;
          border: none;
          border-radius: 10px;
          line-height: 25px;
          border: 1px solid #d1d1d1;
          &:hover {
            background-color: #8eb111;
            color: white;
            border: none;
          }
        }
      }
    }
    .prod-dsc {
      min-width: 500px;
    }
    .product-tabs {
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      width: 100%;
      padding: 2% 10%;
      border-top: 1px solid #313133;
      border-bottom: 1px solid #e7e7e7;
    }
    .menu-info {
      display: block;
      width: 80%;
      margin: 0 auto;
      min-width: 500px;
      > h1 {
        margin-bottom: 50px;
      }
      > img {
        display: block;
        margin: 0 auto;
        padding-bottom: 50px;
        width: 100%;
      }
    }
    .container {
      display: grid;
      grid-template-columns: repeat(4, minmax(130px, auto));
      margin: 0 auto;
      padding: 20px 0;
      width: 100%;
      .item-title {
        border: 1px solid rgb(230, 230, 230);
        padding: 10px 0 10px 10px;
        background: #fff;
      }
      .item {
        border: 1px solid rgb(230, 230, 230);
        padding: 10px 0 10px 10px;
        background: #fff;
      }
    }
  }
`;
