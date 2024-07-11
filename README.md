# Coffee Delivery

Criar o projeto
  npm create vite@latest

Styled components
  npm i styled-components
  npm i @types/styled-components -D

# template
import { Container } from "./styles";

export function Hero() {
  return(
    <Container>
      <span>Nossos Cafés</span>
    </Container>
  )
}

import styled from 'styled-components'

export const Container = styled.main`
  margin: 0 auto;
  width: 1280px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`