import { CardCoffee } from "../CardCoffee";
import { Container } from "./styles";

export function Hero() {
  return(
    <Container>
      <span>Nossos Cafés</span>

      <CardCoffee />
    </Container>
  )
}