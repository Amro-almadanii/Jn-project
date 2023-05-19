import { Link } from 'react-router-dom';

const SocialMediasList = ({ pdfs }) => {
  return (
    <div>
      <h1>All PDFs</h1>
      <table
        style={{
          border: '2px solid black',
          textAlign: 'center',
        }}
      >
        <thead>
        <tr>
          <th>SocialMedia Id</th>
          <th>Name</th>
          <th>Campaign id</th>
        </tr>
        </thead>
        <tbody>
        {pdfs.map((pdf) => (
          <tr key={pdf.id}>
            <td>
              <Link to ={`/marketing/pdfs/pdf-detail/${pdf.id}`}>
                {pdf.id}
              </Link>
            </td>
            <td>{pdf.name}</td>
            <td><Link to={`/marketing/campaigns/campaign-detail/${pdf.campaign_id}`}>{pdf.campaign_id}</Link></td>
          </tr>
        ))}
        </tbody>
        <tfoot>
        <tr>
          <th>PDF Id</th>
          <th>Name</th>
          <th>Campaign id</th>
        </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default SocialMediasList;
