import { useNavigate } from "react-router-dom";
import React from "react";
import { DatePicker, Space } from "antd";
import { useState } from "react";
import makeAnimated from "react-select/animated";
import { ChildModalCss, ModalDim } from "../style/ModalCss";
import { useEffect } from "react";
import { filterSort, postChildInfo } from "../api/axios";
import Select from "react-select";
import { getChild } from "../api/client";
import { addBaby } from "../reducers/userSlice";
import { useDispatch } from "react-redux";

const ChildModal = ({ setchildShowModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [childBirth, setChildBirth] = useState();
  const [isChildBirth, setIsChildBirth] = useState();
  const [tasteValue, setTasteValue] = useState("");
  const [selectAllergy, setSelectAllergy] = useState([]);

  const allergyArr = [
    { value: 1, label: "난류" },
    { value: 2, label: "우유" },
    { value: 3, label: "메밀" },
    { value: 4, label: "땅콩" },
    { value: 5, label: "대두" },
    { value: 6, label: "밀" },
    { value: 7, label: "잣" },
    { value: 8, label: "호두" },
    { value: 9, label: "게" },
    { value: 10, label: "새우" },
    { value: 11, label: "오징어" },
    { value: 12, label: "고등어" },
    { value: 13, label: "조개류" },
    { value: 14, label: "복숭아" },
    { value: 15, label: "토마토" },
    { value: 16, label: "닭고기" },
    { value: 17, label: "돼지고기" },
    { value: 18, label: "소고기" },
    { value: 19, label: "아황산류" },
    { value: 20, label: "생선류" },
  ];
  useEffect(() => {
    setSelectAllergy([]);
    allergyStrings = [];
  }, []);

  // // 정렬 기능 get
  // const sortData = async () => {
  //   const result = await filterSort(0, 0, allergyStrings);
  //   console.log(result);

  //   return result;
  // };

  // 알레르기 value값
  const newAllergyData = selectAllergy.map(selected => selected.value);
  let allergyStrings = newAllergyData.map(value => value.toString());

  const handleTaste = e => {
    setTasteValue(e.target.value);
  };

  // // 정렬 기능이 선택될 때만 데이터 불러오기
  // useEffect(() => {
  //   if (selectAllergy.length > 0) {
  //     sortData();
  //   }
  // }, [allergyStrings, selectAllergy]);

  const onChildBirthChange = (value, dateString) => {
    setChildBirth(dateString);
    if (dateString) {
      setIsChildBirth(true);
    } else if (!dateString) {
      setIsChildBirth(false);
    }
  };
  const handleAllergy = allergyArr => {
    setSelectAllergy(allergyArr);
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const handleChildStart = async () => {
    const allergyIdStr = selectAllergy.map(item => {
      let newItem = { allergyId: item.value, allergyName: item.label };
      return newItem;
    });
    const allergyIdNum = selectAllergy.map(item => item.value);
    console.log(allergyIdStr);
    // 추후 post 진행
    const childInfo = {
      childBirth: childBirth,
      prefer: tasteValue,
      allergyId: allergyIdNum.join(),
    };
    console.log(childInfo);
    // 아이데이터 get
    const fetchChild = await getChild();
    const babyIdGet = fetchChild.map(item => item.baByInfoVo.babyId);
    // redux update용
    const childInfoUpdate = {
      baByInfoVo: {
        babyId: babyIdGet,
        childBirth: childBirth,
        prefer: tasteValue,
      },
      babyAllergyList: allergyIdStr,
    };
    try {
      await postChildInfo(childInfo);
      dispatch(addBaby(childInfoUpdate));
      setchildShowModal(false);
      // navigate(`/main`);
    } catch (err) {
      alert("다시 시도해주세요");
    }
  };

  const handleSkip = () => {
    setchildShowModal(false);
    navigate("/main");
  };
  const animatedComponents = makeAnimated();
  return (
    <>
      <ModalDim />
      <ChildModalCss>
        <div className="login-modal">
          {/* <FontAwesomeIcon
          icon={faXmark}
          className="close-icon"
          onClick={() => setLoginShowModal(false)}
        /> */}
          <img
            className="modal-img"
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
          />
          <div className="modal-content">
            <h4>
              우리 아이 취향에 딱 맞는 이유식 !
              <br />
              <br />
              <h5>아이의 취향을 알려주세요 :)</h5>
              <br />
              <span>아이가 언제 태어났나요?</span>
              <Space direction="vertical">
                <DatePicker
                  onChange={onChildBirthChange}
                  placeholder="YYYY-MM-DD"
                  style={{
                    height: "30px",
                  }}
                />
              </Space>
              <br />
              <div className="search-wrap">
                <span>아이가 가지고 있는 알레르기가 있다면?</span>
                <div className="search-form">
                  <Select
                    className="allergy"
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    onChange={allergyArr => handleAllergy(allergyArr)}
                    value={selectAllergy}
                    isMulti
                    options={allergyArr}
                    placeholder="꼭 선택하지 않아도 돼요 :)"
                    isSearchable={false}
                  />
                </div>
              </div>
              <span>아이가 좋아하거나 싫어하는 건 뭔가요?</span>
              <input
                className="child-box"
                type="text"
                name="value"
                placeholder="없다면 쓰지 않아도 돼요:)"
                value={tasteValue}
                onChange={handleTaste}
              />
              <br />
            </h4>

            <div className="modal-buttons">
              <button onClick={handleChildStart}>시작하기</button>
              {/* <input type="button" value="시작하기" /> */}
              <button onClick={handleSkip}>건너뛰기</button>
              {/* <input type="button" value="건너뛰기" /> */}
              {/* <input
              type="button"
              value="건너뛰기"
              onClick={() => setLoginShowModal(!loginShowModal)}
            /> */}
            </div>
          </div>
        </div>
      </ChildModalCss>
    </>
  );
};

export default ChildModal;
