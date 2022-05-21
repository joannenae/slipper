// 예원 작업 5/11 ,5/18

import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { useMovetoPage } from "../../../../commons/hooks/movePage";
import { isClickedNumState } from "../../../../commons/store";
import ListPresenter from "./list.presenter";
import { kakaoAddress } from "../../../../commons/store/kakaounit";
export default function ListContainer() {
  const router = useRouter();
  const { onClickMoveToPage } = useMovetoPage();
  const [isMapActive, setIsMapActive] = useState(false);
  const [isClickedNum, setIsClickedNum] = useRecoilState(isClickedNumState);
  const [keyword, setKeyword] = useState(""); // Chan 검색기능 추가
  const [kakaoaaa] = useRecoilState(kakaoAddress);

  const onClickDetail = () => {
    setIsClickedNum((prev) => prev + 1);
    localStorage.setItem("isClickedNum", String(isClickedNum));

    // 결제권없는 사람일 경우
    if (isClickedNum >= 5) {
      alert("6개 이상의 게시물을 보시려면 결제가 필요합니다");
      router.push("/payment");
    }
    router.push("/boards/djdfkdf");
    // 결제권이 있는 사람일 경우는 만료일과 비교하여서 만료일일 경우 결제페이지로 이동하도록 유도한다
  };

  //chan 검색 기능 추가 22.05.19
  function onChangeKeyword(value: string) {
    setKeyword(value);
    // console.log(kakaoaaa.address_name);
    // console.log(kakaoaaa.phone);
    // console.log(kakaoaaa.group_code);
    // console.log(kakaoaaa.group_name);
    // console.log(kakaoaaa.place_url);
    // console.log(kakaoaaa.road_name);
  }
  return (
    <ListPresenter
      onClickDetail={onClickDetail}
      onChangeKeyword={onChangeKeyword}
      keyword={keyword} // chan
    />
  );
}
