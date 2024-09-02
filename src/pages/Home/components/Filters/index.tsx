import { Container, ItemFilter } from "./styles";
import { filters } from '../../../../data.json';
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { toggleFilter } from '../../../../features/Filter/filterSlice';

export function Filters() {
  const dispatch = useAppDispatch();
  const activeFilters = useAppSelector(state => state.filters.activeFilters);

  return(
    <Container>
      {
        filters.map((item) =>
          <ItemFilter
            key={item}
            onClick={() => dispatch(toggleFilter(item))}
            style={{
              backgroundColor: activeFilters.includes(item) ? '#C47F17' : 'transparent',
              color: activeFilters.includes(item) ? 'white' : '#C47F17',
              cursor: 'pointer'
            }}
          >
            {item}
          </ItemFilter>
        )
      }
    </Container>
  )
}