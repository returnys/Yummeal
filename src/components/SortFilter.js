import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { filterSort } from "../api/axios";
import { getChild } from "../api/client";

// 정렬용 배열
const sortArr = [
  { value: 0, label: "판매량 많은 순" },
  { value: 1, label: "판매량 적은 순" },
  { value: 2, label: "가격 높은 순" },
  { value: 3, label: "가격 낮은 순" },
];
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

const SortFilter = ({ product, setSearchData }) => {
  const [selectSort, setSelectSort] = useState("");
  const [selectAllergy, setSelectAllergy] = useState([]);
  const [childData, setChildData] = useState([]);
  const [selectChild, setSelectChild] = useState(null);
  const animatedComponents = makeAnimated();
  const isLoggedIn = sessionStorage.getItem("accessToken") ? true : false;

  // 아이 정보 get
  const childInfo = async () => {
    const res = await getChild();
    setChildData(res);
  };

  console.log(childData);

  useEffect(() => {
    setSelectSort("");
    setSelectAllergy([]);
    allergyStrings = [];
    if (isLoggedIn) {
      childInfo();
    }
  }, [product]);

  // 정렬 기능 get
  const sortData = async () => {
    const result = await filterSort(product, selectSort.value, allergyStrings);
    console.log(result);
    setSearchData(result);
    return result;
  };

  // 알레르기 value값
  const newAllergyData = selectAllergy.map(selected => selected.value);
  let allergyStrings = newAllergyData.map(value => value.toString());
  // console.log("알레르기 밸류 담기냐!?!?!?!", allergyStrings);

  // 정렬 기능이 선택될 때만 데이터 불러오기
  useEffect(() => {
    if (selectSort !== "") {
      sortData();
    } else if (selectAllergy.length > 0) {
      sortData();
    }
  }, [selectSort, selectAllergy]);

  const handleSortChange = sortArr => {
    setSelectSort(sortArr);
  };

  const handleAllergy = allergyArr => {
    setSelectAllergy(allergyArr);
  };

  const handleChildChange = selectChild => {
    setSelectChild(selectChild);
    const selectChildData = childData.find(
      child => child.baByInfoVo.babyId === selectChild.value,
    );
    const selectChildAllergies = selectChildData
      ? selectChildData.babyAllergyList.map(item => ({
          value: item.allergyId,
          label: item.allergyName,
        }))
      : [];
    setSelectAllergy(selectChildAllergies);
  };

  const handleReset = async () => {
    setSelectChild(null);
    setSelectSort("");
    setSelectAllergy([]);
    allergyStrings = [];
    await sortData();
  };

  return (
    <div className="searchbox">
      <h2>서치필터</h2>
      {isLoggedIn ? (
        <>
        <div className="search-child">
            <h3>아이선택</h3>
            <Select
              className="child"
              options={childData?.map((child, idx) => ({
                value: child.baByInfoVo.babyId,
                label: `아이${idx + 1}`,
              }))}
              onChange={selectChild => handleChildChange(selectChild)}
              placeholder="옵션을 선택하세요"
              value={selectChild}
              isSearchable={false}
            />
        </div>
          <button onClick={handleReset}>초기화</button>
          </>
      ) : null}
      <div className="search-sort">
        <h3>정렬 기능</h3>
        <Select
          className="sortwrap"
          options={sortArr}
          onChange={sortArr => handleSortChange(sortArr)}
          placeholder="옵션을 선택하세요"
          value={selectSort}
          isSearchable={false}
        />
      </div>
      <div className="search-form">
        <h3>알레르기</h3>
        <Select
          className="allergy"
          closeMenuOnSelect={false}
          components={animatedComponents}
          onChange={allergyArr => handleAllergy(allergyArr)}
          value={selectAllergy}
          isMulti
          options={allergyArr}
          placeholder="알러지를 선택하면 제외한 결과가 나타납니다"
          isSearchable={false}
        />
      </div>
    </div>
  );
};

export default SortFilter;
