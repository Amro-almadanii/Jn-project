import { Link, useNavigate } from 'react-router-dom';
import classes from './BenefitsList.module.scss';
const BenefitsList = ({ benefits }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.benefitsList}>
      <h1> HR > Benefits </h1>
      <div className={classes.add_benefit}>
        <Link className={classes.add_benefit_link} to="/hr/benefits/new">
          Add New Benefit
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {benefits.map((benefit) => (
            <tr
              key={benefit.id}
              onClick={() =>
                navigate(`/hr/benefits/benefit-detail/${benefit.id}`)
              }
            >
              <td>{benefit.name}</td>
              <td>{benefit.cost}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default BenefitsList;
