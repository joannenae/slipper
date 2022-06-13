import styled from "@emotion/styled";
import { Iprops } from "./list.types";

export const WrapperOut = styled.div`
  width: 100%;
  padding-top: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "HallymGothic-Regular";
  background-color: ${(props: Iprops) =>
    props.isActive ? "#27272C14" : "none"};
`;
export const WrapperLeft = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 50px;
  height: 110vh;
`;
export const EmphyLeft = styled.div`
  width: 60%;
  margin: 0 auto;
  height: 110vh;
  border-top: 1px solid gainsboro;
  margin-top: 35px;
  text-align: center;
  font-size: 2.5rem;
  font-style: italic;
`;
export const EmphyText = styled.div`
  margin-top: 50px;
`;

export const Infinite = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const WrapperTop = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0 0 0;
`;
export const WrapperContents = styled.div`
  width: 100%;
  margin: 0 auto;
  opacity: ${(props: Iprops) => (props.isActive ? "0.3" : "1")};
`;

export const WrapperBody = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
`;

export const WrapperMiddle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4% 0% 4% 0%;
  margin: 0 auto;
`;
export const WrapperWrite = styled.div`
  width: 10%;
  /* display: flex;
  justify-content: flex-end;
  align-items: center; */
`;

export const WrapperArray = styled.div`
  width: 77%;
  display: flex;
  justify-content: flex-start;
`;

export const Array = styled.div`
  width: 7%;
  height: 30px;
  line-height: 2;
  border-radius: 10px;
  text-align: center;
  font-size: 1.6rem;
  color: #008af6;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  text-decoration: ${(props: Iprops) =>
    props.array === "recent" && "underline"};
`;
export const Pick = styled.div`
  width: 7%;
  height: 30px;
  line-height: 2;
  border-radius: 10px;
  text-align: center;
  font-size: 1.6rem;
  margin-left: 10px;
  color: #008af6;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  text-decoration: ${(props: Iprops) => props.array === "like" && "underline"};
`;

export const WrapperBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export const Button = styled.div`
  width: 95%;
  height: 35px;
  text-align: center;
  line-height: 2;
  color: white;
  border-radius: 10px;
  font-size: 1.7rem;
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
  background-color: #008af6;
`;
export const WrapperRight = styled.div`
  width: 100%;
  height: 110vh;
  margin: 0 auto;
  padding-right: 6%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
`;

// 각각의 글 상세로 들어가는것 수정
export const UserContents = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  cursor: pointer;
  box-shadow: 6px 4px 6px -5px gainsboro;
  border-radius: 10px;
  margin: 0 auto 20px auto;
  :hover {
    box-shadow: 5px 5px 15px 5px #e1e1e1;
  }
`;
export const ImageWrap = styled.div`
  width: 40%;
  height: 160px;
`;

export const ImageLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px 0 0 10px;
  position: relative;
`;
export const UserWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
`;
export const UserDate = styled.div`
  width: 10%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;
export const LikeWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
export const Marker = styled.img`
  width: 90%;
  z-index: 2;
`;

export const Count = styled.div`
  font-size: 1.2rem;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
  position: relative;
`;
export const ListTitleWrap = styled.div`
  padding: 3%;
`;

export const ListTitle = styled.div`
  font-size: 2rem;
  font-weight: 500;
  padding-bottom: 2%;
`;
export const ListHometown = styled.div`
  color: #7b7e7e;
  font-size: 1rem;
  padding-bottom: 2%;
`;
export const ListShopName = styled.div`
  color: #2a2f2f;
  font-size: 1.5rem;
`;

// hover

// export const Gallery = styled.div`
//   width: 30%;
//   height: 250px;
//   overflow: hidden;

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 10%;
//   margin-bottom: 20px;
// `;
// export const A = styled(Gallery)`
//   display: block; /* 영역적용위해 사용 */
//   width: 100%;
//   height: 100%;
//   position: relative; /* absolute의 기본기준은 body로 처리 - 현재 요소로 기준변경 */
// `;

// export const Figcaption = styled(Gallery)`
//   width: 100%;
//   /* height: 100%; */
//   background-color: rgba(0, 0, 0, 0.7);

//   /* display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center; */

//   position: absolute; /* 이미지와 겹치게 처리 */
//   top: 0;
//   left: 0;

//   color: #fff;
//   text-align: center;
//   line-height: 200px;

//   opacity: 0; /* 처음엔 안보이고 */

//   transition: 0.3s;
//   :hover {
//     opacity: 1;
//   }
// `;
// export const Img = styled.img`
//   width: 100%;
// `;
// export const Icon = styled.div`
//   position: absolute;
//   top: -70px;
//   right: 10px;
//   height: 20px;
// `;
// export const Categoty = styled.div`
//   position: absolute;
//   top: -50px;
// `;
// export const Title = styled.div`
//   position: absolute;
//   top: 10px;
// `;

// 헤더추가
export const WrapperOutH = styled.div`
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 9px 11px 0px #f2f2f2; ;
`;
export const WrapperBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 910%;
`;
// 로고 박스
export const WrapperInLogo = styled.div`
  width: 150px;
  margin-left: 80px;
  cursor: pointer;
  :hover {
    font-size: 1.4rem;
  }
`;

// 데이터 및 햄버거 박스
export const WrapperIn = styled.div`
  /* width: 20%; */
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px;
  font-family: "HallymGothic-Regular";
`;
//#008af6;

export const WrapUser = styled.div`
  width: 380px;
  display: flex;
  align-items: center;
`;
// 데이터
export const WrapperInUser = styled.div`
  text-align: center;
  color: #008af6;
  font-size: 2.5rem;
  font-family: "HallymGothic-Regular";
  font-weight: bold;
  margin: 1%;
  letter-spacing: 5px;
`;

export const WrapperInMy = styled.div`
  text-align: center;
  color: #008af6;
  font-size: 1.7rem;
  font-family: "HallymGothic-Regular";
  letter-spacing: 2px;
`;
// 햄버거
export const WrapperInHam = styled.div`
  margin: 0 auto;
`;

// 해리테스트
export const TestWrapper = styled.div`
  width: 800px;
  display: flex;
  text-align: center;
`;
export const Test = styled.div`
  width: 33.3%;
  font-size: 1.6rem;
  cursor: pointer;
  :hover {
    color: #008af6;
  }
`;
export const LogOut = styled.div`
  width: 115px;
  height: 30px;
  line-height: 2.1;
  background-color: #008af6;
  color: white;
  border-radius: 10px;
  font-size: 1.4rem;
  text-align: center;
  margin-left: 20px;
  cursor: pointer;
`;
export const LogIn = styled.div`
  width: 115px;
  height: 30px;
  line-height: 2.1;
  background-color: #008af6;
  color: white;
  border-radius: 10px;
  font-size: 1.4rem;
  text-align: center;
  margin-right: 70px;
  cursor: pointer;
`;
