import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  Container,
  HeroBackground,
  Intro,
  Text,
  Topics,
  Item,
  IconCart,
  IconPackage,
  IconTimer,
  IconCoffee
} from "./styles";
import { Hero } from "./components/Hero";

export function Home(){
  return(
    <>
    <HeroBackground src="/images/hero-bg.svg" alt="Imagem do background" />

    <Container>
      <Intro>
        <Text>
          <span>Encontre o café perfeito para qualquer hora do dia</span>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </Text>
        <Topics>
          <Item>
            <IconCart><ShoppingCart size={16} color="#FFF" weight="fill" /></IconCart>
            <span>Compra simples e segura</span>
          </Item>
          <Item>
          <IconPackage><Package size={16} color="#FFF" weight="fill" /></IconPackage>
            <span>Embalagem mantém o café intacto</span>
          </Item>
          <Item>
          <IconTimer><Timer size={16} color="#FFF" weight="fill" /></IconTimer>
            <span>Entrega rápida e rastreada</span>
          </Item>
          <Item>
          <IconCoffee><Coffee size={16} color="#FFF" weight="fill" /></IconCoffee>
            <span>O café chega fresquinho até você</span>
          </Item>
        </Topics>
      </Intro>

      <img src="/images/hero.svg" alt="Imagem de um café" />
    </Container>

    <Hero />
    </>
  )
}