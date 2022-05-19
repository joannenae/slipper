import styled from "@emotion/styled";
import {
  Map,
  MapMarker,
  MapTypeId,
  MapInfoWindow,
  Roadview,
  CustomOverlayRoadview,
} from "react-kakao-maps-sdk";
export const War = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 2px;
`;
export const KakaoMap = styled(Map)`
  position: relative;
  width: 100%;
  height: 100vh;
  border: 1px solid red;
`;
export const Message = styled.input`
  width: 7%;
  position: absolute;
  left: 46.5%;
  top: 16%;
  font-size: 1.5rem;
  color: #008af6;
  font-weight: bold;
  z-index: 50;
  border-radius: 10px;
  border: 1px solid gainsboro;
  animation: motion 0.3s linear 0s infinite alternate;
  margin-top: 0;
  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 3px;
    }
  }
`;

export const KaoKaoMarker = styled(MapMarker)``;
export const KaoKaoMapTypeId = styled(MapTypeId)``;
export const KaoKaoWindowDiv = styled.div`
  width: 100%;
  height: 100vh;
`;
export const KaoKaoMessage = styled.div`
  animation: motion 0.3s linear 0s infinite alternate;
  margin-top: 0;
  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 3px;
    }
  }
`;
export const KaoKaoMapInfoWindow = styled(MapInfoWindow)``;
export const kaoKaoRoadview = styled(Roadview)`
  width: 100%;
`;
export const kaoKaoCustomOverlayRoadview = styled(CustomOverlayRoadview)``;