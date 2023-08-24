import styled from "@emotion/styled";

export const CartItemModalCss = styled.div`
  .cart-modal {
    display: flex;
    width: 400px;
    height: 300px;
    background-color: white;
    border: 1px solid #8eb111;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    margin: auto;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 5px;

    .close-icon {
      width: 100%;
      padding-top: 20px;
      margin-left: 32rem;
      font-size: 2rem;
      &:hover {
        color: rgba(255, 0, 0, 0.5);
      }
    }
    .modal-content {
      .cart-icon {
        width: 100%;
        font-size: 5rem;
        color: #8eb111;
      }
      h3 {
        width: 100%;
        padding-top: 20px;
        text-align: center;
        font-weight: 700;
        font-size: 2rem;
      }
    }
    .modal-buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px 30px 20px;
      gap: 10px;
      > button {
        width: 45%;
        height: 3.5rem;
        line-height: 25px;
        background-color: white;
        border-radius: 7px;
        border: 1px solid #d1d1d1;
        color: #3f3f3f;
        &:hover {
          background-color: #8eb111;
          color: white;
          border: none;
        }
      }
    }
  }
`;
export const LoginModalCss = styled.div`
  .login-modal {
    z-index: 999999;
    display: flex;
    justify-content: center;
    width: 500px;
    height: 500px;
    background-color: white;
    border: 1px solid #8eb111;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    margin: auto;
    flex-wrap: wrap;
    box-sizing: border-box;
    border-radius: 5px;
    .close-icon {
      width: 100%;
      padding-top: 15px;
      margin-left: 55rem;
      font-size: 2rem;
      &:hover {
        color: rgba(255, 0, 0, 0.5);
      }
    }
    .modal-img {
      width: 50%;
    }
    .modal-content {
      h4 {
        width: 100%;
        text-align: center;
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 25px;
      }
      span {
        font-size: 16px;
        color: #8eb111;
      }
    }
    .modal-buttons {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* padding: 0 20px 10px 20px; */
      padding: 30px 20px;
      gap: 20px;
      button {
        cursor: pointer;
        font-family: "Pretendard", "SUITE", sans-serif;
        width: 150px;
        height: 3.5rem;
        line-height: 25px;
        background-color: white;
        border-radius: 7px;
        border: 1px solid #d1d1d1;
        color: #3f3f3f;
        font-weight: 700;
        &:hover {
          background-color: #8eb111;
          color: white;
          border: none;
        }
      }
    }
  }
`;
