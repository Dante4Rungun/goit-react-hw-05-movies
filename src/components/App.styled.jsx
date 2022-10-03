import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AppBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`

export const Container = styled.div`
    display: flex;
    width: 1280px;
    font-size: 40px;
    color: #010101;
    margin-left: auto;
    margin-right: auto;
`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-bottom: 40px;
    padding: 10px 0;
    border-bottom: 1px solid rgb(162,162,162, 0.6);
`

export const Logo = styled.p`
    display: flex;
    align-items: center;
    font-size: 42px;
    font-weight: 700;
    letter-spacing: 1.2;
`

export const Navigation = styled.nav`
    display:flex;
    flex-direction: row;
    align-items: center;
    margin: auto;
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 1.2;
` 

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover {
    color: #2196f3;
  }

  &.active {
    color: white;
    background-color: orangered;
  }
`

export const Auth = styled.button`
    border: none;
    border-radius: 6px;
    background-color: white;
    padding: 4px;
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 1.2;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: orangered;
    }
`