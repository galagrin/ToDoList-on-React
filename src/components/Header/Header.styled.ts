import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBlock = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #4682b4;
    display: flex;
    align-items: center;
`;
export const HeaderContainer = styled.div`
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderNavLink = styled(NavLink)`
    text-decoration: none;
    padding: 10px;
    color: #fff;

    &.active {
        color: #ffffff33;
    }
`;
export const HeaderToggle = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
`;

export const HeaderToggleButton = styled.button`
    display: inline-block;
    position: relative;
    padding: 1rem 2rem;
    border: 0;
    border-radius: 25px;
    overflow: hidden;
    cursor: pointer;

    &:before {
        content: '${(props) => (props.theme.name === 'light' ? '🌞' : '🌙')}';
        display: flex;
        align-items: center;
        justify-content: right;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: 0;
        border-radius: 25px;
        font-size: 1.5rem;
    }
`;
