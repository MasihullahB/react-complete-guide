const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const InvestmentDataItem = ({
  year,
  savingsEndOfYear,
  yearlyInterest,
  yearlyContribution,
  initialInvestment,
}) => {
  return (
    <tr key={year}>
      <td>{year}</td>
      <td>{formatter.format(savingsEndOfYear)}</td>
      <td>{formatter.format(yearlyInterest)}</td>
      <td>
        {formatter.format(
          savingsEndOfYear - initialInvestment - yearlyContribution * year
        )}
      </td>
      <td>{formatter.format(initialInvestment + yearlyContribution * year)}</td>
    </tr>
  );
};
export default InvestmentDataItem;
