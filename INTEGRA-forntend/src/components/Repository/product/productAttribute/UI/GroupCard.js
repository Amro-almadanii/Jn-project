import { Card } from '@mui/material';
import { Link } from 'react-router-dom';

const GroupCard = ({group}) => {
  return (
    <div>
      <Card>
        <p>{group.id}</p>
        <p>{group.name}</p>
        <Link to={`/repository/products/attributes/new/${group.id}`}>Create attribute</Link>
      </Card>
    </div>
  );
}

export default GroupCard;