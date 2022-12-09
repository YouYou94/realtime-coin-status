import { useEffect, useRef, useState } from "react";
import Seo from "../components/Seo/Seo.jsx";
import * as Styled from "../styles/PagesStyled/indexStyled.jsx";

export default function Home({ coinList }) {
  console.log(coinList);
  return (
    <Styled.IndexLayout>
      <Seo title={"Home"} />
    </Styled.IndexLayout>
  );
}

export async function getServerSideProps() {
  const coinList = await (
    await (
      await fetch("https://api.coinpaprika.com/v1/tickers?quotes=KRW")
    ).json()
  ).slice(0, 100);

  return {
    props: {
      coinList,
    },
  };
}
// https://api.coinpaprika.com/v1/coins

// https://api.coinpaprika.com/v1/tickers?quotes=KRW
