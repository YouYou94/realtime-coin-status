import * as Styled from "./SearchStyled.jsx";

export default function Search({ search, setSearch }) {
  const handleOnChangeSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <Styled.SearchBox>
      <Styled.SearchInput value={search} onChange={handleOnChangeSearch} />
    </Styled.SearchBox>
  );
}
