import experienceLevels from '../data/experience.json';
import payGrades from '../data/grades.json';
import { PayGrades, Years } from '../types';

const typedPayGrades: PayGrades = payGrades;

export const findTitle = (experience: Years) =>
  experienceLevels.find(
    (level) => level.minExperience <= experience && experience <= level.maxExperience,
  )!.title;

export const getPayGrade = (experience: Years) => typedPayGrades[findTitle(experience)];
