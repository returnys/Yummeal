import styled from "@emotion/styled";

export const JoinContainer = styled.div`
  position: relative;
  /* height: 100vh; */
  background: #f9f6f1;
  @media screen and (max-width: 1024px) {
    font-size: 25px;
    /* font-weight: 500; */
    margin-bottom: 25px;
  }
  
`;
export const JoinArea = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 140px;
`;
export const JoinText = styled.div`
  padding-top: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  padding-bottom: 20px;
  cursor: pointer;
`;
export const JoinWrap = styled.div`
  position: relative;
  background: #fff;
  padding: 40px;
  border-radius: 20px;

  span {
    display: block;
    color: #000;
    font-size: 14px;
    font-weight: 500;
    /* width: 10%; */
  }
`;
export const JoinFormGroup = styled.div`
  font-size: 14px;
  /* width: 20px; */
  margin: 0 auto;
  margin-bottom: 10px;
  transform: translateX(25px);
  > div {
    margin-bottom: 13px;
  }
  i {
    color: #ff0000;
    font-size: 4px;
    margin-right: 5px;
    .fa-circle {
      transform: translateY(-4px);
    }
  }
  span {
    display: block;
    color: #000;
    font-size: 14px;
    font-weight: 500;
    /* width: 10%; */
  }
  input {
    padding: 3px 15px;
    background-color: #fff;
    border: 1px solid #ccc;
    font-size: 13px;
    border-radius: 10px;
    /* margin: 8px 0; */
    height: 45px;
    width: 90%;
  }
  /* .ant-picker .ant-picker-input > input:hover {
    border-color: #ccc;
  }
  .ant-picker .ant-picker-input > input:focus {
    border-color: #ccc;
  } */
  .postBox {
    input {
      margin: 3px;
      height: 35px;
    }
  }
  .success {
    color: darkseagreen;
  }
  .error {
    color: crimson;
  }
`;
export const JoinTitleWrapTop = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  margin-bottom: 25px;
  h3 {
    padding-bottom: 10px;
    font-size: 18px;
  }
  div {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    i {
      color: #ff0000;
      font-size: 6px;
      margin-right: 5px;
      span {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
`;
export const JoinId = styled.div`
  height: 75px;
  .idBox {
    display: flex;
    width: 90%;
    gap: 5%;
    button {
      border: none;
      background: transparent;
      cursor: pointer;
      background: #f9f6f1;
      border-radius: 10px;
      padding: 10px;
      font-size: 14px;
      font-weight: 500;
      font-family: "Pretendard", "SUITE", sans-serif;
    }
  }
  /* .success {
    color: darkolivegreen;
  }
  .error {
    color: indianred;
  } */
  /* position: relative;
  margin-bottom: 30px;
  .message {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -1px;
    position: absolute;
    bottom: -10px;
    left: 0;
  }
  &success {
    color: #8f8c8b;
  }
  &error {
    color: #ff2727;
  } */
`;
export const JoinNickNm = styled.div`
  height: 75px;
  .nmBox {
    display: flex;
    width: 90%;
    gap: 5%;
    button {
      border: none;
      background: transparent;
      cursor: pointer;
      background: #f9f6f1;
      border-radius: 10px;
      padding: 10px;
      font-size: 14px;
      font-weight: 500;
      font-family: "Pretendard", "SUITE", sans-serif;
    }
  }
  /* .success {
    color: darkseagreen;
  }
  .error {
    color: indianred;
  } */
`;
export const JoinPw = styled.div`
  height: 75px;
  /* display: flex;
  align-items: center; */
  /* .success {
    color: darkseagreen;
  }
  .error {
    color: indianred;
  } */
`;
export const JoinPwConfirm = styled.div`
  height: 75px;
  /* .success {
    color: darkseagreen;
  }
  .error {
    color: indianred;
  } */
`;
export const JoinBtn = styled.button`
  width: 100%;
  position: relative;
  margin-top: 20px;
  background: #f9f6f1;
  border: 1px solid #f9f6f1;
  border-radius: 10px;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  height: 50px;
  cursor: pointer;
  font-family: "Pretendard", "SUITE", sans-serif;
  & span {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    /* color: #000; */
    margin: 0 auto;
    text-align: center;
  }
`;
export const JoinPost = styled.div``;
