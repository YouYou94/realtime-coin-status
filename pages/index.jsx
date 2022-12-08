import { useEffect, useRef, useState } from "react";
import CoinList from "../components/CoinList/CoinList.jsx";
import Search from "../components/Search/Search.jsx";
import Seo from "../components/Seo/Seo.jsx";
import Title from "../components/Title/Title.jsx";
import * as Styled from "../styles/PagesStyled/indexStyled.jsx";

export default function Home({ coinList }) {
  const [search, setSearch] = useState("");
  const [resultList, setResultList] = useState([]);

  // const handleOnChangeSearch = (event) => {
  //   const { value } = event.target;

  //   setSearch(value);

  //   let searchList = coinList
  //     .filter((coin) => {
  //       return coin.name.toUpperCase().includes(value.toUpperCase());
  //     })
  //     .map((coin) => {
  //       const { id, name } = coin;
  //       return (
  //         <Styled.ResultItem
  //           key={id}
  //           id={JSON.stringify(coin)}
  //           onClick={handleOnClickResultCoin}
  //         >
  //           {name}
  //         </Styled.ResultItem>
  //       );
  //     });

  //   if (searchList.length > 10) searchList = searchList.slice(0, 10);
  //   else searchList = searchList.slice(0, searchList.length);

  //   if (value) {
  //     setResultList(searchList);
  //   } else setResultList([]);
  // };

  return (
    <Styled.IndexLayout>
      <Seo title={"Home"} />
      <Title />
      <Search search={search} setSearch={setSearch} />
      <CoinList />
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
