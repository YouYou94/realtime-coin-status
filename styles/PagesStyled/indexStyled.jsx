import styled from "styled-components";

export const IndexLayout = styled.div`
  max-width: 45rem;
  min-width: 30rem;

  display: flex;
  flex-direction: column;
`;

export const SearchBox = styled.div`
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  margin: 0 1rem;
  font-family: "GowunDodum";
  font-size: 1.3rem;

  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

export const IconBox = styled.div`
  cursor: pointer;
`;
