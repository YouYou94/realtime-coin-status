import styled from 'styled-components';
import Header from '../components/Header/Header';
import Ranking from '../components/Ranking/Ranking';
import Seo from '../components/Seo/Seo';

export default function Home({ coinList }: any) {
  return (
    <IndexLayout>
      <Seo title="Home" />
      <Header />
      <Ranking coinList={coinList} />
    </IndexLayout>
  );
}

export async function getServerSideProps() {
  const coinList = await (
    await (await fetch('http://localhost:3000/api/coins')).json()
  ).slice(0, 100);

  return {
    props: {
      coinList,
    },
  };
}

export const IndexLayout = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;
