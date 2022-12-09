import Header from "../components/Header/Header.jsx";
import Ranking from "../components/Ranking/Ranking.jsx";
import Seo from "../components/Seo/Seo.jsx";
import * as Styled from "../styles/PagesStyled/indexStyled.jsx";

export default function Home({ coinList }) {
  return (
    <Styled.IndexLayout>
      <Seo title={"Home"} />
      <Header />
      <Ranking coinList={coinList} />
    </Styled.IndexLayout>
  );
}

export async function getServerSideProps() {
  const coinList = await (
    await (await fetch("http://localhost:3000/api/coins")).json()
  ).slice(0, 100);

  return {
    props: {
      coinList,
    },
  };
}
