import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AppBar = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  height: 80px;
`;

export const ContentWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const AppNavigation = styled.nav`
  margin: 0 auto 0 50px;
`;

export const NavList = styled.ul`
  display: flex;

  gap: 10px;
`;

export const LinkBtn = styled(NavLink)`
  padding: 10px;

  font-weight: 700;

  color: #fff;
  background-color: rgba(255, 248, 220, 0.3);
  border: 1px solid rgba(255, 248, 220, 0.8);
  border-radius: 5px;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);

  transition: background-color 200ms ease-out, box-shadow 100ms ease-out;

  &:hover,
  &:focus {
    background-color: rgba(255, 248, 220, 0.7);
    box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.75);
  }

  &:active {
    background-color: rgba(255, 248, 220, 0.5);
  }

  &.active {
    border-width: 2px;
    border-color: rgba(255, 140, 0, 0.4);

    &:hover,
    &:focus {
      border-width: 2px;
      border-color: rgba(255, 140, 0, 0.7);
    }

    &:active {
      border-width: 2px;
      border-color: rgba(255, 140, 0, 0.5);
    }
  }
`;
