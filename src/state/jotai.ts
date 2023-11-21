import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import grades from '../data/grades.json';

export const selectedExperienceAtom = atomWithStorage('selExperience', 0);
export const selectedRateAtom = atomWithStorage('selRate', grades.Junior.minDailyRate);
export const selectedDaysAtom = atomWithStorage('selDays', 218);
export const lockSalaryAtom = atomWithStorage('lockSalary', false);
export const showTooltipAtom = atomWithStorage('showTooltip', false);

export const rateRefAtom = atom(null);
export const resultRefAtom = atom(null);

export const salaryResultAtom = atom(0);
