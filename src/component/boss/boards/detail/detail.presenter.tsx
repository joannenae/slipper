// // 예원작업 5/16

// 하드코딩해서 보이게 해놓은 부분
import * as S from "./detail.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IDetailPresenter } from "./detail.types";
import { getDate } from "../../../../commons/libraries/date";
import { FETCH_BOARD } from "./detail.query";

export default function DetailPresenter(props: IDetailPresenter) {
  console.log(props.data?.fetchBoard.id, "id");
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <S.WrapperOut>
      <S.WrapperTop>
        <S.TopLeft>
          <S.Map src={"/image/mapEx.png"} />
          <S.SliderWrap>
            <S.ImageWrap>
              <S.SliderStyle {...settings}>
                {props.data?.fetchBoard.images.imageUrl
                  ?.filter((el: string) => el)
                  .map((el: string) => (
                    <S.ImgWrapper key={el}>
                      <S.Img src={el} />
                    </S.ImgWrapper>
                  ))}
              </S.SliderStyle>
            </S.ImageWrap>
          </S.SliderWrap>
        </S.TopLeft>
        <S.EditDeleteWrap>
          <S.UserWriteDate>{props.data?.fetchBoard.createdAt}</S.UserWriteDate>
          <S.Icon src={"/image/listpen.png"} id={props.data?.fetchBoard.id} />
          <S.Icon
            id={props.data?.fetchBoard.id}
            src={"/image/delete.png"}
            onClick={props.onClickDeleteBoard}
          />
        </S.EditDeleteWrap>
        <S.TopRight>
          <S.UserTitle>{props.data?.fetchBoard.title}</S.UserTitle>
          <S.CategoryWrap>
            <S.Category>{props.data?.fetchBoard.category}</S.Category>
          </S.CategoryWrap>
          <S.UserMiddle>
            <S.ShopName>{props.data?.fetchBoard.place}</S.ShopName>
            <S.ShopRatingWrap>
              <S.RatingWrap>
                <S.Good src={"/image/ratingGood.png"} />
                <S.Soso src={"/image/ratingSoso.png"} />
                <S.Bad src={"/image/ratingBad.png"} />
              </S.RatingWrap>
            </S.ShopRatingWrap>
          </S.UserMiddle>
          <S.UserInfoWrap>
            <S.User>
              <S.UserImg src={props.data?.fetchBoard.user.imageUrl} />
              <S.UserName>{props.data?.fetchBoard.user.ninkname}</S.UserName>
            </S.User>
            <S.UserLivingWrap>
              <S.UserLiving>거주기간:</S.UserLiving>
              <S.UserLivingPeriod>
                {props.data?.fetchBoard.startDate}~
                {props.data?.fetchBoard.endDate}
              </S.UserLivingPeriod>
            </S.UserLivingWrap>
          </S.UserInfoWrap>
          <S.UserContents>{props.data?.fetchBoard.contents}</S.UserContents>
          <S.WrapperBottom>
            <S.Button onClick={props.onClickMoveToList}>목록</S.Button>
          </S.WrapperBottom>
        </S.TopRight>
      </S.WrapperTop>
    </S.WrapperOut>
  );
}
