import { CardCoffee } from "../CardCoffee";
import { Container, Cards, HeaderHero } from "./styles";

import { Filters } from "../Filters";

export function Hero() {
  return(
    <Container>
      <HeaderHero>
        <span>Nossos Cafés</span>
        <Filters /> {/* TO-DO: implementar filtros com o redux */}
      </HeaderHero>

      <Cards>
        <CardCoffee/>
      </Cards>
    </Container>
  )
}