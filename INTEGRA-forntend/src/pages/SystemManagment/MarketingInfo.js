import MarketingGragh from '../../components/SystemManagment/MarketingGragh';
import classes from './MarketingInfo.module.scss';
const MarketingInfo = () => {
  return (
    <div className={classes.MarketingInfo}>
      <h1> Marketing gragh Information </h1>
      <MarketingGragh />
    </div>
  );
};

export default MarketingInfo;
