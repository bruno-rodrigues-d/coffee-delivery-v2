import { Link } from "react-router-dom";
import { Container, Content, LocationCity, ButtonCart } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return(
    <>
    <Container>
      <Link to="/">
        <img src="images/logo.svg" alt="Coffee Delivery" />
      </Link>

      <Content>
        <LocationCity>
          <MapPin size={22} color="#8047F8" weight="fill" />
          <span>São Paulo, SP</span>
        </LocationCity>
        <ButtonCart>
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
          <span>2</span>
        </ButtonCart>
      </Content>
    </Container>
    </>
  )
}