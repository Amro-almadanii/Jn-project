import classes from './BenefitEmployeeShow.module.scss';
const BenefitEmployeeShow = ({ data }) => {
  return (
    <div className={classes.benefitEmployeeShow}>
      <table>
        <thead>
          <tr>
            <th>Employee id</th>
            <th>Benefits</th>
            <th>Enrollment Date</th>
            <th>Coverage Start Date</th>
            <th>Coverage End Date</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((emp_benefits) => ( */}
          <tr>
            <td></td>
            <td></td>
          </tr>
          {/* ))} */}
        </tbody>
        <tfoot>
          <tr>
            <th>Employee id</th>
            <th>Benefits</th>
            <th>Enrollment Date</th>
            <th>Coverage Start Date</th>
            <th>Coverage End Date</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default BenefitEmployeeShow;
