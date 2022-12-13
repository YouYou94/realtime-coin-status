import styled from "styled-components"
import Seo from "../components/Seo/Seo";

export default function Home() {
    return (
    <IndexLayout>
        <Seo title='Home' />
    </IndexLayout>)
}

export const IndexLayout = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
`;