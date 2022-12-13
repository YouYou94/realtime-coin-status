import type { AppProps } from 'next/app';
import * as Styled from './styled';

const Layout = ({children}:any) => {
    return <Styled.Layout>{children}</Styled.Layout>
}

export default Layout;