import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.header`
  margin: 0 auto;
  width: 1280px;
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

export const LocationCity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.75rem;
  gap: 0.25rem;

  background-color: ${({ theme }) => theme.colors['purple-light']};
  border-radius: 6px;

  span {
      color: ${({ theme }) => theme.colors['purple-dark']};
  }
`

export const ButtonCart = styled.button`
  background-color: ${({ theme }) => theme.colors['yellow-light']};
  padding: 0.5rem;
  border-radius: 6px;

/* Para aparecer o numero no carrinho de compras */
  position: relative;
/*   ------------------------------------------- */

/* Para ter o icone no centro, basta usar o display flex */
  display: flex;
  align-items: center;
  justify-content: center;
/* ----------------------------------------------------- */


/* Para aparecer o numero no carrinho de compras ---------------------------- */
  span {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
    color: ${({ theme }) => theme.colors.white};

    ${mixins.fonts.textS};
    font-weight: bold;

    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(50%, -50%);
  }
`
/* -------------------------------------------------------------------------- */