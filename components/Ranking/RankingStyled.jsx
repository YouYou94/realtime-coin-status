import styled from "styled-components";

export const RankingLayout = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export const RankingTitleBox = styled.div`
  margin: 2rem 0;

  text-align: center;
`;

export const RankingTitle = styled.em`
  border-bottom: 1px solid black;

  font-family: "GowunDodum";
  font-size: 2rem;
`;

export const LeftMileStone = styled.em`
  margin: 0 5rem;

  font-size: 1.5rem;

  cursor: pointer;

  &:hover {
    color: rgb(9, 52, 131);
  }
`;

export const RightMileStone = styled.em`
  margin: 0 5rem;

  font-size: 1.5rem;

  cursor: pointer;

  &:hover {
    color: rgb(9, 52, 131);
  }
`;

export const RankingList = styled.ul`
  flex: 1;

  display: flex;
  flex-direction: column;

  margin: 0 5rem;

  overflow: hidden;
`;

export const RankingHead = styled.div`
  display: flex;

  border-bottom: 1px solid black;
`;

export const RankingCarousel = styled.div`
  flex: 1;

  display: flex;
`;

export const RankingBody = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  font-family: "GowunDodum";
`;

export const RankingBox = styled.div`
  flex: 1;

  display: flex;

  font-weight: 600;
`;

export const RankingItemRank = styled.li`
  flex: 1;

  display: flex;
  align-items: center;

  padding-left: 1rem;
`;

export const RankingItemName = styled.li`
  flex: 2;

  display: flex;
  align-items: center;

  padding-left: 1rem;
`;

export const RankingItemSymbol = styled.li`
  flex: 1;

  display: flex;
  align-items: center;

  padding-left: 1rem;
`;

export const RankingItemPrice = styled.li`
  flex: 1.5;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-right: 1rem;
`;

export const RankingItemMarget = styled.li`
  flex: 1.5;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-right: 1rem;
`;

export const RankingItemVolume = styled.li`
  flex: 1.5;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding-right: 1rem;

  color: ${(prop) =>
    prop.variance ? (prop.variance === "increase" ? "red" : "blue") : ""};
`;
