// 해리 작업 5/13
import MyPagePresenter from "./mypage.presenter";
import { useState } from "react";

export default function MyPageContainer() {
  const [mypageRight, setMypageRight] = useState("");

  const onClickMyinfo = () => {
    setMypageRight("myinformation");
  };
  const onClickMyboards = () => {
    setMypageRight("myboards");
  };
  const onClickMypicks = () => {
    setMypageRight("mypicks");
  };
  const onClickPayment = () => {
    setMypageRight("payment");
  };
  const onClickMypaids = () => {
    setMypageRight("mypaids");
  };

  return (
    <>
      <MyPagePresenter
        mypageRight={mypageRight}
        onClickMyinfo={onClickMyinfo}
        onClickMyboards={onClickMyboards}
        onClickMypicks={onClickMypicks}
        onClickPayment={onClickPayment}
        onClickMypaids={onClickMypaids}
      />
    </>
  );
}
