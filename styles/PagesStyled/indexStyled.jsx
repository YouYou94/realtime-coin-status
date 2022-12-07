import styled from "styled-components";

export const IndexLayout = styled.div`
  max-width: 45rem;
  min-width: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "GowunDodum";

  color: white;
`;

export const EmphasisTitle = styled.em`
  margin-right: 0.2rem;

  font-size: 2rem;
`;

export const SearchBox = styled.div`
  position: relative;

  height: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 25rem;
  height: 2rem;

  padding: 0 1rem;
  border: none;

  font-family: "GowunDodum";
  font-size: 1.2rem;

  outline: none;

  transition: all 0.35s;
`;

export const ResultList = styled.ul`
  position: absolute;

  width: 100%;

  top: 2rem;

  border-top: 1px solid black;

  background-color: white;
`;

export const ResultItem = styled.li`
  width: 100%;

  padding-left: 1rem;

  font-family: "GowunDodum";

  cursor: pointer;

  &:hover {
    background-color: rgb(9, 52, 131, 0.3);
  }
`;

export const RankingBox = styled.div`
  position: relative;

  width: 100%;
  height: 2rem;

  margin-top: 1rem;
  padding: 0 3rem;

  overflow: hidden;
`;

export const RankingList = styled.ul`
  transition: all 0.35s;
`;

export const RankingItem = styled.li`
  height: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: "GowunDodum";
  font-size: 1.2rem;

  color: white;
`;
