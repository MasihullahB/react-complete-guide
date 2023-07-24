import { useState } from 'react';
import CalculationForm from './components/CalculationForm/CalculationForm';
import Header from './components/Header/Header';
import InvestmentDataList from './components/InvestmentDataList/InvestmentDataList';

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <CalculationForm onCalculate={calculateHandler} />
      {!userInput && <p className='fallback'>No investment calculated yet.</p>}
      {userInput && (
        <InvestmentDataList
          yearlyData={yearlyData}
          initialInvestment={userInput['current-savings']}
        />
      )}
    </div>
  );
}

export default App;
