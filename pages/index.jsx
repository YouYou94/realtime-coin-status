import { useEffect, useState } from "react";
import Seo from "../components/Seo/Seo.jsx";
import * as Styled from "../styles/PagesStyled/indexStyled.jsx";

export default function Home({ coinList }) {
  const [search, setSearch] = useState("");
  const [resultList, setResultList] = useState([]);

  const handleOnChangeSearch = (event) => {
    const { value } = event.target;

    setSearch(value);

    let searchList = coinList
      .filter((coin) => {
        return coin.name.toUpperCase().includes(value.toUpperCase());
      })
      .map((coin) => {
        const { id, name } = coin;
        return <Styled.ResultItem key={id}>{name}</Styled.ResultItem>;
      });

    if (searchList.length > 10) searchList = searchList.slice(0, 10);
    else searchList = searchList.slice(0, searchList.length);

    if (value) {
      setResultList(searchList);
    } else setResultList([]);
  };

  return (
    <Styled.IndexLayout>
      <Seo title={"Home"} />
      <Styled.Title>
        <Styled.EmphasisTitle>R</Styled.EmphasisTitle>ealtime{" "}
        <Styled.EmphasisTitle>C</Styled.EmphasisTitle>oin{" "}
        <Styled.EmphasisTitle>S</Styled.EmphasisTitle>tatus
      </Styled.Title>
      <Styled.SearchBox>
        <Styled.SearchInput
          type="text"
          value={search}
          onChange={handleOnChangeSearch}
        />
        <Styled.ResultList>{resultList}</Styled.ResultList>
      </Styled.SearchBox>
      <Styled.RankingBox></Styled.RankingBox>
    </Styled.IndexLayout>
  );
}

export async function getServerSideProps() {
  const coinList = await await (
    await fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
  ).json();

  return {
    props: {
      coinList,
    },
  };
}
