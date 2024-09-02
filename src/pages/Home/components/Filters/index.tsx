import { Container, ItemFilter } from "./styles";
import { filters } from '../../../../data.json';

export function Filters() {
  return(
    <Container>
      {
        filters.map((item) =>
          <ItemFilter
            key={item}
            onClick={() => alert(item)}
          >
            {item}
          </ItemFilter>
        )
      }
    </Container>
  )
}