import { useState } from 'react';
import * as Styled from './styled';

export default function Ranking({ coinList }: any) {
  const [count, setCount] = useState(0);

  const handleOnClickShowPrev = () => {
    if (count === 0) alert('맨 처음입니다.');
    else setCount(count - 1);
  };

  const handleOnClickShowNext = () => {
    if (count === 4) alert('맨 마지막입니다.');
    else setCount(count + 1);
  };

  let rankingList = (
    <Styled.RankingBody>
      {coinList.slice(20 * count, 20 * (count + 1)).map((coin: any) => {
        const oneDay =
          coin.quotes.KRW.percent_change_24h === 0
            ? ''
            : coin.quotes.KRW.percent_change_24h > 0
            ? 'increase'
            : 'decrease';
        const sevenDay =
          coin.quotes.KRW.percent_change_7d === 0
            ? ''
            : coin.quotes.KRW.percent_change_7d > 0
            ? 'increase'
            : 'decrease';

        return (
          <Styled.RankingBox key={coin.id}>
            <Styled.RankingItemRank>{coin.rank}</Styled.RankingItemRank>
            <Styled.RankingItemName>{coin.name}</Styled.RankingItemName>
            <Styled.RankingItemSymbol>{coin.symbol}</Styled.RankingItemSymbol>
            <Styled.RankingItemPrice>
              {Number(coin.quotes.KRW.price.toFixed(1)).toLocaleString()}
            </Styled.RankingItemPrice>
            <Styled.RankingItemMarget>
              {(coin.quotes.KRW.market_cap / 1000000000000).toFixed(2)}T
            </Styled.RankingItemMarget>
            <Styled.RankingItemVolume variance="">
              {(coin.quotes.KRW.volume_24h / 1000000000000).toFixed(2)}
            </Styled.RankingItemVolume>
            <Styled.RankingItemVolume variance={oneDay}>
              {coin.quotes.KRW.percent_change_24h.toFixed(2)}%
            </Styled.RankingItemVolume>
            <Styled.RankingItemVolume variance={sevenDay}>
              {coin.quotes.KRW.percent_change_7d.toFixed(2)}%
            </Styled.RankingItemVolume>
          </Styled.RankingBox>
        );
      })}
    </Styled.RankingBody>
  );

  return (
    <Styled.RankingLayout>
      <Styled.RankingTitleBox>
        <Styled.RankingTitle>
          <Styled.LeftMileStone
            onClick={handleOnClickShowPrev}
          >{`Prev `}</Styled.LeftMileStone>
          Realtime Coin Ranking
          <Styled.RightMileStone
            onClick={handleOnClickShowNext}
          >{` Next`}</Styled.RightMileStone>
        </Styled.RankingTitle>
      </Styled.RankingTitleBox>
      <Styled.RankingList>
        <Styled.RankingHead>
          <Styled.RankingItemRank>순위</Styled.RankingItemRank>
          <Styled.RankingItemName>종목</Styled.RankingItemName>
          <Styled.RankingItemSymbol>기호</Styled.RankingItemSymbol>
          <Styled.RankingItemPrice>가격 (KRW)</Styled.RankingItemPrice>
          <Styled.RankingItemMarget>총 시가</Styled.RankingItemMarget>
          <Styled.RankingItemVolume variance="">
            거래량 (24H)
          </Styled.RankingItemVolume>
          <Styled.RankingItemVolume variance="">
            변동 (24H)
          </Styled.RankingItemVolume>
          <Styled.RankingItemVolume variance="">
            변동 (7D)
          </Styled.RankingItemVolume>
        </Styled.RankingHead>
        <Styled.RankingCarousel>{rankingList}</Styled.RankingCarousel>
      </Styled.RankingList>
    </Styled.RankingLayout>
  );
}
