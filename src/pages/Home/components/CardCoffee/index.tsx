import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Container, Text, Tag, Footer, Price, Counter, CartButton } from "./styles";

export function CardCoffee() {
  return(
    <Container>
      <img src="images/coffees/americano.png" alt="café" />

      <Footer>
        <Price>
          <span className="price">R$</span>
          <p>9,90</p>
        </Price>

        <Counter>
          <button><Minus size={14} weight="bold" color="#8047F8" /></button>
          <span className="count">2</span>
          <button><Plus size={14} weight="bold" color="#8047F8" /></button>
        </Counter>

        <CartButton>
          <ShoppingCart size={22} color="#fff" weight="fill" />
        </CartButton>
      </Footer>

      <Text>
        <p>O tradicional café feito com água quente e grãos moídos</p>
        <span>Expresso Tradicional</span>
      </Text>

      <Tag>Tradicional</Tag>
    </Container>
  )
}