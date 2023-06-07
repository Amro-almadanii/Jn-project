import { Card } from '@mui/material';
import GroupCard from '../UI/GroupCard';

const GroupsList = ({groups}) => {
  return (
    <div>
      {groups.map((group) => (
            <GroupCard group={group} key={group.id} />
      ))}
    </div>
  );
}

export default GroupsList;

