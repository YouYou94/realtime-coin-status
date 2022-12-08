import { useEffect, useRef, useState } from "react";
import Seo from "../components/Seo/Seo.jsx";
import * as Styled from "../styles/PagesStyled/indexStyled.jsx";

export default function Home({ coinList }) {
  return (
    <Styled.IndexLayout>
      <Seo title={"Home"} />
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
