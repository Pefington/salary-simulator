import ssData from '../data/ssData.json';
import { Euros, PayGrade, Years } from '../types';
import { getPayGrade } from './helpers';

export const getYearlyGrossSalary = (
  experience: Years,
  dailyRate: Euros,
  daysWorkedInYear: number,
): Euros => {
  const grade = getPayGrade(experience);

  const { monthlyBaseSalary, mutual, ticketsRestaurant, transport } = grade;

  const yearlyBaseSalary = ((monthlyBaseSalary * 12) / 218) * daysWorkedInYear;
  const variablePay = getVariable(grade, dailyRate) * daysWorkedInYear;

  const restaurantTicketPay = ticketsRestaurant * 11;
  const transportPay = transport * 11;
  const socialSecurityPay = getSocialSecurity(grade, dailyRate) * 12;
  const mutualPay = mutual * 12;

  const result =
    yearlyBaseSalary +
    variablePay +
    restaurantTicketPay +
    transportPay +
    socialSecurityPay +
    mutualPay;

  const roundedResult = parseFloat(result.toFixed(2));

  return roundedResult;
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
