import styled from "@emotion/styled";

export const JoinContainer = styled.div`
  position: relative;
  height: 100vh;
  background: #f9f6f1;
`;
export const JoinArea = styled.div`
  width: 600px;
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
  i {
    color: red;
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
    margin: 15px 0;
    height: 45px;
    width: 90%;
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
      color: red;
      font-size: 6px;
      margin-right: 5px;
      span {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
`;
export const JoinId = styled.div``;
export const JoinPw = styled.div`
  /* display: flex;
  align-items: center; */
`;
export const JoinPwConfirm = styled.div``;
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