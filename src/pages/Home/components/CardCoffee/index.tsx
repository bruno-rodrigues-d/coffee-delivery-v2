import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Container, Text, Tag, Footer, Price, Counter, CartButton, Tags, Box } from "./styles";
import { coffees } from '../../../../data.json'

interface CardCoffeeProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

export function CardCoffee() {
  return(
    <>
    {
      coffees.map(({title, description, tags, price, image, id}: CardCoffeeProps)  => (
        <Container key={id}>
          <img src={image} alt="café" />

          <Footer>
            <Price>
              <h3 className="price">R$</h3>
              <p className="price">{price}</p>
            </Price>

            <Box>
              <Counter>
                <button><Minus size={14} weight="bold" color="#8047F8" /></button>
                <span className="count">2</span>
                <button><Plus size={14} weight="bold" color="#8047F8" /></button>
              </Counter>

              <CartButton>
                <ShoppingCart size={22} color="#fff" weight="fill" />
              </CartButton>
            </Box>
          </Footer>

          <Text>
            <p>{description}</p>
            <span>{title}</span>
          </Text>

          <Tags>
            {tags.map((tag) =>
              <Tag key={tag}>
                {tag}
              </Tag>)
            }
          </Tags>
        </Container>
      ))
    }
    </>
  )
}