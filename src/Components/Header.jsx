import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import styled from 'styled-components';

const HeaderMod = styled.header`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background-color: #051822;
    border-bottom: 1px solid #FFD700;

    .header--logo{
        height: 40px;
    }
    .header--user{
        height: 20px;
    }

    .header--logo a,
    .header--user a{
        text-decoration: none;
        height: 100%;
        font-size: 1.3rem;
        color: #fff;
        font-weight: 500;
        font-style: italic;
    }

    .header--logo a{
        border-bottom: 2px solid #FFD700;
        border-radius: 0 0 0 10px;
    }
`

const Header = () => {
  return (
    <HeaderMod>
        <div className="header--logo">
            <a href='#'>
                HMG Play
            </a>
        </div>
        <div className="header--user">
            <a href='#'>
                <FaUserCircle/>
            </a>
        </div>              
    </HeaderMod>
  )
}

export default Header;