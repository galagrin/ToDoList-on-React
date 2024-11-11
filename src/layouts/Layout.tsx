import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/GlobalStyle';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const Layout = () => {
    const theme = useSelector((state: RootState) => state.themeList.theme);
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <Outlet />
            </ThemeProvider>
        </>
    );
};
