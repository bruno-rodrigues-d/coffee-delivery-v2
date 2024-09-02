import styled from 'styled-components'

export const Container = styled.main`
  margin: 0 auto;
  width: 1280px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;

  span:first-child {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
  width: 100%;
`

export const HeaderHero = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
