import Link from "next/link.js";
import { useRouter } from "next/router.js";
import * as Styled from "./HeaderStyled.jsx";

export default function Header() {
  return (
    <Styled.HeaderLayout>
      <Styled.HeaderTitle>Realtime Coin Status</Styled.HeaderTitle>
    </Styled.HeaderLayout>
  );
}
