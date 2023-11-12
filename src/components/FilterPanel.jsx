import {useSelector, useDispatch} from 'react-redux';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import {removeFilter, clearFilter, selectFilters} from '../store/filter-slice';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);

  if (!currentFilters || currentFilters.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map(filter => (
            <Badge
              key={filter}
              variant="clearable"
              onClear={() => dispatch(removeFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button
          className='link'
          onClick={() => dispatch(clearFilter())}
        >Clear</button>
      </div>
    </Card>
  )
}

export { FilterPanel };