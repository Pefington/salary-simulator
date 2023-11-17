import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import grades from '../data/grades.json';

export const selectedExperience = atomWithStorage('selExperience', 0);
export const selectedRate = atomWithStorage('selRate', grades.Junior.minDailyRate);
export const selectedDays = atomWithStorage('selDays', 218);
export const lockSalary = atomWithStorage('lockSalary', false);
export const showTooltip = atomWithStorage('showTooltip', false);

export const salaryResult = atom(0);
