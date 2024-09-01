import React from 'react'
import styled from 'styled-components'

const FooterMod = styled.footer`
    width: 100%;
    height: 70px;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 500;
    font-style: italic;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #FFD700;
    background-color: #051822;

    @media (max-width: 350px){
      h3{
        font-size: 1.2rem;
      }
    }
`

const Footer = () => {
  return (
    <FooterMod>
        <h3>Desenvolvido por Henrique</h3>     
    </FooterMod>
  )
}

export default Footer;