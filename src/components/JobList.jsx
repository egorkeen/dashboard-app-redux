import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import {selectAllPositions} from 'store/positions/position-selectors';

const JobList = () => {
  const positions = useSelector(selectAllPositions);
  const dispatch = useDispatch();

  const handleAddFilter = () => {

  };

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export {JobList};