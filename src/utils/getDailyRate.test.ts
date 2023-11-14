import { describe, expect, it } from 'vitest';

import { getDailyRateFromTarget } from './getDailyRate';
import { getYearlyGrossSalary } from './getSalary';

describe('getDailyRateFromTarget', () => {
  it('returns the correct daily rate for a given experience, target salary, and days worked in a year', () => {
    const experience = 5;
    const targetSalary = 80000;
    const daysWorkedInYear = 218;

    const dailyRate = getDailyRateFromTarget(experience, targetSalary, daysWorkedInYear);

    const achievedSalary = getYearlyGrossSalary(experience, dailyRate, daysWorkedInYear);
    expect(achievedSalary).toBeGreaterThanOrEqual(targetSalary);
  });
});
