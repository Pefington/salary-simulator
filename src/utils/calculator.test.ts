import { describe, expect, it } from 'vitest';

import { updateYearlyGrossSalary } from './calculator';
import { getPayGrade } from './helpers';

const daysWorkedInYear = 218;

describe('updateYearlyGrossSalary', () => {
  it('calculates the yearly gross salary correctly', () => {
    const experience = Math.floor(Math.random() * 14);
    const grade = getPayGrade(experience);

    const { minDailyRate, defaultYearlyGrossSalary } = grade;

    const result = updateYearlyGrossSalary(experience, minDailyRate, daysWorkedInYear);

    expect(result).toEqual(defaultYearlyGrossSalary);
  });
});
