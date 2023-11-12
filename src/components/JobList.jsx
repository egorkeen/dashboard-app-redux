import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from '../store/position-slice';
import { selectFilters } from '../store/filter-slice';
import { addFilter } from '../store/filter-slice';

const JobList = () => {
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) => selectVisiblePositions(state, currentFilters));
  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
          handleAddFilter={handleAddFilter}
          key={item.id} 
          {...item} 
        />
      ))}
    </div>
  )
}

export {JobList};