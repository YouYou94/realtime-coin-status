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

  outline: none;

  transition: all 0.35s;
`;

export const ResultList = styled.ul`
  position: absolute;

  width: 100%;

  top: 2rem;

  margin: 0;
  padding-left: 1rem;
  border-top: 1px solid black;

  background-color: white;

  list-style: none;
`;

export const ResultItem = styled.li`
  width: 100%;

  font-family: "GowunDodum";

  cursor: pointer;

  &:hover {
    background-color: rgb(250, 250, 250);
  }
`;

export const RankingBox = styled.div``;
