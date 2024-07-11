import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const HeroBackground = styled.img`
  z-index: -1;
  position: absolute;
  max-height: 544px;
  width: 100vw;
  object-fit: cover;
`

export const Container = styled.main`
  margin: 0 auto;
  width: 1280px;
  padding: 6rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Intro = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 4.125rem;
`

export const Text = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;

  max-width: 36rem;

  span {
    ${mixins.fonts.titleXL};
    color: ${({ theme }) => theme.colors['base-title']};
  }

  p {
    ${mixins.fonts.textL};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const Topics = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.25rem;
  justify-items: start;
`

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  span {
    ${mixins.fonts.textM};
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  width: 2rem;
  height: 2rem;
`

export const IconCart = styled(Icon)`
  background-color: ${({ theme }) => theme.colors['yellow-dark']};
`

export const IconPackage = styled(Icon)`
  background: ${({ theme }) => theme.colors['base-text']};
`

export const IconTimer = styled(Icon)`
  background: ${({ theme }) => theme.colors.yellow};
`

export const IconCoffee = styled(Icon)`
  background: ${({ theme }) => theme.colors.purple};
`