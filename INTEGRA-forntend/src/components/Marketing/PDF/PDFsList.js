import { Link, redirect, useNavigate } from 'react-router-dom';
import classes from './pdfsList.module.scss';
const PDFsList = ({ pdfs }) => {
  const navigate = useNavigate();

  return (
    <div className={classes.pdfsList}>
      <h1> Marketing > PDFs</h1>
      <table>
        <thead>
        <tr>
          <th>PDF Id</th>
          <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {pdfs.map((pdf) => (
          <tr
            key={pdf.id}
            onClick={() =>
              navigate(`/marketing/pdfs/pdf-detail/${pdf.id}`)
            }
          >
            <td>{pdf.id}</td>
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

export default PDFsList;
