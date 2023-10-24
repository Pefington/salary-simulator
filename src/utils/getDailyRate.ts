import { Euros, Years } from '../types';
import { getYearlyGrossSalary } from './getSalary';

export const getDailyRateFromTarget = (
  experience: Years,
  targetSalary: Euros,
  daysWorkedInYear: number,
): Euros => {
  let usedRate = 300;
  let achievedSalary = 0;
  let incrementStep = 1;

  while (usedRate < 1000) {
    achievedSalary = getYearlyGrossSalary(experience, usedRate, daysWorkedInYear);

    console.log(usedRate, achievedSalary);

    if (achievedSalary >= targetSalary) {
      break;
    }

    if (achievedSalary < targetSalary - 20000) {
      incrementStep = 100;
    } else if (achievedSalary < targetSalary - 10000) {
      incrementStep = 50;
    } else if (achievedSalary < targetSalary - 5000) {
      incrementStep = 25;
    } else if (achievedSalary < targetSalary - 1000) {
      incrementStep = 10;
    } else {
      incrementStep = 1;
    }

    usedRate += incrementStep;
  }

  return usedRate;
};

getDailyRateFromTarget(3, 45000, 218);
