import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`
export const ItemFilter = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.375rem 0.75rem;

  border: 1px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 6.25rem;

  background-color: transparent;

  color: ${({ theme }) => theme.colors['yellow-dark']};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
  text-transform: uppercase;
`
