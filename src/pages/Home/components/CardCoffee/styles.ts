import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 1rem;

  position: relative;
  width: 16rem;
  height: 19.375rem;
  padding: 0 1.25rem 1.25rem 1.25rem;

  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 0.375rem 2.25rem;

  img{
    position: absolute;
    width: 7.5rem;
    height: 7.5rem;
    left: calc(50% - 120px/2);
    top: -1.25rem;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 1rem;

  span {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  p {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;

    color: ${({ theme }) => theme.colors['base-label']};
  }
`
export const Tag = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 5.5rem;

  padding: 0.25rem 0.5rem;

  background: ${({ theme }) => theme.colors['yellow-light']};
  border-radius: 6.25rem;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors['yellow-dark']};
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Price = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.25rem;

  span.price {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;

    ${({ theme }) => theme.colors['base-text']};
  }

  p:last-child {
    font-family: 'Baloo 2';
    font-size: 1.75rem;
    font-weight: 700;

    ${({ theme }) => theme.colors['base-text']};
  }
`

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  background: ${({ theme }) => theme.colors['base-button']};
  border-radius: 0.375rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;

    svg {
      color: ${({ theme }) => theme.colors.purple};

      transition: all 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors['purple-dark']};
      }
    }
  }

  span.count {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;

    color: ${({ theme }) => theme.colors['base-title']};
  }
`

export const CartButton = styled.button`
  background-color: ${({ theme }) => theme.colors['purple-dark']};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.colors['purple']};
  }
`
