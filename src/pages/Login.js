import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContainer, SnsLoginWrap } from "../style/LoginCss";
import { fetchLogin, getChild, getUser } from "../api/client";
import { useDispatch } from "react-redux";
import { loginReducer } from "../reducers/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  // const [showModal, setShowModal] = useState(false);

  const handleSignUPClick = () => {
    navigate("/signup");
  };

  const handleLoginClick = async () => {
    const login = await fetchLogin(id, pw);
    console.log("로그인 시 넘어오는 : ", login);
    if (!login) {
      alert("로그인에 실패 하였습니다.");
    }
    if (login) {
      // if (login.success) {
      const fetchUser = await getUser();
      const fetchChild = await getChild();
      const userData = { ...fetchUser, baby: fetchChild };
      // dispatch(loginReducer(fetchUser, fetchChild));
      dispatch(loginReducer(userData));
      console.log("아이 정보 get? ", fetchChild);
      navigate("/main");
      // }
      // setShowModal(true);
    }
  };
  const handleSubmit = event => {
    event.preventDefault(); // 기본 엔터 동작 방지
    if (event.key === "Enter") {
      handleLoginClick();
    }
  };
  const handleKakaoClick = () => {
    window.open(
      `/oauth2/authorization/kakao?redirect_uri=http://${window.location.host}/oauth/redirect`,
      "pop",
      "width=500,height=500,left=200,top=300,location=no",
      "popup=true",
    );
    const interval = setInterval(async () => {
      // console.log("셋인터벌", localStorage.getItem("accessToken"));
      if (localStorage.getItem("accessToken")) {
        const fetchUser = await getUser();
        const fetchChild = await getChild();
        const userData = { ...fetchUser, baby: fetchChild };
        dispatch(loginReducer(userData));
        console.log(userData);
        if (!fetchUser.zipcode) {
          alert("필수 정보를 입력해주세요 !");
          navigate("/mypage", { state: { kakao: "kakao" } });
          clearInterval(interval);
        } else {
          navigate("/main");
          clearInterval(interval);
        }
      }
    }, 1000);
  };

  const handleNaverClick = () => {
    window.open(
      `/oauth2/authorization/naver?redirect_uri=http:///${window.location.host}/oauth/redirect`,
      "pop",
      "width=500,height=500,left=200,top=300,location=no",
      "popup=true",
    );

    const interval = setInterval(async () => {
      console.log("셋인터벌", localStorage.getItem("accessToken"));
      if (localStorage.getItem("accessToken")) {
        const fetchUser = await getUser();
        const fetchChild = await getChild();
        const userData = { ...fetchUser, baby: fetchChild };
        dispatch(loginReducer(userData));
        console.log(userData);
        if (!fetchUser.zipcode) {
          alert("필수 정보를 입력해주세요 !");
          navigate("/mypage", { state: { naver: "naver" } });
          clearInterval(interval);
        } else {
          navigate("/main");
          clearInterval(interval);
        }
      }
    }, 1000);
  };

  // useEffect(() => {
  //   const isFirstLogin = sessionStorage.getItem("isFirstLogin");
  //   if (isFirstLogin === "true") {
  //     setShowModal(true);
  //     sessionStorage.setItem("isFirstLogin", "false");
  //   }
  // });
  return (
    <LoginContainer>
      <form onSubmit={handleSubmit}>
        <div className="login-area">
          <div className="login-text">로그인</div>
          <div className="login-wrap">
            <div className="login-form">
              <div className="id-group">
                <span style={{ fontSize: "16px", fontWeight: "500" }}>
                  아이디
                </span>
                <input
                  type="text"
                  placeholder="아이디를 입력하세요"
                  value={id}
                  onChange={e => setId(e.target.value)}
                  maxLength={100}
                  style={{ height: "50px" }}
                />
              </div>
              <div className="pw-group">
                <span style={{ fontSize: "16px", fontWeight: "500" }}>
                  비밀번호
                </span>
                <input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  value={pw}
                  maxLength={100}
                  style={{ height: "50px" }}
                  onChange={e => setPw(e.target.value)}
                />
              </div>
              <button
                className="login-btn"
                style={{ height: "50px", fontSize: "15px", fontWeight: "500" }}
                onClick={handleLoginClick}
                tabIndex={0}
              >
                로그인
              </button>
              {/* {showModal === true ? (
                <ChildModal setShowModal={setShowModal} />
              ) : null} */}
              <ul className="login-find">
                <li>아이디 찾기</li>
                <li>비밀번호 찾기</li>
              </ul>
            </div>
            <SnsLoginWrap>
              {/* <button className="kakao-login">
                <FontAwesomeIcon icon={faComment} style={{ padding: "10px" }} />
                카카오로 시작하기
              </button> */}
              {/* 카카오 샘플 */}
              <button className="kakao-login" onClick={handleKakaoClick}>
                <FontAwesomeIcon
                  icon={faComment}
                  style={{ padding: "10px", fontSize: "20px" }}
                />
                카카오로 시작하기
              </button>
              <button className="naver-login" onClick={handleNaverClick}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/naver.png`}
                  alt="logo"
                  style={{ padding: "5px" }}
                />
                네이버로 시작하기
              </button>
            </SnsLoginWrap>
            <div>
              <ul
                style={{
                  textAlign: "center",
                  fontSize: "18pX",
                  fontWeight: "500",
                  color: "#ccc",
                }}
              >
                <li
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={handleSignUPClick}
                >
                  회원가입
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </LoginContainer>
  );
};

export default Login;
