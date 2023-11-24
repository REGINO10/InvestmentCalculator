import { calculateInvestmentResults, formatter } from "./../util/investment.js";

export default function Output({ output }) {
  const numberCheck = Object.values(output).every((val) => Number(val));
  let outputValues;
  if (numberCheck) {
    outputValues = calculateInvestmentResults(output);
  }
  console.log(outputValues);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {outputValues
          ? outputValues.map((val) => {
              const totalInterest =
                val.valueEndOfYear - val.annualInvestment * val.year;
              return (
                <>
                  <tr key={val.year}>
                    <td>{val.year}</td>
                    <td>{formatter.format(val.valueEndOfYear)}</td>
                    <td>{formatter.format(val.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>
                      {formatter.format(val.valueEndOfYear - totalInterest)}
                    </td>
                  </tr>
                </>
              );
            })
          : undefined}
      </tbody>
    </table>
  );
}
