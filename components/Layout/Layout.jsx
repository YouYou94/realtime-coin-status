import * as Styled from "./LayoutStyled.jsx";

export default function Layout({ children }) {
  return (
    <>
      <Styled.Layout>{children}</Styled.Layout>
    </>
  );
}
