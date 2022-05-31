import { gql } from "@apollo/client";

// 게시글의 상세 정보를 불러오는 query
export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      createdAt
      nickname
      category
      title
      contents
      thumbnail
      score
      startDate
      endDate
      lat
      lng
      address
      place
      placePhone
      placeUrl
      likeCount
      images {
        id
        imageUrl
      }
      user {
        id
        imageUrl
        role
      }
    }
  }
`;

// 게시글을 삭제하는 mutation
export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: String!) {
    deleteBoard(boardId: $boardId)
  }
`;

// 좋아요 누르는 mutation
export const CLICK_LIKE = gql`
  mutation clickLike($boardId: String!) {
    clickLike(boardId: $boardId) {
      id
      likeCount
    }
  }
`;

// 유저가 좋아요 누른 갯수, boolean, board 정보를 불러오는 query
export const FETCH_USER_LIKE = gql`
  query fetchUserLike($boardId: String!) {
    fetchUserLike(boardId: $boardId) {
      isLike
      board {
        id
        likeCount
      }
    }
  }
`;
