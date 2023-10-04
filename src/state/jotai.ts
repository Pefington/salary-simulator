import { atomWithStorage } from 'jotai/utils';

import grades from '../data/grades.json';

const juniorMinRate = grades.Junior.minDailyRate;

export const selectedExperience = atomWithStorage('selExperience', 0);
export const selectedRate = atomWithStorage('selRate', juniorMinRate);
export const selectedDays = atomWithStorage('selDays', 218);
