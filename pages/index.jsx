import Image from "next/image.js";
import Seo from "../components/Seo/Seo.jsx";
import * as Styled from "../styles/PagesStyled/indexStyled.jsx";

export default function Home() {
  return (
    <Styled.IndexLayout>
      <Seo title={"Home"} />
      <Styled.SearchBox>
        <Styled.Text>Realtime Coin Status</Styled.Text>
        <Styled.IconBox>
          <Image src={"/search.png"} alt="Search Icon" width={25} height={25} />
        </Styled.IconBox>
      </Styled.SearchBox>
    </Styled.IndexLayout>
  );
}
