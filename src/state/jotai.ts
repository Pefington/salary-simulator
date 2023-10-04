import { atom, getDefaultStore } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

import grades from '../data/grades.json';

export const store = getDefaultStore();

export const selectedExperience = atomWithStorage('selExperience', 0);
export const selectedRate = atomWithStorage('selRate', grades.Junior.minDailyRate);
export const selectedDays = atomWithStorage('selDays', 218);

export const salaryResult = atom(0);
