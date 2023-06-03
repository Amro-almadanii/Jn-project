import { Link } from 'react-router-dom';
import classes from './pdflist.module.scss';
const SocialMediasList = ({ pdfs }) => {
  return (
    <div className={classes.pdfsList}>
      <h1>All PDFs</h1>
      <table>
        <thead>
          <tr>
            <th>PDF Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {pdfs.map((pdf) => (
            <tr key={pdf.id}>
              <td>
                <Link to={`/marketing/pdfs/pdf-detail/${pdf.id}`}>
                  {pdf.id}
                </Link>
              </td>
              <td>{pdf.name}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>PDF Id</th>
            <th>Name</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default SocialMediasList;
