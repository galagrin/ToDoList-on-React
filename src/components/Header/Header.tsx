// import { NavLink } from 'react-router-dom';
// import classes from './Header.module.scss';
import { useDispatch } from 'react-redux';
import { HeaderBlock, HeaderContainer, HeaderNavLink, HeaderToggle, HeaderToggleButton } from './Header.styled';
import { toggleThemeAction } from '../../feature/themeList';

export const Header = () => {
    const dispatch = useDispatch();
    return (
        <HeaderBlock>
            <HeaderContainer>
                <HeaderNavLink to="/">ToDo</HeaderNavLink>

                <HeaderNavLink to="/list">List</HeaderNavLink>
                <HeaderToggle>
                    <HeaderToggleButton onClick={() => dispatch(toggleThemeAction())}>toggle</HeaderToggleButton>
                </HeaderToggle>
            </HeaderContainer>
        </HeaderBlock>
    );
};
