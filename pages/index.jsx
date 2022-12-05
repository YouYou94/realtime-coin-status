import Seo from "../components/Seo/Seo.jsx";
import * as Styled from "../styles/PagesStyled/indexStyled.jsx";

export default function Home() {
  return (
    <Styled.IndexLayout>
      <Seo title={"Home"} />
      안녕~
    </Styled.IndexLayout>
  );
}
