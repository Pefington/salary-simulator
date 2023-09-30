import payGrades from '../data/grades.json';
import ssData from '../data/ssData.json';
import { Euros, PayGrade, PayGrades } from '../types';

const typedPayGrades: PayGrades = payGrades;

export const getYearlyGrossSalary = (
  payGradeKey: string,
  dailyRate: Euros,
  daysWorkedInYear: number,
): Euros => {
  const grade = typedPayGrades[payGradeKey];

  if (!grade) {
    throw new Error(`No grade found for ${payGradeKey}. Check capitalisation.`);
  }

  const { yearlyBaseSalary, mutual, ticketsRestaurant, transport } = grade;
  const variablePay = getVariable(grade, dailyRate) * daysWorkedInYear;
  const restaurantTicketPay = ticketsRestaurant * 11;
  const transportPay = transport * 11;
  const socialSecurityPay = getSocialSecurity(grade, dailyRate) * 12;
  const mutualPay = mutual * 12;

  return parseFloat(
    (
      yearlyBaseSalary +
      variablePay +
      restaurantTicketPay +
      transportPay +
      socialSecurityPay +
      mutualPay
    ).toFixed(2),
  );
};

function getVariable(grade: PayGrade, dailyRate: Euros): Euros {
  const { minDailyRate } = grade;

  return (dailyRate - minDailyRate) / 2;
}

function getSocialSecurity(grade: PayGrade, dailyRate: Euros): Euros {
  const { trancheACeiling, trancheAContributionRate, trancheBContributionRate, cover } = ssData;
  const { monthlyBaseSalary } = grade;
  const monthlyVariable = getVariable(grade, dailyRate) * 20;
  const monthlyGrossSalary = monthlyBaseSalary + monthlyVariable;

  const result =
    monthlyGrossSalary <= trancheACeiling
      ? monthlyGrossSalary * trancheAContributionRate
      : trancheACeiling * trancheAContributionRate +
        (monthlyGrossSalary - trancheACeiling) * trancheBContributionRate;

  return result * cover;
}
