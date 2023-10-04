import { describe, expect, it } from 'vitest';

import { getYearlyGrossSalary } from './calculator';
import { getPayGrade } from './helpers';

const daysWorkedInYear = 218;

describe('getYearlyGrossSalary', () => {
  it('calculates the yearly gross salary correctly', () => {
    const experience = Math.floor(Math.random() * 14);
    const grade = getPayGrade(experience);

    const { minDailyRate, defaultYearlyGrossSalary } = grade;

    const result = getYearlyGrossSalary(experience, minDailyRate, daysWorkedInYear);

    expect(result).toEqual(defaultYearlyGrossSalary);
  });
});
