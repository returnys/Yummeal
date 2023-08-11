import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  iuser: null,
  email: "",
  name: "",
  birthday: "",
  mobileNb: "",
  zipcode: "",
  address: "",
  addressDetail: "",
  nickNm: "",
  point: 0,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      (state.iuser = action.payload.iuser),
        (state.email = action.payload.email),
        (state.name = action.payload.name),
        (state.mobileNb = action.payload.mobileNb),
        (state.zipcode = action.payload.zipcode),
        (state.address = action.payload.address),
        (state.addressDetail = action.payload.addressDetail),
        (state.nickNm = action.payload.nickNm),
        (state.point = action.payload.point),
        (state.birthday = action.payload.birthday);
      // Object.assign(state, action.payload);
    },
    logoutReducer: state => {
      // state = initialState;
      Object.assign(state, initialState);
      console.log("로그아웃 디스패치", state);
    },
  },
});

export default userSlice;
export const { loginReducer, logoutReducer } = userSlice.actions;