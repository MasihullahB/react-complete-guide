import InvestmentDataItem from '../InvestmentDataItem/InvestmentDataItem';
import styles from './InvestmentDataList.module.css';

const InvestmentDataList = ({ yearlyData, initialInvestment }) => {
  const headerRow = (
    <tr>
      <th>Year</th>
      <th>Total Savings</th>
      <th>Interest (Year)</th>
      <th>Total Interest</th>
      <th>Invested Capital</th>
    </tr>
  );
  return (
    <table className={styles.result}>
      <thead>{headerRow}</thead>
      <tbody>
        {yearlyData.map(
          ({ year, savingsEndOfYear, yearlyInterest, yearlyContribution }) => (
            <InvestmentDataItem
              key={year}
              year={year}
              savingsEndOfYear={savingsEndOfYear}
              yearlyInterest={yearlyInterest}
              yearlyContribution={yearlyContribution}
              initialInvestment={initialInvestment}
            />
          )
        )}
      </tbody>
    </table>
  );
};
export default InvestmentDataList;
