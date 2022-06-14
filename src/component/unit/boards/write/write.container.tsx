import WritePresenter from "./write.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./write.query";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { kakaoAddress } from "../../../../commons/store/kakaounit";
import { IWriteContainer } from "./write.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import { accessTokenState } from "../../../../commons/store";

export default function WriteContainer(props: IWriteContainer) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  useEffect(() => {
    if (!accessToken) {
      Modal.error({ content: "로그인이 필요한 서비스 입니다" });
      router.push("/login");
    }
  });

  const [activeStep, setActiveStep] = useState("first");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dateError, setDateError] = useState("");

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const [score, setScore] = useState(0);
  const [scoreError, setScoreError] = useState("");
  const [resetScore, setResetScore] = useState(false);

  const [contents, setContents] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [mapStatus, setMapStatus] = useState(false);
  const [address, setAddress] = useRecoilState(kakaoAddress);
  const [mapError, setMapError] = useState("");

  const [fileUrls, setFileUrls] = useState(["", "", "", ""]);

  const [isButtonActive, setIsButtonActive] = useState(false);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);

  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const onClickFirstNext = () => {
    if (!props.isEdit) {
      if (startDate === "" || endDate === "") {
        setDateError("거주 기간을 입력해주세요.");
      }
      if (title === "") {
        setTitleError("제목을 입력해주세요.");
      }
      if (score === 0) {
        setScoreError("만족도를 선택해주세요.");
      }
      if (contents === "") {
        setContentsError("내용을 입력해주세요.");
      }
      if (
        startDate !== "" &&
        endDate !== "" &&
        title !== "" &&
        score !== 0 &&
        contents !== ""
      ) {
        setActiveStep("second");
        setMapStatus(true);
      }
    } else {
      if (
        props.data?.fetchBoard.startDate !== "" &&
        props.data?.fetchBoard.endDate !== "" &&
        props.data?.fetchBoard.title !== "" &&
        props.data?.fetchBoard.score !== 0 &&
        props.data?.fetchBoard.contents !== ""
      ) {
        setActiveStep("second");
        setMapStatus(true);
      }
    }
  };

  const onClickSecondPrev = () => {
    setActiveStep("first");
  };

  const onClickSecondNext = () => {
    if (!props.isEdit) {
      if (address.address_name === "") {
        setMapError("가게 정보를 검색해주세요.");
      } else {
        setMapError("");
        setActiveStep("third");
      }
    } else {
      if (props.data?.fetchBoard.address) {
        setActiveStep("third");
        setMapError("");
      } else {
        setMapError("가게 정보를 검색해주세요.");
      }
    }
  };

  const onClickThirdPrev = () => {
    setActiveStep("second");
  };

  const onChangeRange = (date: any, dateString: any) => {
    setStartDate(dateString[0]);
    setEndDate(dateString[1]);
    setDateError("");
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  };

  const onClickHappy = () => {
    setScore(1);
    setScoreError("");
  };
  const onClickUhm = () => {
    setScore(2);
    setScoreError("");
  };
  const onClickSad = () => {
    setScore(3);
    setScoreError("");
  };

  const onClickResetScore = () => {
    setResetScore(true);
  };

  const onChangeContents = (value: string) => {
    setContents(value === "<p><br></p>" ? "" : value);
    if (value !== "") {
      setContentsError("");
    }
    if (
      startDate !== "" &&
      endDate !== "" &&
      score !== 0 &&
      title !== "" &&
      contents !== ""
    ) {
      setIsButtonActive(true);
    }
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl[0];
    setFileUrls(newFileUrls);
  };

  console.log(fileUrls, "dfd");

  const onClickWriteBoard = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            startDate,
            endDate,
            score,
            title,
            contents,
            category: address.group_name,
            lat: address.position.lat,
            lng: address.position.lng,
            address: address.address_name,
            place: address.content,
            placePhone: address.phone,
            placeUrl: address.place_url,
            images: fileUrls,
            groupCode: address.group_code,
          },
        },
      });
      Modal.success({ content: "회원님의 글이 정상적으로 등록되었습니다." });
      setIsButtonActive(false);
      setScore(0);
      router.push(`/boards/${result.data?.createBoard.id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickEditBoard = async () => {
    const updateBoardInput: IUpdateBoardInput = {};
    if (startDate) updateBoardInput.startDate = startDate;
    if (endDate) updateBoardInput.endDate = endDate;
    if (score) updateBoardInput.score = score;
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (address.group_name) updateBoardInput.category = address.group_name;
    if (address.position.lat) updateBoardInput.lat = address.position.lat;
    if (address.position.lng) updateBoardInput.lng = address.position.lng;
    if (address.address_name) updateBoardInput.address = address.address_name;
    if (address.content) updateBoardInput.place = address.content;
    if (address.phone) updateBoardInput.placePhone = address.phone;
    if (address.place_url) updateBoardInput.placeUrl = address.place_url;
    if (fileUrls) updateBoardInput.images = fileUrls;

    try {
      await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
          updateBoardInput,
        },
      });
      Modal.success({ content: "회원님의 글이 정상적으로 수정되었습니다." });
      router.push(`/boards/${router.query.boardId}`);
    } catch (error: any) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <WritePresenter
      isEdit={props.isEdit}
      data={props.data}
      activeStep={activeStep}
      onClickFirstNext={onClickFirstNext}
      onClickSecondPrev={onClickSecondPrev}
      onClickSecondNext={onClickSecondNext}
      onClickThirdPrev={onClickThirdPrev}
      onChangeRange={onChangeRange}
      startDate={startDate}
      endDate={endDate}
      dateError={dateError}
      onChangeTitle={onChangeTitle}
      title={title}
      titleError={titleError}
      onClickHappy={onClickHappy}
      onClickUhm={onClickUhm}
      onClickSad={onClickSad}
      score={score}
      scoreError={scoreError}
      resetScore={resetScore}
      onClickResetScore={onClickResetScore}
      onChangeContents={onChangeContents}
      contents={contents}
      contentsError={contentsError}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      mapStatus={mapStatus}
      address={address}
      mapError={mapError}
      onClickWriteBoard={onClickWriteBoard}
      onClickEditBoard={onClickEditBoard}
      isButtonActive={isButtonActive}
    />
  );
}
